(() => {
  const STORAGE_KEY = 'hp-venue-profile';
  const HP_VENUE_PROFILES = window.HP_VENUE_PROFILES || {
    hiddenCafeBarSocial: {
      name: 'Hidden Café Bar Social',
      type: 'Warm & boutique',
      tone: 'Warm & boutique',
      tagline: 'Hidden Café Bar Social · Warm & boutique',
      highlights: [
        'Signature serve: Burnt honey old fashioned',
        'Vinyl-led supper clubs each Thursday',
        'Service mantra: “Warm, sharp, never scripted.”'
      ],
      narrative: 'Independent day-to-night listening bar blending single-origin coffee, low-intervention wines, and detail-obsessed hospitality. Loyalty is framed as private invitations, never discounts.'
    }
  };
  window.HP_VENUE_PROFILES = HP_VENUE_PROFILES;

  const defaultProfile = {
    name: '',
    type: '',
    tone: '',
    nonNegotiables: ''
  };

  const dom = {};
  const subscribers = new Set();
  let profileState = loadProfile();
  if (!profileState.name && HP_VENUE_PROFILES.hiddenCafeBarSocial) {
    profileState = {
      name: HP_VENUE_PROFILES.hiddenCafeBarSocial.name,
      type: HP_VENUE_PROFILES.hiddenCafeBarSocial.type,
      tone: HP_VENUE_PROFILES.hiddenCafeBarSocial.tone,
      nonNegotiables: HP_VENUE_PROFILES.hiddenCafeBarSocial.narrative
    };
    persistProfile(profileState);
  }
  let lastTrigger = null;

  function init() {
    ensureProfileUi();

    dom.summary = document.querySelector('[data-profile-summary]');
    dom.status = document.querySelector('[data-profile-status]');
    dom.triggers = document.querySelectorAll('[data-profile-trigger]');
    dom.modal = document.querySelector('[data-profile-modal]');
    dom.form = document.querySelector('[data-profile-form]');
    dom.alert = document.querySelector('[data-profile-alert]');
    dom.dismissButtons = document.querySelectorAll('[data-profile-dismiss]');
    dom.skipButtons = document.querySelectorAll('[data-profile-skip]');
    dom.reset = document.querySelector('[data-profile-reset]');
    dom.firstField = document.getElementById('venueNameInput');
    dom.yearTarget = document.querySelector('[data-current-year]');

    if (dom.yearTarget) {
      dom.yearTarget.textContent = new Date().getFullYear();
    }

    if (!dom.summary || !dom.triggers.length || !dom.modal || !dom.form) {
      return;
    }

    hydrateForm(profileState);
    renderSummary(profileState);

    dom.triggers.forEach((trigger) => trigger.addEventListener('click', openModal));
    dom.dismissButtons.forEach((btn) => btn.addEventListener('click', closeModal));
    dom.skipButtons.forEach((btn) => btn.addEventListener('click', closeModal));
    dom.modal.addEventListener('click', (event) => {
      if (event.target === dom.modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !dom.modal.hasAttribute('hidden')) {
        closeModal();
      }
    });

    dom.form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(dom.form);
      profileState = {
        name: (formData.get('venueName') || '').trim(),
        type: formData.get('venueType') || '',
        tone: formData.get('venueTone') || '',
        nonNegotiables: (formData.get('venueRules') || '').trim()
      };
      persistProfile(profileState);
      hydrateForm(profileState);
      renderSummary(profileState);
      broadcast();
      flashAlert('Profile saved. Every tool now knows your context.');
      closeModal();
    });

    if (dom.reset) {
      dom.reset.addEventListener('click', () => {
        profileState = { ...defaultProfile };
        persistProfile(profileState);
        hydrateForm(profileState);
        renderSummary(profileState);
        broadcast();
        flashAlert('Venue profile cleared.');
        closeModal();
      });
    }
  }

  function ensureProfileUi() {
    ensureSummarySurface();
    ensureModalSurface();
  }

  function ensureSummarySurface() {
    if (document.querySelector('[data-profile-summary]')) return;
    const placeholder = document.querySelector('[data-profile-mount]');
    const summaryCard = buildSummaryCard();
    if (placeholder) {
      placeholder.replaceWith(summaryCard);
      return;
    }
    const backLink = document.querySelector('.back-link');
    if (backLink && backLink.parentElement) {
      backLink.insertAdjacentElement('afterend', summaryCard);
      return;
    }
    const shell = document.querySelector('.app-shell');
    if (shell) {
      shell.insertAdjacentElement('afterbegin', summaryCard);
    }
  }

  function ensureModalSurface() {
    if (document.querySelector('[data-profile-modal]')) return;
    const modal = buildModal();
    document.body.appendChild(modal);
  }

  function buildSummaryCard() {
    const section = document.createElement('section');
    section.className = 'glass-card profile-summary-banner';
    section.innerHTML = `
      <div class="profile-summary__content" data-profile-summary>
        <p class="eyebrow">Venue memory</p>
        <p class="venue-profile__summary-message">Set your venue voice once. Tone, loyalty language, and non-negotiables follow you into every tool.</p>
      </div>
      <div class="profile-summary__actions">
        <span class="status-pill" data-profile-status>Profile not set</span>
        <button type="button" class="btn btn-ghost" data-profile-trigger>Edit profile</button>
      </div>
    `;
    return section;
  }

  function buildModal() {
    const wrapper = document.createElement('div');
    wrapper.className = 'profile-modal';
    wrapper.setAttribute('data-profile-modal', '');
    wrapper.setAttribute('hidden', '');
    wrapper.innerHTML = `
      <div class="profile-modal__dialog glass-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="profile-modal__header">
          <p class="eyebrow">Venue memory</p>
          <h2 id="modal-title">Tell the tools who you are</h2>
          <p class="muted">This context powers Review Responder, Recipe Costing, Rota Optimizer, and every AI workflow in Hospitality Pro.</p>
          <button type="button" class="btn btn-ghost btn-icon" aria-label="Close profile editor" data-profile-dismiss data-profile-skip>×</button>
        </div>
        <div class="profile-modal__alert" data-profile-alert hidden></div>
        <form class="stack" data-profile-form>
          <label for="venueNameInput">Venue name
            <input id="venueNameInput" name="venueName" type="text" placeholder="Hidden Café Bar Social" required />
          </label>
          <label for="venueTypeSelect">Venue type
            <select id="venueTypeSelect" name="venueType">
              <option value="">Select type</option>
              <option value="Café &amp; Bar">Café &amp; Bar</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Boutique Hotel">Boutique Hotel</option>
              <option value="Members Club">Members Club</option>
              <option value="Heritage Experience">Heritage Experience</option>
              <option value="Event Space">Event Space</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label for="venueToneSelect">Tone of voice
            <select id="venueToneSelect" name="venueTone">
              <option value="">Select tone</option>
              <option value="Warm &amp; boutique">Warm &amp; boutique</option>
              <option value="Luxury &amp; formal">Luxury &amp; formal</option>
              <option value="Casual &amp; friendly">Casual &amp; friendly</option>
              <option value="Heritage &amp; classic">Heritage &amp; classic</option>
              <option value="Playful &amp; bold">Playful &amp; bold</option>
            </select>
          </label>
          <label for="venueRules">Non-negotiables &amp; loyalty language
            <textarea id="venueRules" name="venueRules" rows="4" placeholder="Never say discount — extend a loyalty invitation. Names remembered. Espresso martini tickets under 6 minutes."></textarea>
          </label>
          <div class="profile-modal__actions">
            <button type="button" class="btn btn-ghost" data-profile-reset>Reset profile</button>
            <div class="profile-modal__actions-primary">
              <button type="button" class="btn btn-ghost" data-profile-dismiss data-profile-skip>Cancel</button>
              <button type="submit" class="btn btn-primary">Save profile</button>
            </div>
          </div>
        </form>
      </div>
    `;
    return wrapper;
  }

  function loadProfile() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return { ...defaultProfile };
      const parsed = JSON.parse(stored);
      return { ...defaultProfile, ...parsed };
    } catch (error) {
      console.warn('Unable to parse venue profile', error);
      return { ...defaultProfile };
    }
  }

  function persistProfile(profile) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch (error) {
      console.warn('Unable to persist venue profile', error);
    }
  }

  function hydrateForm(profile) {
    if (!dom.form) return;
    dom.form.venueName.value = profile.name || '';
    dom.form.venueType.value = profile.type || '';
    dom.form.venueTone.value = profile.tone || '';
    dom.form.venueRules.value = profile.nonNegotiables || '';
  }

  function renderSummary(profile) {
    if (!dom.summary || !dom.status) return;

    dom.summary.innerHTML = '';

    if (!profile.name) {
      const body = document.createElement('p');
      body.className = 'venue-profile__summary-message';
      body.textContent = 'Set your venue voice once. Mouthfeel, tone, and non-negotiables follow you into every tool.';
      dom.summary.appendChild(body);
      dom.status.textContent = 'Profile not set';
      dom.status.classList.remove('is-active');
      return;
    }

    const title = document.createElement('strong');
    title.textContent = profile.name;
    dom.summary.appendChild(title);

    const meta = document.createElement('span');
    meta.textContent = ` · ${profile.type || '—'} · ${profile.tone || '—'}`;
    dom.summary.appendChild(meta);

    if (profile.nonNegotiables) {
      const note = document.createElement('p');
      note.className = 'venue-profile__note';
      note.textContent = profile.nonNegotiables;
      dom.summary.appendChild(note);
    }

    dom.status.textContent = 'Profile active';
    dom.status.classList.add('is-active');
  }

  function flashAlert(message) {
    if (!dom.alert) return;
    dom.alert.textContent = message;
    dom.alert.hidden = false;
    setTimeout(() => {
      dom.alert.hidden = true;
      dom.alert.textContent = '';
    }, 4000);
  }

  function openModal(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    dom.modal.removeAttribute('hidden');
    document.body.classList.add('profile-modal-open');
    if (event && event.currentTarget) {
      lastTrigger = event.currentTarget;
    }
    requestAnimationFrame(() => {
      if (dom.firstField) {
        dom.firstField.focus();
      }
    });
  }

  function closeModal() {
    dom.modal.setAttribute('hidden', '');
    document.body.classList.remove('profile-modal-open');
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    } else if (dom.triggers && dom.triggers.length) {
      dom.triggers[0].focus();
    }
  }

  function broadcast() {
    const snapshot = JSON.parse(JSON.stringify(profileState));
    subscribers.forEach((cb) => {
      try {
        cb(snapshot);
      } catch (error) {
        console.warn('Venue profile subscriber error', error);
      }
    });
    window.dispatchEvent(new CustomEvent('venueprofile:update', { detail: snapshot }));
  }

  window.VenueProfile = {
    getProfile: () => JSON.parse(JSON.stringify(profileState)),
    getActiveProfile: () => JSON.parse(JSON.stringify(profileState)),
    openModal: () => openModal(),
    buildPromptContext: () => {
      const p = profileState;
      if (!p || !p.name) return "";
      return `Venue context: ${p.name}. Type: ${p.type}. Tone: ${p.tone}.\nNotes & Non-negotiables: ${p.nonNegotiables}`;
    },
    subscribe(callback) {
      if (typeof callback !== 'function') return () => {};
      subscribers.add(callback);
      callback(JSON.parse(JSON.stringify(profileState)));
      return () => subscribers.delete(callback);
    },
    clear() {
      profileState = { ...defaultProfile };
      persistProfile(profileState);
      renderSummary(profileState);
      broadcast();
    }
  };

  document.addEventListener('DOMContentLoaded', init);
})();
