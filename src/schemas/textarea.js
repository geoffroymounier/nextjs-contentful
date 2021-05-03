import {MdLink as icon} from 'react-icons/md'

export default {
  name: 'textarea',
  title: 'Textarea',
  type: 'object',
  icon,
  fields: [
    {
      name: 'id',
      title: 'Input Id',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string', 
    },
    {
      name: 'required',
      title: 'Required',
      type: 'boolean'
    },
    {
      name: 'regex',
      title: 'Regex',
      type: 'string'
    },
    {
      name: 'errorMsg',
      title: 'Error Message',
      type: 'string'
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
