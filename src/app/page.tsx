import Faq from '@/components/faq'
import HeroSection from '@/components/hero-section'
import Testimonials from '@/components/testimonials'

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