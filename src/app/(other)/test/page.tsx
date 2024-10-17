import ComponentPreview from "@/components/component-preview";
import React from "react";
import Navbar2 from "../../../registry/components/navbars/navbar2";
import Navbar1 from "@/registry/components/navbars/navbar1";
import CustomerReviews from "@/registry/components/testimonials/customer-reviews";
import HeroSection4 from "@/registry/components/hero-sections/hero-section4";
import HeroSection5 from "@/registry/components/hero-sections/hero-section5";
import Footer1 from "@/registry/components/footer/footer1";
import Footer2 from "@/registry/components/footer/footer2";
import BasicFooter from "@/registry/components/footer/basic-footer";

const page = () => {
  return (
    <div className="min-h-[300vh] md:px-40">
      {/* <ComponentPreview name={"HeroSection1"} width="500px" scale={0.8} /> */}
      {/* <HeroSection5 /> */}
      {/* <Navbar2 /> */}
      <Footer1 />
      <Footer2 />
      <BasicFooter />
      <section className="mt-20 flex flex-col gap-2 items-center">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200">
          <span>Hover me</span>
          <div className="ml-1 transition group-hover:translate-x-1">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
        <button className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950">
          <div className="-rotate-45 transition duration-300 group-hover:rotate-0">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-neutral-200"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>

        <button className="group relative">
          <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">
            Hover me
          </div>
          <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>
        </button>
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]">
          Click me
        </button>

        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all [box-shadow:0px_4px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none">
          Click me
        </button>

        <button className="group relative h-12 rounded-full border border-neutral-200 bg-transparent px-4 text-neutral-950">
          <span className="relative inline-flex overflow-hidden">
            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
              Hover me
            </div>
            <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Hover me
            </div>
          </span>
        </button>
        <button
          role="link"
          className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100"
        >
          Hover me
        </button>
        <button
          role="link"
          className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#3b82f6,#3b82f6)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-neutral-950 transition-[background-size] duration-300 hover:bg-[0_2px,100%_2px]"
        >
          Hover me
        </button>
        <button className="group h-8 select-none rounded-lg bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 px-3 text-sm leading-8 text-zinc-50 shadow-[0_-1px_0_1px_rgba(0,0,0,0.8)_inset,0_0_0_1px_rgb(9_9_11)_inset,0_0.5px_0_1.5px_#71717a_inset] hover:bg-gradient-to-b hover:from-zinc-900 hover:via-zinc-900 hover:to-zinc-700 active:shadow-[0_3px_0_0_rgba(0,0,0)_inset]">
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Click me
          </span>
        </button>
        <button className="group h-8 select-none rounded-lg bg-white px-3 text-sm leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]">
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Click me
          </span>
        </button>
        <button className="group flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gradient-to-b from-gray-50 via-gray-50 to-gray-200 px-4 text-gray-950 hover:bg-gradient-to-b hover:from-gray-100 hover:via-gray-100 hover:to-gray-100 active:shadow-inner">
          <span className="block group-active:[transform:translate3d(0,1px,0)]">
            Hover me
          </span>
        </button>
      </section>
      {/* <Pricing3 /> */}
      {/* <SocialProof /> */}
      {/* <CallOutSection />
      <Features3 />
      <p className="text-3xl">hi there</p>
      <main className="h-80 border w-80 mx-auto ">
        <section className="h-1/2 bg-input border-b"></section>
        <section className="h-1/2 bg-primary"></section>
      </main>
      <Faq1 /> */}
    </div>
  );
};

export default page;
