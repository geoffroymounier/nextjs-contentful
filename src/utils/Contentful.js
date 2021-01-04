
const fieldsProperties = {
  content : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: "tags",
      name: "tags",
      type: "Array",
      items: {
        type: "Symbol"
      }
    },
    {
      id: 'items',
      name: 'Items',
      type: 'Array',
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "buttons",
              "textEnriched",
              "mediaEnriched",
              "RichText",
              "content",
            ]
          }
        ],
        linkType: "Entry"
      },
      required: false
    },
    {
      id: 'background',
      name: 'Background',
      type: 'Link',
      linkType:'Entry',
      validations : [{
        linkContentType : ['mediaEnriched']
      }],
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'styled',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  page : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'href',
      name: 'Href Link',
      type: 'Symbol',
      required: true
    },
    {
      id: 'banner',
      name: 'Banner',
      type: 'Link',
      linkType:'Entry',
      validations:[{
        linkContentType:['content']
      }],
      required: false
    },
    {
      id: 'header',
      name: 'Header',
      type: 'Link',
      linkType:'Entry',
      validations:[{
        linkContentType:['menu']
      }],
      required: false
    },
    {
      id: 'footer',
      name: 'Footer',
      type: 'Link',
      linkType:'Entry',
      validations:[{
        linkContentType:['menu']
      }],
      required: false
    },
    {
      id: "tags",
      name: "tags",
      type: "Array",
      items: {
        type: "Symbol"
      }
    },
    {
      id: 'description',
      name: 'Description',
      type: 'Symbol',
      required: true
    },
    {
      id: 'content',
      name: 'Blocks',
      type: 'Array',
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "content",
              "banner",
              "blog"
            ]
          }
        ],
        linkType: "Entry"
      },
      required: true
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Object',
      required: false
    },
  ],
  banner : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'items',
      name: 'Items',
      type: 'Array',
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "mediaEnriched",
              "content",
            ]
          }
        ],
        linkType: "Entry"
      },
      required: true
    },
    {
      id: 'duration',
      name: 'Duration',
      type: 'Number',
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'transitionStyle',
      name: 'Transition Style',
      type: 'Text',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  textEnriched : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'value',
      name: 'Default Value',
      type: 'Symbol',
      required: false
    },
    {
      id: 'tag',
      name: 'Tag',
      type: 'Symbol',
      validations: [
        {
          in: [
            "p",
            "label",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "span"
          ]
        }
      ],
      required: false
    },
    {
      id: 'content',
      name: 'Content',
      type: 'RichText',
      validations: [
        {
          nodes: {
            "entry-hyperlink": [
              {
                linkContentType: [
                  "buttonField",
                  "buttons",
                  "mediaEnriched",
                  "textEnriched"
                ],
                message: null
              }
            ]
          }
        }
      ],
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  mediaEnriched : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'alternative',
      name: 'Alternative Media',
      type: 'Symbol',
      required: false,
    },
    {
      id: 'media',
      name: 'Media',
      type: 'Link',
      required: false,
      linkType: "Asset",
    },
    {
      id: 'tablet',
      name: 'Tablet - Media',
      type: 'Link',
      required: false,
      linkType: "Asset",
    },
    {
      id: 'mobile',
      name: 'Mobile - Media',
      type: 'Link',
      required: false,
      linkType: "Asset",
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false,
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },

  ],
  buttons : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'buttons',
      name: 'Buttons',
      type: 'Array',
      required: true,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "buttonField",
            ]
          }
        ],
        linkType: "Entry"
      }
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Object',
      required: false
    },
  ],
  buttonField : [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'label',
      name: 'Label',
      type: 'Symbol',
      required: false
    },
    {
      id: 'media',
      name: 'Media',
      type: 'Link',
      linkType:'Entry',
      validations : [{
        linkContentType : ['mediaEnriched']
      }],
      required: false
    },
    {
      id: 'linkType',
      name: 'Type of Link',
      type: 'Symbol',
      required: true,
      validations: [{
        in: ['a','button']
      }]

    },
    {
      id: 'href',
      name: 'Link',
      type: 'Symbol',
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  menu: [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'tags',
      name: 'Tags',
      type: 'Symbol',
      required: false
    },
    {
      id: 'regex',
      name: 'Pages Included',
      type: 'Symbol',
      required: true
    },
    {
      id: 'transition',
      name: 'Let menu disappear',
      type: 'Number',
      required: false
    },
    {
      id: 'mobile',
      name: 'Mobile Menu',
      type: 'Link',
      linkType:'Entry',
      validations: [
        { linkContentType: [ 'menuItem' ] }
      ],
      required: false
    },
    {
      id: 'desktop',
      name: 'Desktop Menu',
      type: 'Link',
      linkType:'Entry',
      validations: [
        { linkContentType: [ 'menuItem' ] }
      ],
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'styled',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  menuItem: [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: 'tags',
      name: 'Tags',
      type: 'Symbol',
      required: false
    },
    {
      id: 'link',
      name: 'Link',
      type: 'Link',
      linkType:'Entry',
      validations : [{
        linkContentType : ['buttonField'],
      }],
      required: false
    },
    {
      id: 'type',
      name: 'How to display subItems',
      type: 'Symbol',
      validations: [
        { in: [ 'flyout', 'dropdown' ] }
      ],
      required: false
    },
    {
      id: 'items',
      name: 'Items',
      type: 'Array',
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "buttonField",
              "menuItem",
              "textEnriched",
              "mediaEnriched",
            ]
          }
        ],
        linkType: "Entry"
      },
      required: false
    },
    {
      id: 'itemClasses',
      name: 'Items Wrapper Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'itemStyle',
      name: 'Item Wrapper Style',
      type: 'Text',
      required: false
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ],
  blog: [
    {
      id: 'name',
      name: 'Name',
      type: 'Symbol',
      required: true
    },
    {
      id: "tags",
      name: "tags",
      type: "Array",
      items: {
        type: "Symbol",
        validations: []
      }
    },
    {
      id: "nbArticles",
      name: "Nombre d'Articles",
      type: "Symbol",
      required: true,
      validations: [
        {
          in: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
          ]
        }
      ]
    },
    {
      id: "nbPagination",
      name: "Nombre de Pages dans bandeau pagination",
      type: "Symbol",
      required: true,
      validations: [
        {
          in: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
          ]
        }
      ]
    },
    {
      id: "items",
      name: "Items",
      type: "Array",
      items: {
        type: "Symbol",
        validations: [
          {
            in: [
              "image",
              "title",
              "description"
            ]
          }
        ]
      }
    },
    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
    {
      id: 'itemClasses',
      name: 'Blog Item Classes (for list of items only)',
      type: 'Symbol',
      required: false
    },
    {
      id: 'itemStyle',
      name: 'Item Wrapper Style',
      type: 'Text',
      required: false
    },
    {
      id: 'paginationClasses',
      name: 'Pagination Classes (for list of items only)',
      type: 'Symbol',
      required: false
    },
    {
      id: 'paginationStyle',
      name: 'Item Wrapper Style',
      type: 'Text',
      required: false
    },
  ],
  blogItem: [
    {
      id: 'name',
      name: 'Titre',
      type: 'Symbol',
      required: true
    },
    {
      id: 'description',
      name: 'Description',
      type: 'Symbol',
      required: false
    },
    {
      id: 'href',
      name: 'Href Link',
      type: 'Symbol',
      required: true
    },
    {
      id: 'tags',
      name: 'Tags',
      type: 'Symbol',
      required: false
    },
    {
      id: 'headImage',
      name: "Image d'en tête",
      type: 'Link',
      linkType:'Entry',
      validations : [{
        linkContentType : ['mediaEnriched']
      }],
      required: false
    },
    {
      id: 'type',
      name: 'How to display subItems',
      type: 'Symbol',
      validations: [
        { in: [ 'flyout', 'dropdown' ] }
      ],
      required: false
    },

    {
      id: 'classes',
      name: 'Additional Classes',
      type: 'Symbol',
      required: false
    },
    {
      id: 'style',
      name: 'Additional Style',
      type: 'Text',
      required: false
    },
  ]
}



