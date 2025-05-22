import React from "react";
import { ArrowRight, Check, Star, LucideProps } from "lucide-react";
import Image from "next/image";
export const Icons = {
  underline: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 687 155">
      <g
        stroke="currentColor"
        strokeWidth="7"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"
          opacity=".3"
        ></path>
        <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
      </g>
    </svg>
  ),
};
const Testimonials2 = () => {
  return (
    <section className=" grainy-dark py-24">
      <div className="flex flex-col items-center gap-16 sm:gap-32 h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl ">
            What our{" "}
            <span className="relative px-2">
              customers{" "}
              <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 " />
            </span>{" "}
            say
          </h2>
          {/* <img src="/snake-2.png" className="w-24 order-0 lg:order-2" /> */}
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            </div>
            <div className="text-lg leading-8">
              <p>
                &ldquo;The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it.&ldquo;
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                width={50}
                height={50}
                className="rounded-full h-12 w-12 object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Jonathan</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />{" "}
            </div>
            <div className="text-lg leading-8">
              <p>
                I usually keep my phone together with my keys in my pocket and
                that led to some pretty heavy scratchmarks on all of my last
                phone cases. This one, besides a barely noticeable scratch on
                the corner,{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  looks brand new after about half a year
                </span>
                . I dig it.&ldquo;
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                width={50}
                height={50}
                className="rounded-full h-12 w-12 object-cover"
                src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Josh</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
