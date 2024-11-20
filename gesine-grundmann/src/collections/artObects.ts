import { CollectionConfig } from 'payload/types'

const artObjects: CollectionConfig = {
  slug: 'artobjects',
  // upload: {
  //   mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
  //   disableLocalStorage: true,
  // },
  fields: [
    {name: "images",
      type: "array",
      maxRows: 5,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media"
        }
      ]

    },
{
    name: 'description',
    type: 'text',
    required: true,
},
{
    name: 'vorangestellt',
    type: 'checkbox',
    required: true,
},

  ],
}

export default artObjects