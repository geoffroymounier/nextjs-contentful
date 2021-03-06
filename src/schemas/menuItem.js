export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{ type: 'button' }]
    },
    {
      name: 'subItemType',
      title: 'How to display subItems',
      type: 'string',
      options: {
        list: [
          { title: 'Flyout', value: 'flyout' },
          { title: 'Dropdown', value: 'dropdown' },
          { title: 'Hamburger', value: 'hamburger' }
        ]
      }
    },
    {
      name: 'interactionIn',
      title: 'How to trigger subItems',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'hover', value: 'hover' },
          { title: 'click', value: 'click' },
        ]
      }
    },
    {
      name: 'interactionDuration',
      title: 'Duration in ms',
      type: 'number',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of:[
        {type:'button'},
        {type:'menuItem'},
        {type:'textEnriched'},
        {type:'mediaEnriched'}
      ]
    },
    {
      name: 'itemClasses',
      title: 'Item Wrapper Classes',
      type: 'text',
    },
    {
      name: 'itemStyle',
      title: 'Item Wrapper Style',
      type: 'text',
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
