import { MdDashboard as icon } from 'react-icons/md'

export default {
  name: 'content',
  title: 'Content',
  type: 'object',
  collapsed: false,
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'textEnriched' }, { type: 'content' }, { type: 'mediaEnriched' },  { type: 'accordion' }, { type: 'button' }, { type: 'form' },],
      options: {
        canDuplicate: 'text'
      }
    },

    {
      name: 'background',
      title: 'Background',
      type: 'array',
      of: [{ type: 'mediaEnriched' }],

    },
    {
      name: 'classes',
      title: 'Classes',
      type: 'text'
    },
    {
      name: 'style',
      title: 'Style',
      type: 'text'
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'classes',
    },
  },
}
