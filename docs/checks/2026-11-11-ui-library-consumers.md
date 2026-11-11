# Installed library verification

All checks performed on 2026-11-11.

| Consumer | Installed integration | Passed |
| --- | --- | --- |
| Kumo | 2.18.0 with pinned peers; CLI-installed PageHeader and MIT license | Frozen install, types, SSR Button/Input/Table/PageHeader, JS/CSS build; CLI ls/doc/blocks/init/add; browser render |
| Primer | React 38.45.0, primitives 11.10.0 | Frozen install, types, SSR settings list/form/button, JS and theme CSS build; browser render |
| Cloudscape | Components 3.0.1413, global styles 1.0.72 | Frozen install, types, SSR resource table/form/button, JS and global CSS build; browser render |
| Tremor Raw | Seven unchanged source files at ca4d588 with Apache license and provenance | Frozen install, types, Card/Table SSR, chart container SSR, Vite CSS/JS build; browser SVG with two bars |

Exact dependencies and repeatable commands are in each checks/libraries/<name>/README.md and package.json.
Only esbuild is approved for install scripts. Each consumer has one pnpm lock and separate node_modules.
Generated browser output and dependencies are ignored by git. No contributor source workspace was built.
The four upstream source clones are clean. Root lint passed with one existing font warning;
root TypeScript passed after excluding the separately checked consumers. A fresh independent review
confirmed those exclusions, package pins, license files, source cleanliness, CLI cwd and routing.

Shared skill validation and local Markdown targets passed. Both clients retain one SessionStart
registration; its real output now includes the selection rules. Malformed/wrong-event/non-object
hook input stays quiet. The Kumo launcher runs the installed CLI without dlx or changing cwd.

Browser checks establish rendering, not a full accessibility or product interaction audit.
These are installation consumers with labeled demonstration data. Adapt and test in the destination.
