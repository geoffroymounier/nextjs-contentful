import {FaImage as icon} from 'react-icons/fa'

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Text Title',
      type: 'string',
      description: 'Describe the text',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of:[{type:'mediaEnriched'},{type:'content'}],
      options: {
        canDuplicate: 'text'
      }
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'number',
    },
    {
      name: 'transitionStyle',
      title: 'Transition Style',
      type: 'text',
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
  ]
}
