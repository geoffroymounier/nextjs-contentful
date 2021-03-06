import {FaImage as icon} from 'react-icons/fa'

export default {
  name: 'mediaEnriched',
  title: 'Media Enriched',
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
      name: 'alternative',
      title: 'Alternative Media',
      type: 'string',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'image',
    },
    {
      name: 'Tablet',
      title: 'Tablet - Media',
      type: 'image',
    },
    {
      name: 'Mobile',
      title: 'Mobile - Media',
      type: 'image',
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
