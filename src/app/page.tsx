import Faq from '@/components/Faq'
import HeroSection from '@/components/HeroSection'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Testimonials/>
      <Faq/>
    </div>
  )
}

export default page