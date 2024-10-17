export const ProductImageCarouselCode = '"use client";\r\nimport {\r\n  Carousel,\r\n  CarouselContent,\r\n  CarouselItem,\r\n  CarouselNext,\r\n  CarouselPrevious,\r\n} from "@/components/ui/carousel";\r\nimport Image from "next/image";\r\nimport { Button } from "@/components/ui/button";\r\nimport { type CarouselApi } from "@/components/ui/carousel";\r\nimport { useEffect, useState } from "react";\r\nimport { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";\r\nimport { Badge } from "@/components/ui/badge";\r\nimport { WiStars } from "react-icons/wi";\r\n\r\nconst ProductImageCarousel = () => {\r\n  const [api, setApi] = useState<CarouselApi>();\r\n  const [current, setCurrent] = useState(0);\r\n\r\n  useEffect(() => {\r\n    if (!api) {\r\n      return;\r\n    }\r\n\r\n    setCurrent(api.selectedScrollSnap());\r\n\r\n    api.on("select", () => {\r\n      setCurrent(api.selectedScrollSnap());\r\n    });\r\n  }, [api]);\r\n  return (\r\n    <section className="md:max-w-[29rem] relative">\r\n      <Carousel setApi={setApi} opts={{ loop: false }}>\r\n        <CarouselContent className="relative">\r\n          <CarouselItem className="">\r\n            <Image\r\n              className="mx-auto"\r\n              src={"/assets/Faizan Majoon Jar.png"}\r\n              width={350}\r\n              height={400}\r\n              alt=""\r\n            />\r\n          </CarouselItem>\r\n          <CarouselItem className="">\r\n            <Image\r\n              className="mx-auto"\r\n              src={"/assets/features.png"}\r\n              width={400}\r\n              height={400}\r\n              alt=""\r\n            />\r\n          </CarouselItem>\r\n          <CarouselItem className="">\r\n            <Image\r\n              className="mx-auto my-auto"\r\n              src={"/assets/Faizan Majoon Jar UR.png"}\r\n              width={400}\r\n              height={400}\r\n              alt=""\r\n            />\r\n          </CarouselItem>\r\n        </CarouselContent>\r\n        <div className="flex justify-between   top-[50%] right-0 left-0">\r\n          <Button\r\n            variant={"outline"}\r\n            size={"icon"}\r\n            onClick={() => api?.scrollTo(current - 1)}\r\n          >\r\n            <ArrowLeftIcon />\r\n          </Button>\r\n          <div>\r\n            <Badge variant={"outline"} className="text-sm font-light">\r\n              Only <span className="font-bold px-1">3</span> kits left in stock\r\n              for this month!\r\n            </Badge>\r\n          </div>\r\n          <Button\r\n            onClick={() => api?.scrollTo(current + 1)}\r\n            variant={"outline"}\r\n            size={"icon"}\r\n          >\r\n            <ArrowRightIcon />\r\n          </Button>\r\n        </div>\r\n      </Carousel>\r\n      <div className=" absolute top-0 right-0 flex bg-brand-secondary px-1 py-1 -rotate-3 text-xs">\r\n        <p className="relative">\r\n          Best seller\r\n          <WiStars className="text-white absolute size-6 -top-2 -right-3 animate-pulse" />\r\n        </p>\r\n      </div>\r\n    </section>\r\n  );\r\n};\r\n\r\nexport default ProductImageCarousel;\r\n';
