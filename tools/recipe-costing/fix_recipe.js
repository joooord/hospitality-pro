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
html = html.replace(/class="primary-btn"/g, 'class="btn btn-primary"');
html = html.replace(/class="secondary-btn"/g, 'class="btn btn-ghost"');
html = html.replace(/class="tertiary-btn"/g, 'class="btn btn-ghost"');

fs.writeFileSync('index.html', html);
