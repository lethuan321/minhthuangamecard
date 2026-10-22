#!/usr/bin/env node
import { readFile, readdir, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const rules = [
  ['C1', 'Purple/indigo gradient utilities', /(?=.*\b(?:bg-gradient-to-\w+|bg-linear-to-\w+))(?=.*\b(?:from|via|to)-(?:purple|indigo|violet)-\d+)/i],
  ['C2', 'Gradient text utilities', /(?=.*\bbg-clip-text\b)(?=.*\btext-transparent\b)/i],
  ['C3', 'Inter font declaration', /(?:font-family\s*:[^;]*\bInter\b|family=Inter\b|\bInter\s*\(|\bimport\b.*\bInter\b)/i],
  ['C4', 'Large radius paired with large shadow', /(?=.*\brounded-(?:2xl|3xl|full)\b)(?=.*\bshadow-(?:lg|xl|2xl)\b)/i],
  ['C5', 'Lucide icon import', /(?:\bfrom\s*['"]lucide[^'"]*['"]|\brequire\s*\(\s*['"]lucide[^'"]*['"])/i],
  ['C6', 'Generic aspirational copy', /\b(?:elevate your workflow|empowering teams everywhere|scale without limits|build the future of|your all-in-one platform)\b/i],
  ['C7', 'Possible decorative numbering', />\s*0[1-9]\s*<|['"]0[1-9]['"]\s*[,}]/],
  ['C8', 'Cream/terracotta literal pair', /(?=.*(?:#f(?:5f0e8|af7f2)|#fff8f0))(?=.*(?:#(?:c4704f|b85c38|cc7755)))/i],
];
const permanentSkips = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'coverage', 'vendor']);
const exampleSkips = new Set(['examples', 'fixtures', 'stories', '__mocks__']);
const extensions = new Set(['.html', '.htm', '.css', '.scss', '.sass', '.less', '.js', '.jsx', '.mjs', '.cjs', '.ts', '.tsx', '.vue', '.svelte', '.astro']);

export function scanText(source, file = '<text>', includeExamples = false) {
  if (!includeExamples && /\bslop-example\b/.test(source)) return [];
  const lines = source.split(/\r?\n/);
  const matches = [];
  lines.forEach((line, index) => {
    const suppression = [lines[index - 1] ?? '', line].flatMap(value => {
      // Only recognize marker text within common source-comment delimiters.
      const comment = value.match(/(?:\/\/|\/\*|<!--|\*)\s*avoid-ai-design-ignore:\s*([A-Za-z0-9_, -]+)/);
      return comment ? comment[1].split(/[\s,]+/) : [];
    });
    for (const [id, label, pattern] of rules) {
      if (suppression.includes('all') || suppression.includes(id)) continue;
      if (pattern.test(line)) matches.push({ file, line: index + 1, id, label, evidence: 'source-match', snippet: line.trim().slice(0, 240) });
    }
  });
  return matches;
}

export async function scanPaths(inputs, { includeExamples = false } = {}) {
  const files = new Set();
  const errors = [];
  async function visit(input) {
    const absolute = path.resolve(input);
    const segments = absolute.split(path.sep);
    if (segments.some(part => permanentSkips.has(part) || (!includeExamples && exampleSkips.has(part)))) return;
    try {
      const stat = await lstat(absolute);
      if (stat.isSymbolicLink()) return;
      if (stat.isDirectory()) {
        for (const entry of (await readdir(absolute)).sort()) await visit(path.join(absolute, entry));
      } else if (stat.isFile() && extensions.has(path.extname(absolute).toLowerCase())) files.add(absolute);
    } catch (error) { errors.push({ file: absolute, message: error.message }); }
  }
  for (const input of inputs) await visit(input);
  const findings = [];
  for (const file of [...files].sort()) {
    try { findings.push(...scanText(await readFile(file, 'utf8'), file, includeExamples)); }
    catch (error) { errors.push({ file, message: error.message }); }
  }
  return { filesScanned: files.size, findings, errors };
}

async function main() {
  const args = process.argv.slice(2);
  const unknown = args.find(arg => arg.startsWith('--') && !['--json', '--include-examples', '--help'].includes(arg));
  const inputs = args.filter(arg => !arg.startsWith('--'));
  if (args.includes('--help')) {
    console.log('Usage: node detect.mjs [--json] [--include-examples] <files-or-folders>');
    return;
  }
  if (unknown || !inputs.length) {
    console.error(unknown ? `Unknown option: ${unknown}` : 'Provide at least one file or folder.');
    process.exitCode = 1;
    return;
  }
  const report = await scanPaths(inputs, { includeExamples: args.includes('--include-examples') });
  if (args.includes('--json')) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(`${report.filesScanned} files scanned; ${report.findings.length} candidates. Review context before treating matches as defects.`);
    for (const finding of report.findings) console.log(`${finding.file}:${finding.line} [${finding.id}] ${finding.label}\n  ${finding.snippet}`);
    for (const error of report.errors) console.error(`${error.file}: ${error.message}`);
  }
  process.exitCode = report.errors.length ? 1 : report.findings.length ? 2 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
