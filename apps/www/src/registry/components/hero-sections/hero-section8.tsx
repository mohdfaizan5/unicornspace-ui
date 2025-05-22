import { Button } from "@/components/ui/button";
import Image from "next/image";
import AvatarList from "../others/avatar-list";
import { ArrowRight } from "lucide-react";

export default function HeroSection8() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="space-y-6">
        <Image
          src={"/logos/logo-black-256x256.png"}
          width={60}
          height={60}
          alt=""
          className="mx-auto"
        />
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-center max-w-4xl mx-auto">
          Remarkable Websites for Fast-Growing Startups
        </h1>
        <p className="text-lg font-normal text-zinc-600 max-w-2xl mx-auto text-center">
          Get leads and stand out with a new remarkable website that reflects
          your business goals and delivers the message, easy and fast
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="min-w-[200px] h-16 text-base bg-black hover:bg-zinc-800 text-white rounded-full group"
          >
            Book an intro call{" "}
            <ArrowRight
              className="ml-1 group-hover:translate-x-1 duration-200 transition-all"
              size={18}
            />
          </Button>
          <div className="flex items-center gap-1 flex-col">
            <AvatarList />
            <span className="text-sm text-zinc-600">
              Trusted by industry leaders
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
