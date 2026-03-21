// tools/flags_validator.js
// Usage: node tools/flags_validator.js
const fs = require('fs');
const path = require('path');

const registryPath = path.join(__dirname, '..', 'src', 'flag_registry.json');
const chaptersDir = path.join(__dirname, '..', 'src', 'chapters');

const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
const known = new Set(registry.flags.map(f => f.flagKey));

// scan all chapter files for "flagKey": "SOMETHING"
const chapterFiles = fs.readdirSync(chaptersDir).filter(n => n.endsWith('.js'));
let missing = new Set();

for (const file of chapterFiles) {
  const content = fs.readFileSync(path.join(chaptersDir, file), 'utf8');
  const re = /"flagKey"\s*:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const key = m[1];
    if (!known.has(key)) missing.add(key);
  }
}

if (missing.size === 0) {
  console.log('✅ All flagKey occurrences found in registry.');
} else {
  console.error('❌ Missing flag keys (present in chapters but not in registry):');
  for (const k of missing) console.error(' -', k);
  process.exit(1);
}