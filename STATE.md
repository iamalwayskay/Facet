# Facet setup

2026-11-11: Forked Atharvsinh-codez/ObsidianUI as iamalwayskay/Facet (MIT).
Local home: /home/kay/Code/Websites/Facet. Main follows upstream main.
The component source stays upstream-compatible. `scripts/facet.mjs` adds a local consumer CLI.
The ~/.local/bin/facet launcher selects Node 22 and pnpm's pinned global shadcn 4.23.0 CLI.
Canonical skill: ~/.claude/skills/obsidian-ui, with a relative link in ~/.codex/skills.
Shared global instructions select Facet for dashboards and non-Shopify UIs; Shopify stays separate.
Both clients have the nonblocking ui-library.py SessionStart reminder. No extra MCP was added.
The existing AGENTS.md was reconciled into .claude/CLAUDE.md; relative links expose one source.

The upstream npm ci baseline failed because two @emnapi 1.11.3 entries were absent from its lockfile.
Repaired the npm lock with npm install --package-lock-only --ignore-scripts.
Retain npm while baselining; no speculative package-manager migration.

Trap: a startup reminder is guidance, not guaranteed compliance by every AI client.
Hosted obsidianui.dev registry URLs point upstream; facet add uses the local fork.
Components carry demo content and external media. Adapt them before shipping.

Secondary references: Cloudflare Kumo, GitHub Primer, AWS Cloudscape, and Tremor patterns
are documented in the shared skill's references/libraries.md. Kumo has a read-only source
clone at /home/kay/Code/Websites/Kumo with its upstream origin unchanged.

Verification: npm ci and full npm run check passed (55 unit tests, 162 component tests).
Production launch and three HTTP routes passed. Real local dashboard-shell install and
consumer type check passed. CLI, skill validation, hook routing and independent review passed.
Kumo 2.18.0 documentation CLI listed components and returned Button docs.
Detailed evidence and pre-existing build warnings: docs/checks/2026-11-11-ui-library-setup.md.
Keep npm for this source checkout: its installation patch edits Next dependency files;
a pnpm migration needs a deliberate supported patch workflow before shared-store use.

2026-11-11: Completed local secondary library integrations, not just reference links.
Each of checks/libraries/{kumo,primer,cloudscape,tremor} has installed pinned application
packages (or unchanged licensed Raw source), one pnpm lock, local node_modules and repeatable
checks. Source references at Websites/{Kumo,Primer,Cloudscape,Tremor} remain clean upstream clones.
The standalone kumo launcher now uses the installed package and preserves caller cwd.
Its init/add PageHeader route, docs and block listing passed. The CLI does not install peers.
The shared skill and existing SessionStart reminder now explain when to choose each library.
Kumo: operational controls; Primer: developer workflows; Cloudscape: resource consoles;
Tremor Raw: analytics charts. Facet remains default; avoid mixing complete themes.

All four frozen installs, type checks, real SSR and browser JS/CSS builds passed.
Browser checks showed real controls/table markup for Kumo, Primer and Cloudscape.
Tremor rendered one Recharts SVG, two bars and a measured nonzero width.
The library site's lint and types passed after excluding independent consumer projects.
Lint retains the pre-existing font warning. Independent review passed with its one issue
(root TS/ESLint sweeping consumers) closed. No source application conversion or deployment.
Trap: do not import app dependencies from the consumers; install in each destination.
Kumo standalone CSS differs from its Tailwind4 route. Current Kumo CLI installs blocks;
the old documentation-only description was corrected. Each consumer README records details.
