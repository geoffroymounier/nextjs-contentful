export default {
  name: 'blog',
  title: 'Blog',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'nbArticles',
      title: 'Nb Articles',
      type: 'number',
    },
    {
      name: 'nbPagination',
      title: 'Nb Page in pagination list',
      type: 'number',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'image', value: 'image' },
          { title: 'description', value: 'description' },
          { title: 'title', value: 'title' }
        ]
      }
    },
    {
      name: 'classes',
      title: 'Additional Classes',
      type: 'text',
    },
    {
      name: 'style',
      title: 'Additional Style',
      type: 'text',
    },
    {
      name: 'itemClasses',
      title: 'Blog Item Classes (for list of items only)',
      type: 'text',
    },
    {
      name: 'itemStyle',
      title: 'Blog Item Styles (for list of items only)',
      type: 'text',
    },
    {
      name: 'paginationClasses',
      title: 'Pagination Classes (for list of items only)',
      type: 'text',
    },
    {
      name: 'paginationStyle',
      title: 'Pagination Style (for list of items only)',
      type: 'text',
    },
  ],
  preview: {
    select: { title: 'name' },
  },
}
