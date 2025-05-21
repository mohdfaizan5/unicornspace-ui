import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaApple } from "react-icons/fa";

const HeroSection10 = () => {
  return (
    <main className="relative w-full font-inter flex min-h-[90dvh] flex-col items-center">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 mt-20">
          Delightfully Simple Interval Timer for HIIT workouts
        </h1>
        <Button>
          Get Started <ArrowRight size={14} className="ml-2" />
        </Button>
      </div>
      <section>
        <Image
          src={"/assets/components/iphone-screen.png"}
          width={400}
          height={400}
          alt=""
        />
      </section>
      <div className="flex gap-2 rounded-lg absolute bottom-5 right-5 items-center bg-black py-2 px-3 text-white">
        <FaApple size={34} className="text-white " />
        <p className="text-xs">
          Download on the{" "}
          <span className="text-white block font-bold text-xl">App Store</span>
        </p>
      </div>
    </main>
  );
};

export default HeroSection10;
