import ComponentPreview from '@/components/component-preview'
import ComponentWrapper from '@/components/component-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Cta1 } from '@/registry/components/CTA/cta1'
import { Faq1 } from '@/registry/components/Faq/faq1'
import { Features3 } from '@/registry/components/Features/features3'
import { Header1 } from '@/registry/components/Headers/header1'
import { Pricing2 } from '@/registry/components/Pricing/pricing2'
// import { Review1 } from '@/registry/components/Reviews/review1'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Pricing2/> */}
      {/* <Header1/>  Incomplete  */}
      {/* <Faq1/> */}
      {/* <Pricing3/> half not working */}
      {/* <Review1/> Incomplete */}
      {/* <Features3/> */}
      {/* <Cta1/> animation not working */}
      <ComponentWrapper width="300px" scale={0.8}>
        <form className="p-6 space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button className="w-full">Log in</Button>
        </form>
      </ComponentWrapper>
      <ComponentPreview name={"Testimonials3"} />
    </div>
  )
}

export default page