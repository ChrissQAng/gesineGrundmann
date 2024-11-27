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
    name: 'orderOfImages',
    type: 'number',
    required: true,
},

  ],
};

export default Media;