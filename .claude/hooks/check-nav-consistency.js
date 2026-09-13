#!/usr/bin/env node
// Warns when the hand-duplicated header/nav/footer markup has diverged
// across the site's static HTML pages (there is no template/include system).
const fs = require('fs');
const path = require('path');

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch {
    return '';
  }
}

function extractBlock(html, tagOpenRegex, closeTag) {
  const openMatch = html.match(tagOpenRegex);
  if (!openMatch) return null;
  const start = openMatch.index;
  const end = html.indexOf(closeTag, start);
  if (end === -1) return null;
  return html.slice(start, end + closeTag.length);
}

function main() {
  const raw = readStdin();
  let editedFile = null;
  try {
    const input = JSON.parse(raw);
    editedFile = input.tool_input?.file_path || input.tool_response?.filePath || null;
  } catch {
    // no stdin JSON (e.g. manual test run) — fall back to scanning the repo anyway
  }

  const root = path.resolve(__dirname, '..', '..');
  if (editedFile && !editedFile.replace(/\\/g, '/').endsWith('.html')) {
    return; // edited file wasn't an HTML page, nothing to check
  }

  const htmlFiles = fs.readdirSync(root).filter((f) => f.endsWith('.html'));
  if (htmlFiles.length < 2) return;

  const headers = {};
  const footers = {};

  for (const file of htmlFiles) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    const header = extractBlock(html, /<header class="site-header">/, '</header>');
    const footer = extractBlock(html, /<footer class="site-footer">/, '</footer>');
    if (header) headers[file] = header.replace(/\s+aria-current="page"/g, '').trim();
    if (footer) footers[file] = footer.trim();
  }

  const mismatches = [];

  function checkGroup(label, map) {
    const entries = Object.entries(map);
    if (entries.length < 2) return;
    const [, reference] = entries[0];
    for (const [file, value] of entries.slice(1)) {
      if (value !== reference) mismatches.push(`${label} in ${file} differs from ${entries[0][0]}`);
    }
  }

  checkGroup('header/nav', headers);
  checkGroup('footer', footers);

  if (mismatches.length > 0) {
    console.log(JSON.stringify({
      systemMessage: `Nav/header/footer markup has diverged across pages (no template system, so this must be kept in sync by hand):\n- ${mismatches.join('\n- ')}`,
    }));
  }
}

main();
