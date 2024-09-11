import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    description:
      "Saves me 10+ hours every project with components and saves me around 20+ hours in its tools",
    name: "Mohd Faizan",
    subTitle: "3 days ago",
    image: "https://github.com/mohdfaizan5.png",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Fabrizio Spanu",
    subTitle: "1 day ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "AjishPG",
    subTitle: "9 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/2208f3a2-eb43-4625-b28b-94d917a2fadc._CR0,0,375,375_UX460_.jpg",
  },
  {
    description:
      "The extension is a life saver and would improve dramatically production times for developers and coders. I use it daily and purchased the PRO for this reason.",
    name: "Abdul majeed",
    subTitle: "13 days ago",
    image:
      "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png",
  },
];

const Testimonials = () => {
  return (
    <section className=" px-10">
      <h3 className="text-brand-text2 font-semibold text-3xl text-center mb-8">
        See what people are{" "}
        <span className="text-brand-primary font-black ">saying! </span>
      </h3>
      <div className="flex md:flex-row flex-col mx-auto w-full">
        <Card className="bg-brand-bg/30 p-6 max-w-96 col-start-2 col-end-6 ">
          <div className="flex items-center pb-2 gap-2">
            <Avatar>
              <AvatarImage src={"https://github.com/mohdfaizan5.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h5 className=" font-semibold">Mohd Faizan</h5>
              <p className="text-xs opacity-75">UnicornSpaceUI, DevGrads</p>
            </div>
          </div>
          <CardContent className="p-0 mt-4">
            <p className="text-sm">
              &ldquo;Saves me 10+ hours every project with components and saves
              me around 20+ hours in its tools&ldquo;
            </p>
          </CardContent>
        </Card>
        <Card className="bg-brand-bg/30 p-6 max-w-96  col-start-7 col-end-10 ">
          <div className="flex items-center pb-2 gap-2">
            <Avatar>
              <AvatarImage
                src={
                  "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/f9f1e5c2-d849-410d-9b6e-459e8e264ccf._CR0,0,500,500_SX48_.jpg"
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h5 className=" font-semibold">Fabrizio Spanu</h5>
              <p className="text-xs opacity-75">1 day ago</p>
            </div>
          </div>
          <CardContent className="p-0 mt-4">
            <p className="text-sm">
              &ldquo;Saves me 10+ hours every project with components and saves
              me around 20+ hours in its tools&ldquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const Testimonial = ({ data }: any) => {
  const { description, image, name, subTitle } = data;
  return (
    <Card className="bg-brand-bg/30 p-6 max-w-96">
      <div className="flex items-center pb-2 gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h5 className=" font-semibold">{name}</h5>
          <p className="text-xs opacity-75">{subTitle}</p>
        </div>
      </div>
      <CardContent className="p-0 mt-4">
        <p className="text-sm">&ldquo;{description}&ldquo;</p>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
