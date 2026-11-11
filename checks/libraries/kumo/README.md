# Kumo consumer check

Installed Kumo 2.18.0 with React 19.3.1, Phosphor 2.1.10, ECharts 6.1.0 and Zod 4.6.7.
Source reference: /home/kay/Code/Websites/Kumo, upstream commit 8729c71. That checkout is read-only and clean.
Use Kumo for dense operations dashboards, forms, navigation and accessible controls when Facet lacks the needed component, or when the application already uses Kumo.

Run with Node 22 on PATH:

```sh
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm install --frozen-lockfile
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm run check
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm exec kumo ls
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm exec kumo doc Button
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm exec kumo blocks
```

The check type-checks the real components, renders Button/Input/Table plus a CLI-installed PageHeader on the server, and bundles a browser entry with standalone CSS. It produces dist/index.html. Only esbuild's required install script is approved.
The package library and CLI are installed locally. No dlx or network is needed to query their documentation after installation.

## Block installation

The CLI is not documentation-only. It also copies editable blocks from the installed package:

```sh
# Run in the destination project. init asks for the target directory.
kumo init
kumo blocks
kumo add PageHeader
```

Verified init with its default src/components/kumo directory and add PageHeader in this consumer. The copied source and Cloudflare MIT license are preserved here. The CLI prompts before overwriting existing block files. It does not install @cloudflare/kumo dependencies for the destination; add those to that project's manifest first.

## Styling

This consumer uses @cloudflare/kumo/styles/standalone, which includes compiled utilities, tokens and component styles and needs no Tailwind build.
For Tailwind 4 projects, use Kumo's styles/tailwind import before tailwindcss and add an explicit @source pointing to the package dist JavaScript files. Tailwind does not scan node_modules by default. Adjust that path relative to the destination CSS file.
Use the current package guide; the repository root README omits these important styling details. The library contributor workspace requires Node 24; this consumer does not build it.

## Checks

Frozen installation, TypeScript, SSR, browser CSS/JS bundling and installed CLI ls/doc Button/blocks/init/add PageHeader passed on 2026-11-11.
Browser interaction and screenshot checks are separate from this automated consumer check.
