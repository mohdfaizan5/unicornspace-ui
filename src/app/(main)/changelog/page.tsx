import React from 'react'
import "@/styles/typography.css";

const page = () => {
  return (
    <div className='max-w-4xl mx-auto px-5 mt-5 space-y-10'>
      <section>
        <h2>Changelog</h2>
        <p>Latest updates and announcements.</p>
      </section>


      <section className='mt-5'>
        <h3>Sept 2024 - V1</h3>
        <h2 className='mt-5 mb-2'>Tools</h2>
        <ol className='list-decimal ml-8 mb-2'>
          <li>Glass Morphism generator (Akshy)</li>
          <li>Readme Generator(Akshy)</li>
          <li>Shadcn Theme generator</li>
          <li>Fonts in Use (Liktha)</li>
          <li>Color palettes (Liktha)</li>
          <li>HEX to RGB to RGBA to HLS (Tahir)</li>
          <li>magicpattern.design/tools/gradient-generator(Likitha)</li>
        </ol>

        <h2 className='mt-5 mb-2'>Components</h2>
        <ol className='list-decimal ml-8 mb-2'>
          <li>Tailwind templates</li>
          <ol className='list-decimal ml-8 mb-2'>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ol>
          <li>Ecommerce application</li>
          <li>Zulkifl Product</li>
        </ol>

        <h2 className='mt-5 mb-2'>Guides</h2>
        <ol className='list-decimal ml-8 mb-2'>
          <li>NextAuth (Faizan)</li>
          <li>Razorpay (Faizan)</li>
          <li>Framer motion basics (Akshy)</li>
          <li>Prisma Basics (Tahir make existing better)</li>
          <li>Upload Thing (Tahir)</li>
          <li>Zustand (Likitha)</li>
        </ol>
        <ol className='list-decimal ml-8 mb-2'>
          <li>Migrated from *contentlayer* to *contentlayer2* and fixed all the errors</li>
        </ol>

      </section >

      <section>
        <h3>July 2024 - V0</h3>
      </section>

    </div >
  )
}

export default page