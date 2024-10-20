"use client";
import clsx from "clsx";
import Image from "next/image";


const testimonials = [
  [
    {
      content:
        "Mira’s teaching style is second to none. Everything was easy to follow every step of the way.",
      author: {
        name: "Antonio Littel",
        role: "Frontend Developer",
        image: "https://github.com/mohdfaizan5.png",
      },
    },
    {
      content:
        "Even though I was excited to learn, I was pessimistic that I wouldn’t actually ever get good enough to design my own icons. I was wrong — this book is all I needed.",
      author: {
        name: "Lynn Nolan",
        role: "Growth Marketer",
        image: "https://github.com/mehwish75.png",
      },
    },
    {
      content:
        "I’ve been employed as a professional icon designer for years and still learned tons of new tricks that have made my work even better",
      author: {
        name: "Krista Prosacco",
        role: "Professional Designer",
        image: "https://github.com/abdulrcs.png",
      },
    },
  ],
  [
    {
      content:
        "I run an ecommerce store selling rare vintage gummy bears and could never find a good gummy bear icon. Now I can design my own in minutes.",
      author: {
        name: "Cameron Considine",
        role: "Entrepreneur",
        image: "https://github.com/likithanagaraj.png",
      },
    },
    {
      content:
        "The complete package is worth it for the weekly teardown videos alone. I’ve learned so much watching Mira take apart other icons and recreate them from scratch.",
      author: {
        name: "Regina Wisoky",
        role: "Design Student",
        image: "https://github.com/akshsekhr1102.png",
      },
    },
    {
      content:
        "I didn’t expect to find a lot of value in the community but now I’m in there for at least an hour every day picking up tips from other designers.",
      author: {
        name: "Vernon Cummerata",
        role: "UI Engineer",
        image: "https://github.com/mehwish75.png",
      },
    },
  ],
  [
    {
      content:
        "I couldn’t believe how fast Mira moved in Figma compared to my own workflow. I’m designing icons more accurately in half the time with the shortcuts I learned from her videos.",
      author: {
        name: "Steven Hackett",
        role: "Bootcamp Instructor",
        image: "https://github.com/abdulrcs.png",
      },
    },
    {
      content:
        "I never thought I would enjoy designing icons but using the ideas in this book, it’s become a great way for me to relax while still being creative.",
      author: {
        name: "Carla Schoen",
        role: "Startup Founder",
        image: "https://github.com/muhammedtahir1.png",
      },
    },
    {
      content:
        "All I can say is wow — this is easily the best icon design resource I’ve ever encountered.",
      author: {
        name: "Leah Kiehn",
        role: "Creative Director",
        image: "https://github.com/likithanagaraj.png",
      },
    },
  ],
];
interface TestimonialProps{
  author: {
    name: string;
    role: string;
    image: string;
  };
  children: React.ReactNode;
}
function Testimonial({ author, children }: TestimonialProps) {
  return (
    <figure className="rounded-4xl p-8 shadow-md ring-1 ring-slate-900/5">
      <blockquote>
        <p className="text-sm tracking-tight text-slate-900 before:content-['“'] after:content-['”']">
          {children}
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center">
        <div className="overflow-hidden rounded-full bg-slate-50">
          <Image
            className="h-12 w-12 object-cover"
            src={author.image}
            alt=""
            width={48}
            height={48}
          />
          
        </div>
        <div className="ml-4">
          <div className="text-[15px] font-medium leading-4 tracking-tight text-slate-900">
            {author.name}
          </div>
          <div className="mt-1 text-sm text-slate-600">{author.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials5() {
  return (
    <section className="py-8 sm:py-10 ">
      <div className="text-center mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-[16px] tracking-tight text-slate-600">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </div>
      <div>
        
          <>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
            >
              {testimonials
                .map((column) => column[0])
                .map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex} className="lg:hidden">
                    <Testimonial author={testimonial.author}>
                      {testimonial.content}
                    </Testimonial>
                  </li>
                ))}
              {testimonials.map((column, columnIndex) => (
                <li
                  key={columnIndex}
                  className={ "hidden lg:list-item"}
                >
                  <ul role="list">
                    {column
                      .slice(0)
                      .map((testimonial, testimonialIndex) => (
                        <li
                          key={testimonialIndex}
                          className={clsx(
                            testimonialIndex === 0 && "hidden lg:list-item",
                            testimonialIndex === 1 && "lg:mt-8",
                            testimonialIndex > 1 && "mt-8"
                          )}
                        >
                          <Testimonial author={testimonial.author}>
                            {testimonial.content}
                          </Testimonial>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
           
          </>
        
      </div>
    </section>
  );
}
