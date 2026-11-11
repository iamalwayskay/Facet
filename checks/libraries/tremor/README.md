# Tremor Raw consumer check

This is an isolated source-install check. It is not a product starter or an application dependency shared across projects.

## Source and license

- Read-only upstream clone: `/home/kay/Code/Websites/Tremor`.
- Origin: `https://github.com/tremorlabs/tremor.git`.
- Copied source commit: `ca4d588f47820ff3d514d37fa4ee08a4222dec11` (2025-10-10).
- Apache-2.0. The upstream LICENSE is included.
- `provenance.json` records the seven unchanged source paths. These contain Card, Table, BarChart, and their local helpers.
- This is **Tremor Raw**, the copy-source React library. Do not substitute the legacy `@tremor/react` package or assume an official component CLI exists.

## Use in a real project

Choose Tremor when a React dashboard needs an analytics chart or a data display pattern that Facet does not cover. Keep Facet as the default UI foundation. Preserve the product's tokens and brand instead of adding a second design system.

Copy selected source and its imported helpers into the destination project. Install its dependencies in that project's manifest. Use React >=18.2 and Tailwind 4. The checked source uses React 18.3.1, Recharts 2.15.4, Remix Icon 4.6.0, Radix Slot 1.2.0, clsx 2.1.1, and tailwind-merge 3.2.0. Exact versions are pinned here; inspect target-project compatibility before adopting.

Import Tailwind with `@import "tailwindcss"`. Ensure the copied component and chart-color source files are scanned; classes constructed by the upstream helper are deliberately represented as complete class strings. Give charts a nonzero height and width. For Next.js, keep the chart's `"use client"` boundary. No provider is required for these selected components.

Use the copied Card and Table as source references. SSR covers their real table markup. Recharts ResponsiveContainer only emits its container on the server; SVG drawing and chart interaction require a browser. Demonstration numbers in `src/demo.tsx` are explicitly labeled.

## Repeat the checks

```sh
cd /home/kay/Code/Websites/Facet/checks/libraries/tremor
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm install --frozen-lockfile
PATH=/home/kay/.local/bin:$PATH /home/kay/.local/bin/pnpm run check
```

`check` runs TypeScript, server rendering assertions on the real copied components, and the Vite browser/CSS build. Only esbuild's required install script is approved. The package-manager version is pinned and there is one pnpm lockfile.

2026-11-11 result: all checks passed. Vite bundled 637 modules and emitted 17.02 kB of CSS. It warns that the React server directive is ignored in this client-only bundle and that the chart bundle exceeds 500 kB; these are not suppressed. Import charts only where needed in a real application.

The upstream repository's latest copied commit is from October 2025. Recheck maintenance before adoption. This setup does not install or build the full upstream Storybook workspace.
