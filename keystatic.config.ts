import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    // kind: 'local',
    kind: 'github',
    repo: {
      owner: 'p1l3',
      name: 'devportal-keystatic'
    }
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
