import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "filename" },
  upload: {
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    disableLocalStorage: false,
  },
  fields: [

{
    name: 'orderOfImages',
    type: 'number',
    required: false,
},

  ],
};

export default Media;