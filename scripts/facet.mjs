#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [command, name, ...options] = process.argv.slice(2);
const registry = join(root, 'public/r');
const items = () => JSON.parse(readFileSync(join(registry, 'registry.json'), 'utf8')).items;
if (!command || ['--help', '-h', 'help'].includes(command)) {
  console.log('Facet — local ObsidianUI source\n\nfacet list [search]\nfacet show <name>\nfacet add <name> [shadcn add options]\n\nRun add inside the destination project. It uses the local fork, not the hosted registry.\nReview with --dry-run. Existing files are not overwritten by default.');
} else if (command === 'list') {
  for (const item of items().filter(item => !name || `${item.name} ${item.description || ''}`.toLowerCase().includes(name.toLowerCase()))) {
    console.log(`${item.name}\t${item.description || ''}`);
  }
} else if (['show', 'add'].includes(command)) {
  if (!name || !items().some(item => item.name === name)) {
    console.error('Choose an exact component name from facet list.');
    process.exitCode = 1;
  } else {
    const file = join(registry, `${name}.json`);
    if (command === 'show') console.log(readFileSync(file, 'utf8'));
    else {
      const cli = join(process.env.HOME, '.local/share/pnpm/bin/shadcn');
      if (!existsSync(cli)) {
        console.error('Install the shadcn CLI with pnpm add --global shadcn@4.23.0.');
        process.exitCode = 1;
      } else {
        const result = spawnSync(cli, ['add', file, ...options], { stdio: 'inherit' });
        if (result.error) console.error(result.error.message);
        process.exitCode = result.status ?? 1;
      }
    }
  }
} else {
  console.error('Unknown command. Run facet --help.');
  process.exitCode = 1;
}
