import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'mysanity-angular-blog',

  projectId: 'ix3iywkw',
  dataset: 'production',
  apiVersion: '2021-08-31',



  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
