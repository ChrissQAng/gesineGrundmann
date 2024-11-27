import { CollectionConfig } from 'payload/types'

const artObjects: CollectionConfig = {
  slug: 'artobjects',
  access: {
    read: () => true,
  },
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
    // order collection here ---------------
    // {name: "orders",
    //   type: "number",
    // //   fields: [
    // //     {
    // //     name: "order",
    // //     type: "number",
    // //     relationTo: "orderCollection"
    // //   }
    // // ]
    // relationTo: "orderCollection"
    // },
    // ends here --------------------------
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
{
  name: 'orderOfObjects',
  type: 'number'
}
  ],
}

export default artObjects