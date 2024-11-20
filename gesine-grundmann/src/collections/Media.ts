import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: "filename" },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    disableLocalStorage: true,
  },
  fields: [

{
    name: 'order_media_collection',
    type: 'number',
    required: true,
},

  ],
};

export default Media;