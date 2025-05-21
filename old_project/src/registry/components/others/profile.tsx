
import Link from 'next/link'
import Image from 'next/image'
import { useId } from 'react'
import { Twitter } from 'lucide-react'


interface GridsProps{
  x:string,
  y:string
}



export function GridPattern(props:GridsProps) {
  let patternId = useId()

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={patternId}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}

export default function Profile() {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-900/10 [mask-image:linear-gradient(transparent,white)]">
        <GridPattern x="50%" y="100%" />
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className=" pt-px sm:rounded-6xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full  md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src={'https://github.com/mohdfaizan5.png'}
              width={500}
              height={500}
              alt=""
              sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
            />
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            
            <p className="mt-8 font-display text-2xl font-extrabold tracking-tight 
             sm:text-4xl">
              <span className="block text-blue-600 mb-5 ">Faizan</span> Hey
              there, I’m the author behind ‘Everything Starts as a Square’.
            </p>
            <p className="mt-4 text-[18px] tracking-tight 
            ">
              I’ve been designing icons professionally for over a decade and
              have worked with dozens of the biggest brands to create custom
              sets for their products. I’m an accomplished conference speaker,
              and have been teaching icon design workshops every month for the
              last three years. I’ve worked with designers of all skill levels
              and honed my way of teaching to really click for anyone who has
              the itch to start designing their own icons.
            </p>
            <p className="mt-8">
              <Link
                href="#"
                className="inline-flex items-center text-base font-medium tracking-tight "
              >
                <Twitter className="h-10 w-10 fill-blue-500" />
                <span className="ml-4">Follow on Twitter</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
