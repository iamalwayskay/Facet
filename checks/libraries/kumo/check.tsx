import { renderToString } from 'react-dom/server';
import { SmokeView } from './view';
const html = renderToString(<SmokeView />);
for (const marker of ['Create resource', 'Search resources', 'Example resource', '<table', '<input', '<button']) {
  if (!html.includes(marker)) throw new Error(`Missing rendered component: ${marker}`);
}
console.log('Kumo Button, Input and Table server render passed');
