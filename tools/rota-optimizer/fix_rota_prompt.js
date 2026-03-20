const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/role: 'system',\s*content: 'You are an expert hospitality operations manager\..*?'\s*}/s, "role: 'system', content: 'You are an expert hospitality operations manager. Generate an optimised weekly rota based on the covers, staff availability, and role minimums provided. Return ONLY minified JSON without markdown formatting or preamble, matching the exact schema requested by the user.' }");

fs.writeFileSync('index.html', html);
