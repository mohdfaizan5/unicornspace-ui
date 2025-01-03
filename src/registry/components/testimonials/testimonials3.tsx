import { Icons } from "@/components/icons";
import Image from "next/image";

type TestimonialProps = {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
};

interface Props {
  className?: string;
}

// Corrected the type declaration here
const testimonials: TestimonialProps[][] = [
  [
    {
      content:
        "It is a great tool that helps me to save time and focus on the core functionality of my project.",
      author: {
        name: "Mohammed Tahir",
        role: "FrontEnd Developer",
        image: "https://github.com/muhammedtahir1.png",
      },
    },
  ],
  [
    {
      content:
        "Saves me 10+ hours every project with components and saves me around 20+ hours in its tools",
      author: {
        name: "Mohammed Faizan",
        role: "Founder of UnicornSpace",
        image: "https://github.com/mohdfaizan5.png",
      },
    },
    {
      content: "It's a thing I use on my daily basis.",
      author: {
        name: "Akshy",
        role: "Technical Student",
        image: "https://github.com/mehwish75.png",
      },
    },
  ],
  [
    {
      content:
        "UnicornSpaceUI is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
      author: {
        name: "Likitha N",
        role: "Backend Engineer, PassionateSouls",
        image: "https://github.com/likithanagaraj.png",
      },
    },
  ],
];

function QuoteIcon(props: Props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export default function Testimonials3() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50/0 z-10 py-20 sm:py-32"
    >
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-center text-3xl tracking-tight sm:text-4xl relative">
            <Icons.fire className="dark:fill-white size-14 absolute right-7 md:right-10 -top-14 animate-pulse" />
            Loved by startups & developers like you
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li className="z-10" key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-4 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl dark:bg-[hsl(240,3%,14%,1)] bg-card/40 p-6 shadow-xl shadow-primary/5">
                      <QuoteIcon className="absolute top-6 left-6 fill-primary/5" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight ">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                        <div>
                          <div className="font-display text-base ">
                            {testimonial.author.name}
                          </div>
                          <div className=" text-sm text-muted-foreground">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-12 w-12 object-cover"
                            src={testimonial.author.image}
                            alt={testimonial.author.name} // Use author name for better accessibility
                            width={50}
                            height={50}
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
  );
}
