import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';
import Users from './collections/Users'
import artObjects from './collections/artObects'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  upload: {
    limits: {
      fileSize: 5000000, // 5MB en bytes
    },
  },
  collections: [Users, artObjects],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud(),cloudinaryPlugin()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
