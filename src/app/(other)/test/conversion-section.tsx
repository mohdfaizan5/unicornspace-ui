import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from 'lucide-react'
import Image from "next/image"

export function ConversionSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Actionable insights
            <br />
            to help your store
            <br />
            convert more
            <ArrowRight className="inline-block ml-2 w-8 h-8" />
          </h2>
          <p className="text-xl text-zinc-600">
            Grow your e-commerce brand with a CRO audit
            designed to boost conversions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="group bg-black hover:bg-zinc-800 text-white rounded-full h-12"
            >
              Get your FREE Audit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full h-12"
            >
              View Audit Pricing
              <Eye className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -left-4 top-1/4 bg-[#FEF9C3] rounded-lg p-3 shadow-lg z-10">
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-600">+21%</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="absolute -right-4 top-1/4 bg-[#DBEAFE] rounded-lg p-3 shadow-lg z-10">
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-600">+18%</span>
              <span className="text-sm">Increase CRO</span>
            </div>
          </div>

          <div className="bg-zinc-100 rounded-full p-12">
            <Image
              src="/asset/image.jpg"
              alt="Mobile app screenshot"
              width={300}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

