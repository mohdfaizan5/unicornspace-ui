import { ChevronsUp, Citrus, Microscope, ShieldCheck } from "lucide-react";
import React from "react";

const featuresData: { title: React.ReactNode; icon: React.ReactNode }[] = [
  {
    title: "Science-driven nutrition supplement",
    icon: <Microscope />,
  },
  {
    title: "75 ingredients your body can easily absorb",
    icon: <ShieldCheck />,
  },
  {
    title: "Third-party certified for safety",
    icon: <ShieldCheck />,
  },
  {
    title: "Optimized for flavor without artificial sweeteners",
    icon: <Citrus />,
  },
  {
    title: "Trusted by leading doctors and scientists",
    icon: <ShieldCheck />,
  },
  {
    title: `Continuously improved since 2010`,
    icon: <ChevronsUp />,
  },
];

const Features2 = () => {
  return (
    <div className=" pb-5 grid grid-cols-4">
      {featuresData.map((feature, i) => (
        <div
          className={`flex md:col-span-2 gap-5 items-center ${
            (i + 1) % 2 == 0 ? "col-start-2" : "col-start-4"
          }`}
          key={i}
        >
          <span
            className={`text-2xl bg-primary text-white rounded-full p-2 font-light top-0 
            `}
          >
            {feature.icon}
          </span>
          <p className=" text-balance max-w-72 my-0">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Features2;
