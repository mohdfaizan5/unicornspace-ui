import ShowcaseContainer from "@/components/showcase-container";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
const page = () => {
  return (
    <main className="flex items-center flex-col my-10 gap-16">
      <ShowcaseContainer />
      <section className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-2xl  font-semibold  max-w-[480px] text-center ">
          Meet thousands of beautiful websites built with Next.js by Vercel
        </h2>
        <div className="flex gap-10 items-center justify-center">
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            ALL
          </div>
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            Composable Commerce
          </div>
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            Web Apps
          </div>
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            AI
          </div>
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            Marketing & Media
          </div>
          <div className="cursor-pointer hover:bg-black hover:text-white hover:p-2  hover:rounded-lg transition-all duration-300 ease-in-out">
            Platform Engineering
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="h-auto w-[350px] border p-5 rounded-lg">
            <div className="h-40 w-full border bg-gray-200/60 rounded-sm mb-3"></div>
            <div className="flex items-center">
              <h1 className="">Nike </h1>
              <MdArrowOutward />
            </div>
            <p>Composable Commerce</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
