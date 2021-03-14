import {MdLink as icon} from 'react-icons/md'

export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Button Title',
      type: 'string',
      description: 'Describe the text',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      
    },
    {
      name: 'media',
      title: 'Media',
      type: 'array',
      of:[{type:'mediaEnriched'}]
    },
    {
      name: 'linkType',
      title: 'Type Of Link',
      type: 'string',
      options:{list:[
        {title: 'Href', value: 'a'},
      {title: 'Button', value: 'button'}
      ], layout: 'radio'}
    },
    {
      name: 'href',
      title: 'Link',
      type: 'string',
      
    },
    {
      name: 'classes',
      title: 'Additional Classes',
      type: 'text',
      description: 'Addtional classes',
    },
    {
      name: 'style',
      title: 'Additional Style',
      type: 'text',
      description: 'Addtional classes',
    },
  ]
}
