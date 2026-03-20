const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace hardcoded venue HTML
html = html.replace(/<h2 id="venueName">.*?<\/h2>/, '<h2 id="venueName">Set your venue profile</h2>');
html = html.replace(/<p class="venue-meta" id="venueMeta">.*?<\/p>/, '<p class="muted" id="venueMeta">Your context powers every AI generation</p>');
html = html.replace(/<p id="venueNarrative">.*?<\/p>/, '<p id="venueNarrative" class="muted">Add your tone of voice and non-negotiables to keep replies on-brand.</p>');
html = html.replace(/<ul class="profile-highlights" id="venueHighlights">[\s\S]*?<\/ul>/, '<ul class="profile-highlights" id="venueHighlights"></ul>');

// Clean up old classes
html = html.replace(/class="venue-profile-card"/g, 'class="glass-card stack"');
html = html.replace(/class="ghost-button"/g, 'class="btn btn-ghost"');

html = html.replace(/<button id="generate" class="primary"/g, '<button type="button" class="btn btn-primary" id="generate"');
html = html.replace(/<button id="clearBtn" class="secondary"/g, '<button type="button" class="btn btn-ghost" id="clearBtn"');

// Fix button IDs where missing
html = html.replace(/<button type="button" class="btn btn-ghost" id="regenerate" disabled>/, '<button type="button" class="btn btn-ghost" id="regenerateBtn" disabled>');
html = html.replace(/<button type="button" class="btn btn-ghost" id="copy" disabled>/, '<button type="button" class="btn btn-ghost" id="copyBtn" disabled>');

// Update initVenueProfile to handle empty names properly
html = html.replace(/selectors\.venueName\.textContent = activeProfile\.name \|\| selectors\.venueName\.textContent;/g, 'selectors.venueName.textContent = activeProfile.name || "Set your venue profile";');
html = html.replace(/selectors\.venueMeta\.textContent = activeProfile\.tagline \|\| selectors\.venueMeta\.textContent;/g, 'selectors.venueMeta.textContent = activeProfile.type || "Your context powers every AI generation";');
html = html.replace(/selectors\.venueNarrative\.textContent = activeProfile\.narrative \|\| selectors\.venueNarrative\.textContent;/g, 'selectors.venueNarrative.textContent = activeProfile.nonNegotiables || "Add your tone of voice and non-negotiables to keep replies on-brand.";');

fs.writeFileSync('index.html', html);
