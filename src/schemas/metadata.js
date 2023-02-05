export default {
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    {
      name: 'site_title',
      title: 'Website Title',
      type: 'string',
    },
    {
      name: 'site_description',
      title: 'Website Description',
      type: 'string',
    },
    {
      name: 'site_url',
      title: 'Public URL',
      type: 'url',
    },
    {
      name: 'site_locale',
      title: 'Language (en|fr|...)',
      type: 'string',
    },
    {
      name: 'site_icon',
      title: 'Website icon',
      type: 'image',
    },
  ],
  validation: false,
  preview: {
    select: {
      title: 'site_title',
    },
    prepare(selection) {
      const year = selection.date && selection.date.split('-')[0];

      return {
        title: `${selection.title} ${year ? `(${year})` : ''}`,
        date: selection.date,
      };
    },
  },
};
