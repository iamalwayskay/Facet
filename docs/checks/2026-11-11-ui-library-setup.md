# Setup verification

- GitHub reports iamalwayskay/Facet is a fork of Atharvsinh-codez/ObsidianUI. Origin and upstream are separate; main is retained.
- Upstream npm ci initially failed on absent @emnapi lock entries. Repaired the lock, then npm ci passed (1,319 packages).
- Node 22: npm run check exited 0. Lint: 0 errors, 1 existing custom-font warning. Types passed. Unit tests: 55 passed. Component tests: 162 passed across 31 files. Production build and Pagefind finished.
- The upstream production build logs a sponsor welcome generateMetadata TypeError when searchParams is absent. It still exits 0. This is a pre-existing site issue, not a component CLI failure. No site deployment was done.
- Production launch at 127.0.0.1:3189 served /, /docs/dashboard-shell and /r/dashboard-shell.json with HTTP 200.
- shadcn 4.23.0 installed as an independent pnpm operator CLI. The facet wrapper selects Node 22 and uses the local registry.
- facet list dashboard returned three source components. facet add dashboard-shell --dry-run reported three files and nine dependencies.
- A clean disposable consumer installed the real local dashboard-shell, its CSS and utils with facet add. Its pnpm policy first required esbuild approval; approved only esbuild in that consumer and repeated installation successfully. TypeScript noEmit passed.
- CLI help works. An unknown component exits 1. Node syntax check passed.
- Shared skill validator passed. Codex skill and instruction symlinks resolve. Existing skill-match hook returns obsidian-ui for build a dashboard.
- ui-library.py has one SessionStart registration in each client. Real-file output is valid. Malformed input, wrong events, non-object payloads, missing/unreadable/empty skill tests exit quietly. Existing hook config is preserved.
- Kumo source is a clean read-only upstream clone. Its pinned 2.18.0 CLI listed components and returned Button documentation. Its full Node 24 contributor workspace was not installed or built.
- Secondary library references include Kumo, Primer, Cloudscape and Tremor with licenses, use cases and install constraints. They do not replace Facet as default.
- Independent review passed with no functional issues.

The temporary test servers were stopped after checks. No application was converted or deployed.
