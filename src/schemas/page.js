import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'href',
      title: 'Href',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'reference',
      to:[{type:'banner'}],
    },
    {
      name: 'header',
      title: 'Header',
      type: 'reference',
      to:[{type:'menu'}],
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'reference',
      to:[{type:'menu'}],
    },
    {
      name: 'content',
      title: 'Blocks',
      type: 'array',
      of:[{type:'content'},{type:'blog'}],
      options: {
        canDuplicate: 'text'
      }
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
    select: {
      title: 'title',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0]
     

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
      
      }
    },
  },
}
