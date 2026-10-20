import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

assert(html.includes('Ghazi Taqiyya Al Anshari'), 'Full name must render');
assert(html.includes('-50%') && html.includes('270+'), 'Impact metrics must render');
assert(html.includes('panel-core') && html.includes('panel-mentor'), 'Both experience tracks must render');
assert(html.includes('Uangku') && html.includes('Tiketmart') && html.includes('LLaMA 3.1'), 'All flagship projects must render');
assert(html.includes('id="lang-toggle"') && html.includes('id="theme-toggle"'), 'Bilingual and theme toggles must render');
assert(!html.includes('Freelance Graphic Designer'), 'Early non-engineering roles must be excluded');

console.log('✓ Portfolio build verification passed.');
