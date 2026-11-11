import { PageHeader } from './src/components/kumo/page-header/page-header';
import { Button } from '@cloudflare/kumo/components/button';
import { Input } from '@cloudflare/kumo/components/input';
import { Table } from '@cloudflare/kumo/components/table';

export function SmokeView() {
  return <main><PageHeader breadcrumbs={<span>Component checks</span>} title="Kumo component check" description="Demonstration data for installation checks" />
    <label id="resource-search-label" htmlFor="resource-search">Find a resource</label>
    <Input id="resource-search" aria-labelledby="resource-search-label" placeholder="Search resources" />
    <Button variant="primary">Create resource</Button>
    <Table><Table.Header><Table.Row><Table.Head>Name</Table.Head><Table.Head>Status</Table.Head></Table.Row></Table.Header>
      <Table.Body><Table.Row><Table.Cell>Example resource</Table.Cell><Table.Cell>Ready</Table.Cell></Table.Row></Table.Body>
    </Table>
  </main>;
}
