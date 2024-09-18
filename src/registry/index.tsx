




// componentRegistry file is used to register all the components that are used in the project.
import { RegistrySchema } from "@/types/registry";
import CallOutSection from "./components/CallOut";
import { Faq1 } from "./components/Faq/faq1";
import HeroSection3 from "./components/HeroSections/hero-section3";
import HeroSection from "./components/HeroSections/HeroSection";
import { Pricing2 } from "./components/Pricing/pricing2";
import { Testimonials3 } from "./components/testimonials/Testimonials3";
import AnimatedText from "./components/TextAppearOnScroll.tsx";

const Test = () => {
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

const componentRegistry: RegistrySchema = {
  "Test": {
    component: Test,
    code: ""
  },
  "Faq1": {
    component: Faq1,
    code: `
    
import Image from 'next/image'

const faqs = [
  [
    {
      question: 'Does TaxPal handle VAT?',
      answer:
        'Well no, but if you move your company offshore you can probably ignore it.',
    },
    {
      question: 'Can I pay for my subscription via purchase order?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'How do I apply for a job at TaxPal?',
      answer:
        'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
    },
  ],
  [
    {
      question: 'What was that testimonial about tax fraud all about?',
      answer:
        'TaxPal is just a software application, ultimately your books are your responsibility.',
    },
    {
      question:
        'TaxPal sounds horrible but why do I still feel compelled to purchase?',
      answer:
        'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
    },
    {
      question:
        'I found other companies called TaxPal, are you sure you can use this name?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'How do you generate reports?',
      answer:
        'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
    },
    {
      question: 'Can we expect more inventory features?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'I lost my password, how do I get into my account?',
      answer:
        'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
    },
  ],
]

export function Faq1() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={"https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg"}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

    `
  },


  "Pricing2": {
    component: Pricing2,
    code: `
    import clsx from 'clsx'


import { Button } from '@/components/ui/button'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({ name, price, description, href, features, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400'
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "outline" : "default"}
        
        color="white"
        className="mt-8"
        aria-label={'Get started with the $(name) plan for $(price}'}
      >
        Get started
      </Button>
    </section>
  )
}

export function Pricing2() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" />
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Starter"
            price="$9"
            description="Good for anyone who is self-employed and just getting started."
            href="/register"
            features={[
              'Send 10 quotes and invoices',
              'Connect up to 2 bank accounts',
              'Track up to 15 expenses per month',
              'Manual payroll support',
              'Export up to 3 reports',
            ]}
          />
          <Plan
            featured
            name="Small business"
            price="$15"
            description="Perfect for small / medium sized businesses."
            href="/register"
            features={[
              'Send 25 quotes and invoices',
              'Connect up to 5 bank accounts',
              'Track up to 50 expenses per month',
              'Automated payroll support',
              'Export up to 12 reports',
              'Bulk reconcile transactions',
              'Track in multiple currencies',
            ]}
          />
          <Plan
            name="Enterprise"
            price="$39"
            description="For even the biggest enterprise companies."
            href="/register"
            features={[
              'Send unlimited quotes and invoices',
              'Connect up to 15 bank accounts',
              'Track up to 200 expenses per month',
              'Automated payroll support',
              'Export up to 25 reports, including TPS',
            ]}
          />
        </div>
      </section>
    </section>
  )
}
`
  },

  "Testimonials3": {
    component: Testimonials3,
    code: `
import Image from 'next/image'

const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: 'https://github.com/muhammedtahir1.png',
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: 'https://github.com/likithanagaraj.png',
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: 'https://github.com/mohdfaizan5.png',
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: 'https://github.com/mehwish75.png',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: 'https://github.com/abdulrcs.png',
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: 'https://github.com/mohdfaizan5.png',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials3() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}
`
  },

  "HeroSection3": {
    component: HeroSection3,
    code: `
import { Button } from "@/components/ui/button";


export default function HeroSection3() {
  return (
    <div className="px-4 pt-20 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:pt-32">
      <h1 className="max-w-4xl mx-auto text-5xl font-medium tracking-tight font-display text-slate-900 sm:text-7xl">
        Accounting{' '}
        <span className="relative text-blue-600 whitespace-nowrap">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for small businesses.
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-lg tracking-tight text-slate-700">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don’t get audited.
      </p>
      <div className="flex justify-center mt-10 gap-x-6">
        <Button >Get 6 months free</Button>
        <Button
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="flex-none w-3 h-3 fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>

    </div>
  )
}
`,
  },
  "HeroSection": {
    component: HeroSection,
    code: `import React from "react";
import Link from "next/link";
import Navbar from "@/registry/components/Navbar1";
import { Button } from "@/components/ui/button";
import { Badge } from "../../../components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center">
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 sm:text-6xl sm:w-2/3 sm:text-center">
          Build before its too late,{" "}
          <span className="text-primary ">effectively</span> and
          <span className="text-primary "> effortlessly</span>
        </h1>
        <p className="text-[22px] sm:text-[18px] opacity-75 font-extralight mb-6 mt-5 md:max-w-[600px] md:text-center">
          Meet IndieToolkit, the project-juggling tool for all indie hackers.
          Focus on building, not managing and tracking what is left. Free for
          individuals.
        </p>
        <Link href={""}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here {"->"}
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default HeroSection;
`
  },
  "animated-text": {
    component: CallOutSection,
    code: `"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

function AnimatedText({ text }: any) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.9", "start 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={container} className={"flex flex-wrap font-medium text-3xl"}>
      {words.map((word: string, i: number) => {
        const start = i / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={"relative mr-3"}>
      <span className={"absolute opacity-20"}>{children}</span>

      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
export default AnimatedText;
`,
  },
}


export default componentRegistry;
