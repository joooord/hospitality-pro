const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// remove inline styles
html = html.replace(/<style>[\s\S]*?<\/style>/, '');

// replace classes for liquid glass
html = html.replace(/class="card /g, 'class="glass-card stack ');
html = html.replace(/class="card"/g, 'class="glass-card stack"');
html = html.replace(/class="panel"/g, 'class="glass-card stack"');
html = html.replace(/class="panel /g, 'class="glass-card stack ');
html = html.replace(/<main class="workspace">/g, '<main class="grid-2 align-start">');
html = html.replace(/<section class="venue-profile-card"/g, '<section class="glass-card stack"');
html = html.replace(/<button id="regenerate" class="secondary" disabled>Regenerate<\/button>/, '<button type="button" class="btn btn-ghost" id="regenerate" disabled>Regenerate</button>');
html = html.replace(/<button id="copy" class="copy-button" disabled>Copy<\/button>/, '<button type="button" class="btn btn-ghost" id="copy" disabled>Copy</button>');
html = html.replace(/class="primary-btn"/g, 'class="btn btn-primary"');
html = html.replace(/class="secondary-btn"/g, 'class="btn btn-ghost"');
html = html.replace(/class="tertiary-btn"/g, 'class="btn btn-ghost"');

fs.writeFileSync('index.html', html);
