import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
  studioHost: 'marr-laser',
  deployment: {
    appId: 'lb1oe6zokqktwo3z6j0q4s1n',
  },
});
