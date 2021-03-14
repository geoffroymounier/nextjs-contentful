export default {
  name: 'menu',
  title: 'Menu',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'regex',
      title: 'Page Included',
      type: 'string',
    },
    {
      name: 'transition',
      title: 'Let menu disappear',
      type: 'number',
    },
    {
      name: 'mobile',
      title: 'Mobile Menu',
      type: 'array',
      of:[{type:'menuItem'}]
    },
    {
      name: 'desktop',
      title: 'Desktop Menu',
      type: 'array',
      of:[{type:'menuItem'}]
    },
    {
      name: 'classes',
      title: 'Additional Classes',
      type: 'text',
    },
    {
      name: 'styled',
      title: 'Additional Style',
      type: 'text',
    },
  ],
  preview: {
    select: {title: 'name'},
  },
}
