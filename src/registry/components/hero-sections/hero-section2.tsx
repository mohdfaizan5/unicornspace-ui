import React from "react";
import { ArrowRight, Check, Star, LucideProps } from "lucide-react";
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <div className="px-6 lg:px-0 lg:pt-4 flex justify-center items-center bg-white dark:bg-white">
      <section className="relative md:w-[60vw] p-2 text-center lg:text-left flex flex-col items-center lg:items-start">
        <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-5xl lg:text-7xl dark:text-black">
          Your Image on a{" "}
          <span className="bg-primary/80 px-2 text-white">Custom</span> Phone
          Case
        </h1>
        <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap dark:text-black">
          Capture your favorite memories with your own,{" "}
          <span className="font-semibold">one-of-one</span> phone case.
          CaseCobra allows you to protect your memories, not just your phone
          case.
        </p>

        <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start dark:text-black">
          <div className="space-y-2">
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              High-quality, durable material
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />5 year print
              guarantee
            </li>
            <li className="flex gap-1.5 items-center text-left">
              <Check className="h-5 w-5 shrink-0 text-green-600" />
              Modern iPhone models supported
            </li>
          </div>
        </ul>

        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="flex -space-x-4">
            <Image
              width={40}
              height={40}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
              src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg"
              alt="user image"
            />
            <Image
              width={40}
              height={40}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
              src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/b4da3e31-4b07-4f7d-8535-e7324cee1f3e._CR0,0,424,424_SX48_.jpg"
              alt="user image"
            />
            <Image
              width={40}
              height={40}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
              src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
              alt="user image"
            />
            <Image
              width={40}
              height={40}
              className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
              src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg"
              alt="user image"
            />
            <Image
              width={40}
              height={40}
              className="inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100"
              src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"
              alt="user image"
            />
          </div>

          <div className="flex flex-col justify-between items-center sm:items-start">
            <div className="flex gap-0.5">
              <Star className="h-4 w-4 text-green-600 fill-green-600" />
              <Star className="h-4 w-4 text-green-600 fill-green-600" />
              <Star className="h-4 w-4 text-green-600 fill-green-600" />
              <Star className="h-4 w-4 text-green-600 fill-green-600" />
              <Star className="h-4 w-4 text-green-600 fill-green-600" />
            </div>

            <p className="dark:text-black">
              <span className="font-semibold">1.250</span> happy customers
            </p>
          </div>
        </div>
      </section>
      <section className="w-full sm:w-[50%]   max-w-[300px] mr-5  mx-auto my-12">
        <Image
          src="/phone-template-white-edges.png"
          alt="Phone Case Template"
          width={600}  
          height={600} 
          className="w-full h-auto object-contain" 
        />
      </section>
    </div>
  );
};

export default HeroSection2;
