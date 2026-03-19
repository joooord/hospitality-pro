(() => {
  const STORAGE_KEY = 'hp-venue-profile';
  const defaultProfile = {
    name: '',
    type: '',
    tone: '',
    nonNegotiables: ''
  };

  const dom = {};
  const subscribers = new Set();
  let profileState = loadProfile();
  let lastTrigger = null;

  function init() {
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
        name: formData.get('venueName').trim(),
        type: formData.get('venueType'),
        tone: formData.get('venueTone'),
        nonNegotiables: formData.get('venueRules').trim()
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
