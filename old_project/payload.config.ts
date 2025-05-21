import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Blogs, Guides, Media } from "@/lib/collections.payload";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { slateEditor } from "@payloadcms/richtext-slate";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: slateEditor({}),

  // Define and configure your collections in this array
  collections: [Blogs, Guides, Media],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",

  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      clientUploads: true,
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: "public-read",
      },
    }),
  ],
  // plugins: [
  //   seoPlugin({
  //     collections: [
  //       'blogs',
  //     ],
  //     uploadsCollection: 'media',
  //     generateTitle: ({ doc }) => `${doc.title} | UnicornSpace`,
  //     generateDescription: ({ doc }) => doc.excerpt
  //   })
  // ]
});
