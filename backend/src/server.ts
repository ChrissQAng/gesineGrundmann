import express from 'express'
import payload from 'payload'
// import { mediaManagement } from 'payload-cloudinary-plugin';
import cors from "cors"; 

require('dotenv').config()
const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:5173", // DEIN FRONTEND
      "http://localhost:3004/admin",
      "http://87.106.129.195"
         ],
    credentials: true, 
  })
);



// app.use(
//   mediaManagement({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   })
// );


// Redirect root to Admin panel
// app.get('/', (_, res) => {
//   res.redirect('/admin')
// })

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(3004)
}

start()
