# Cloudscape consumer check

Local source: `/home/kay/Code/Websites/Cloudscape` ([upstream README](../../../../Cloudscape/README.md)).
Origin: https://github.com/cloudscape-design/components.git. This is a clean, read-only upstream clone. License: Apache-2.0.
The contributor workspace is not installed; this is an isolated consumer of the real published packages.

## Versions

- @cloudscape-design/components 3.0.1413; @cloudscape-design/global-styles 1.0.72.
- React and React DOM 19.3.1, with matching 19.x type packages.
- pnpm 12.16.1; Node 22 from `/home/kay/.local/bin`.
- One local node_modules and pnpm-lock.yaml. esbuild is the only approved dependency build script.

## Use

Choose Cloudscape for resource-management consoles, complex tables, filtering, multi-step wizards and configurable enterprise dashboards when Facet lacks a suitable interaction. Keep it in products already using Cloudscape. Facet remains the default; do not combine complete Cloudscape and Facet themes in one application.

Install `@cloudscape-design/components` and `@cloudscape-design/global-styles` in the destination project. Import components from their package subpaths, such as `@cloudscape-design/components/button` and `/table`. Import `@cloudscape-design/global-styles/index.css` once at the app root. Bundlers must support the package's CSS and font/image assets. Preserve Apache-2.0 notices when distributing copied substantial source. This is a package library, not a shadcn registry; no separate component-installation CLI is needed.

`smoke.tsx` is a working example with Button, FormField, Input, Header and a typed resource Table. Its example row is demonstration data.

## Verify

```sh
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm install --frozen-lockfile
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm run check
```

Checked 2026-11-11: frozen install passed; TypeScript passed; real components rendered to HTML with the expected button and resource-table content; browser JS and 949,800 bytes of component/global CSS bundled. `dist/index.html` is the generated browser consumer; serve this directory over local HTTP to inspect it. The check does not claim a manual keyboard or browser interaction audit.
