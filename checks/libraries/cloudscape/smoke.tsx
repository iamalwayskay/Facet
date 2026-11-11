import React from 'react';
import Button from '@cloudscape-design/components/button';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Table from '@cloudscape-design/components/table';
import Header from '@cloudscape-design/components/header';
import '@cloudscape-design/global-styles/index.css';

export function App() {
  return <main><h1>Cloudscape setup check</h1>
    <FormField label="Resource name"><Input value="Facet" onChange={() => {}} /></FormField>
    <Button variant="primary">Create resource</Button>
    <Table items={[{ name: 'Example resource', state: 'Ready' }]} header={<Header>Resources</Header>}
      columnDefinitions={[{ id: 'name', header: 'Name', cell: item => item.name }, { id: 'state', header: 'State', cell: item => item.state }]}
      trackBy="name" />
  </main>;
}
