export default {
  name: 'blogItem',
  title: 'Blog Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'headImage',
      title: "Image en tete",
      type: 'array',
      of: [{ type: 'mediaEnriched' }]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Our textContent',
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
  ],
  preview: {
    select: { title: 'name' },
  },
}
