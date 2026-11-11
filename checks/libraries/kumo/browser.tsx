import { createRoot } from 'react-dom/client';
import '@cloudflare/kumo/styles/standalone';
import { SmokeView } from './view';
createRoot(document.getElementById('root')!).render(<SmokeView />);
