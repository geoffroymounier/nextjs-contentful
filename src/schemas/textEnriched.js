import {GrTextWrap as icon} from 'react-icons/gr'

export default {
  name: 'textEnriched',
  title: 'Text Enriched',
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
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      description: 'Our textContent',
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
