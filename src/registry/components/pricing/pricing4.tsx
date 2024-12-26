import clsx from 'clsx'
import { useId } from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface planProps{
  name:string,
  description:string,
  price:number
  features:string[]
  href:string
  featured?:boolean
}
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

function Plan({ name, description, price, features, href, featured }:planProps) {
  return (
    <div
      className={clsx(
        ' rounded-[50px] relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
        featured && 'bg-primary sm:shadow-lg '
      )}
    >
      {featured && (
        <div className=" absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
          <GridPattern x="50%" y="50%" />
        </div>
      )}
      <div className=" rounded-lg relative flex flex-col">
        <h3
          className={clsx(
            'mt-7 text-lg font-semibold tracking-tight',
            featured ? 'text-white' : ''
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'mt-2 text-lg tracking-tight',
            featured ? 'text-white' : ''
          )}
        >
          {description}
        </p>
        <p className="order-first flex font-display font-bold">
          <span
            className={clsx(
              'text-[1.75rem] leading-tight',
              featured ? 'text-muted-foreground' : ''
            )}
          >
            $
          </span>
          <span
            className={clsx(
              'ml-1 mt-1 text-7xl tracking-tight',
              featured ? 'text-white' : ''
            )}
          >
            {price}
          </span>
        </p>
        <div className="order-last mt-8">
          <ul
            role="list"
            className={clsx(
              '-my-2 divide-y text-base tracking-tight',
              featured
                ? 'divide-white/10 text-white'
                : ''
            )}
          >
            {features.map((feature:any) => (
              <li key={feature} className="flex py-2">
                <CheckIcon
                
                  className=
                    'h-4 w-4 flex-none'
        
                  
                />
                <span className="ml-4">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link href={'#'} >
        <Button

          className={clsx("mt-8 font-extrabold w-full",featured ?'bg-white text-blue-600 hover:bg-white hover:text-blue-600' : '')}
          aria-label={`Get started with the ${name} plan for $${price}`}
        >
          Get started
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default function Pricing4() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-title"
      className="scroll-mt-14  pb-8  sm:scroll-mt-32 sm:pt-20 sm:pb-10 lg:pt-1 lg:pb-16"
    >
      <div className='mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12'>
        
        <p className=" font-display text-5xl font-extrabold tracking-tight  sm:text-6xl">
          Pick your package
        </p>
        <p className="mt-4 max-w-xl text-[16px] tracking-tight ">
          “Everything Starts as a Square” is available in two different packages
          so you can pick the one that’s right for you.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-5xl lg:px-6">
        <div className="grid rounded-[50px]  sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
          <Plan
            name="Essential"
            description="The perfect starting point if you’re on a budget."
            price={15}
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Community access',
            ]}
          />
          <Plan
            featured
            name="Complete"
            description="Everything icon resource you could ever ask for."
            price={229}
            href="#"
            features={[
              'The 240-page ebook',
              'Figma icon templates',
              'Over an hour of screencasts',
              'Weekly icon teardowns',
              'Community access',
            ]}
          />
        </div>
      </div>
    </section>
  )
}
