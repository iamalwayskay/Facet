import React from 'react';
import { BaseStyles, ThemeProvider, Button, FormControl, TextInput, ActionList } from '@primer/react';
import '@primer/primitives/dist/css/functional/themes/light.css';
import '@primer/primitives/dist/css/functional/themes/dark.css';

export function App() {
  return <ThemeProvider colorMode="day"><BaseStyles><main>
    <h1>Primer setup check</h1>
    <FormControl><FormControl.Label>Repository</FormControl.Label><TextInput defaultValue="Facet" /></FormControl>
    <Button variant="primary">Save settings</Button>
    <ActionList><ActionList.Item>Repository settings</ActionList.Item><ActionList.Item>Access controls</ActionList.Item></ActionList>
  </main></BaseStyles></ThemeProvider>;
}
