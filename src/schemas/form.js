import { MdLink as icon } from 'react-icons/md'

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
      of: [{ type: 'input' }, { type: 'textarea' }, { type: 'content' }, { type: 'textEnriched' }, { type: 'button' }]
    },

    {
      name: 'validation',
      title: 'Validation',
      type: 'array',
      of: [{ type: 'button' }, { type: 'content' }]

    },
    {
      title: 'Messages',
      name: 'messages',
      type: 'object',
      fields: [
        {name: 'requiredErrorMsg', type: 'string', title: 'Required field error message'},
        {name: 'failureMsg', type: 'string', title: 'Failure error message'},
        {name: 'successMsg', type: 'string', title: 'Success error message'},
      ]
    },
    {
      name: 'errorClasses',
      title: 'errorBanner Classes',
      type: 'text',
      description: 'Addtional classes for error banners',
    },
    {
      name: 'errorStyle',
      title: 'errorBanner Style',
      type: 'text',
      description: 'Addtional style for error banner',
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
