"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { WiStars } from "react-icons/wi";

const ProductImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="md:max-w-[29rem] relative">
      <Carousel setApi={setApi} opts={{ loop: false }}>
        <CarouselContent className="relative">
          <CarouselItem className="">
            <Image
              className="mx-auto"
              src={
                "https://www.apple.com/v/macbook-pro/ak/images/overview/closer-look/3d_viewer_pf_16__b8iq7yl5sewi_large.jpg"
              }
              width={350}
              height={400}
              alt=""
            />
          </CarouselItem>
          <CarouselItem className="">
            <Image
              className="mx-auto"
              src={
                "https://www.apple.com/v/macbook-pro/ak/images/overview/closer-look/3d_viewer_pt_closed__xhvulpfj67m2_large.jpg"
              }
              width={400}
              height={400}
              alt=""
            />
          </CarouselItem>
          {/* <CarouselItem className="">
            <Image
              className="mx-auto my-auto"
              src={"/assets/Faizan Majoon Jar UR.png"}
              width={400}
              height={400}
              alt=""
            />
          </CarouselItem> */}
        </CarouselContent>
        <div className="flex justify-between   top-[50%] right-0 left-0">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => api?.scrollTo(current - 1)}
          >
            <ArrowLeftIcon />
          </Button>
          <div>
            <Badge variant={"outline"} className="text-sm font-light">
              Only <span className="font-bold px-1">3</span> kits left in stock
              for this month!
            </Badge>
          </div>
          <Button
            onClick={() => api?.scrollTo(current + 1)}
            variant={"outline"}
            size={"icon"}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </Carousel>
      <div className=" absolute top-0 right-0 flex bg-brand-secondary px-1 py-1 -rotate-3 text-xs">
        <p className="relative">
          Best seller
          <WiStars className="text-white absolute size-6 -top-2 -right-3 animate-pulse" />
        </p>
      </div>
    </section>
  );
};

export default ProductImageCarousel;
