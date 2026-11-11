# Primer consumer check

Local source: `/home/kay/Code/Websites/Primer` ([upstream README](../../../../Primer/README.md)).
Origin: https://github.com/primer/react.git. This is a clean, read-only upstream clone. License: MIT.
The contributor workspace is not installed; this is an isolated consumer of the real published packages.

## Versions

- @primer/react 38.45.0; @primer/primitives 11.10.0.
- React, React DOM and react-is 19.3.1; matching 19.x type packages.
- pnpm 12.16.1; Node 22 from `/home/kay/.local/bin`.
- One local node_modules and pnpm-lock.yaml. esbuild is the only approved dependency build script.

## Use

Choose Primer for developer tools, repository workflows, settings, action lists and navigation when its interaction patterns fit the task. Keep it in products already using Primer. Facet remains the default; do not add a second complete theme system to a Facet application.

Install `@primer/react` and `@primer/primitives` in the destination project, with React, React DOM and react-is peers. Import `ThemeProvider`, `BaseStyles` and selected components from `@primer/react`. Import the required light/dark theme CSS from `@primer/primitives/dist/css/functional/themes/`. Set the matching `data-color-mode`, `data-light-theme` and `data-dark-theme` attributes on the document root. This package is not a shadcn registry and has no component installation CLI.

`smoke.tsx` is a working example with ThemeProvider, BaseStyles, Button, FormControl, TextInput and ActionList. Demo values are check content, not production facts.

## Verify

```sh
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm install --frozen-lockfile
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm run check
```

Checked 2026-11-11: frozen install passed; TypeScript passed; real components rendered to HTML with expected button and settings-list text; browser JS and 515,429 bytes of component/theme CSS bundled. `dist/index.html` is the generated browser consumer; serve this directory over local HTTP to inspect it. The check does not claim a manual keyboard or browser interaction audit.
