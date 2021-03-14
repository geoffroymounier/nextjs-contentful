import {FaCaretRight as icon} from 'react-icons/fa'

export default {
  name: 'accordion',
  title: 'Accordion',
  type: 'object',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Text Title',
      type: 'string',
      description: 'Describe the text',
    },
    {
      name: 'header',
      title: 'Header',
      type: 'array',
      of:[{type:'textEnriched'}]
    },
    {
      name: 'bullet',
      title: 'Bullet',
      type: 'array',
      of:[{type:'mediaEnriched'}]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of:[{type:'content'}]
    },
    {
      name: 'Mobile',
      title: 'Mobile - Media',
      type: 'image',
    },
    {
      name: 'itemClasses',
      title: 'Wrapper Classes',
      type: 'text',
      description: 'Addtional classes',
    },
    {
      name: 'itemStyle',
      title: 'Wrapper Style',
      type: 'text',
      description: 'Addtional classes',
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
