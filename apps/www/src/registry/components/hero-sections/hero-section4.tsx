import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

function HeroSection4() {
  return (
    <main className="container mx-auto px-4 mt-16 md:mt-24 flex flex-col items-center justify-center gap-8">
      <section className="h-96 w-full max-w-[1100px] mx-auto aspect-[16/9] relative overflow-hidden rounded-xl">
        <Image 
          src="/glass.png" 
          alt="Furniture showcase" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </section>
      <section className="w-full max-w-[1100px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        <h2 className="font-gt text-4xl md:text-5xl font-normal text-brand-text-DEFALUT md:w-1/2 capitalize text-balance text-start">
          All in one furniture needs
        </h2>
        <div className="flex flex-col md:w-1/2 gap-4">
          <p className="text-start md:text-end text-base tracking-tight font-sans text-brand-text-muted leading-6 text-balance">
            Get the best furniture at the best price from the best store in India, only at Wood Decor.
          </p>
          <div className="flex md:justify-end">
            <Link href="#featured-products">
              <Button className="w-52 rounded-full">
                Shop Now <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroSection4;