// function migration(migration){
//  migration.deleteContentType('banner');
//   migration.deleteContentType('author')
//   migration.deleteContentType('block')
//   migration.deleteContentType('blogPost')
//   migration.deleteContentType('contentSection')
//   migration.deleteContentType('person')
//   migration.deleteContentType('tag')

// }

 const migration = async (migration, context) => {
  
  const makeRequest = context.makeRequest
  const {items} = await makeRequest({
    method: 'GET',
    url: `/content_types`
  });

  for (let i in items){
    const item = items[i]

    const id = item.sys.id
    const {fields} = item 
    if (fieldsProperties[id]) {

      const content = migration.editContentType(id);
      fieldsProperties[id].forEach(fieldProp => {
        
        const options = {...fieldProp}
        delete options.id;
        const indexField = fields.findIndex(({id}) => id === fieldProp.id)  
        if (options.deleted) {
          content.deleteField(fieldProp.id)
        } else if  (indexField > -1) {
          // already exists
          content.editField(fields[indexField].id, options)
        } else {
          content.createField(fieldProp.id, options)
        }
      });
    }
    
  }


  // const page = migration.createContentType('page', {
  //   name: 'Page',
  //   description: 'A global Page',
  //   // displayField: 'href'
  // });
  
  // const textEnriched = migration.createContentType('textEnriched', {
  //   name: 'Text',
  //   description: 'An enriched Text',
  //   // displayField: 'name'
  // });

  // const mediaEnriched = migration.createContentType('mediaEnriched', {
  //   name: 'Media',
  //   description: 'A media with more complexity',
  //   // displayField: 'name'
  // });

  // const buttons = migration.createContentType('buttons', {
  //   name: 'Buttons',
  //   description: 'A set of Buttons',
  //   // displayField: 'name'
  // });

  // const buttonField = migration.createContentType('buttonField', {
  //   name: 'ButtonField',
  //   description: 'A single Button',
  //   // displayField: 'name'
  // });

  // const form = migration.createContentType('form', {
  //   name: 'Form',
  //   description: 'A Form',
  //   // displayField: 'name'
  // });

  // const formField = migration.createContentType('formField', {
  //   name: 'FormField',
  //   description: 'A FormField',
  //   // displayField: 'name'
  // });


  // const collectionItem = migration.createContentType('collectionItem', {
  //   name: 'CollectionItem',
  //   description: 'A Collection Item',
  //   // displayField: 'name'
  // });

  // const collection = migration.createContentType('collection', {
  //   name: 'Collection',
  //   description: 'A Collection of Collection Items',
  //   // displayField: 'name'
  // });

  // const gallery = migration.createContentType('gallery', {
  //   name: 'Gallery',
  //   description: 'A Gallery',
  //   // displayField: 'name'
  // });

  // const menu = migration.createContentType('menu', {
  //   name: 'menu',
  //   description: 'A Gallery',
  //   // displayField: 'name'
  // });

  // const menuItem = migration.createContentType('menuItem', {
  //   name: 'MenuItem',
  //   description: 'A Menu Item',
  //   // displayField: 'name'
  // });

  // const banner = migration.createContentType('banner', {
  //   name: 'Banner',
  //   description: 'A Banner',
  //   // displayField: 'name'
  // });


};

module.exports = migration;