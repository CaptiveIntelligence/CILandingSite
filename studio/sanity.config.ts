import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig([{
  name: 'ci-datahub',
  title: 'CI Data Hub',
  projectId: 'nsu1h65h',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
	basePath: '/production',
},{
  name: 'ci-datahub-staging',
  title: 'CI Data Hub Staging',
  projectId: 'nsu1h65h',
  dataset: 'staging',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
	basePath: '/staging',
}]);