import {MdLink as icon} from 'react-icons/md'

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Form Title',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      
    },
    {
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of:[{type:'input'}, {type:'textarea'}, {type:'content'}, {type:'textEnriched'}, {type:'button'}]
    },
   
    {
      name: 'validation',
      title: 'Validation',
      type: 'array',
      of:[{type:'button'}, {type:'content'}]
      
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
