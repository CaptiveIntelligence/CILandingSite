import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { netlifyTool } from 'sanity-plugin-netlify';
import { schemaTypes } from './schemaTypes';

export default defineConfig([{
  name: 'ci-datahub',
  title: 'CI Live',
  projectId: 'nsu1h65h',
  dataset: 'production',
  plugins: [structureTool(), netlifyTool()],
  schema: { types: schemaTypes },
	basePath: '/production',
},{
  name: 'ci-datahub-staging',
  title: 'CI Staging',
  projectId: 'nsu1h65h',
  dataset: 'staging',
  plugins: [structureTool(), netlifyTool()],
  schema: { types: schemaTypes },
	basePath: '/staging',
}]);