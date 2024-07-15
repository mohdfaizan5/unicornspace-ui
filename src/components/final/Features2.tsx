import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const featuresData: { title: React.ReactNode; icon: any }[] = [
  {
    title: "Science-driven nutrition supplement",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: "75 ingredients your body can easily absorb",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: "Third-party certified for safety",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: "Optimized for flavor without artificial sweeteners",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: "Trusted by leading doctors and scientists",
    icon: <VscWorkspaceTrusted />,
  },
  {
    title: `Continuously improved since 2010`,
    icon: <VscWorkspaceTrusted />,
  },
];

const Features = () => {
  return (
    <div className="flex flex-col gap-3 pb-5 md:mx-auto md:grid md:grid-cols-4">
      {featuresData.map((feature, i) => (
        <div
          className={`flex md:col-span-2 gap-5 items-center ${
            (i + 1) % 2 == 0 ? "col-start-2" : "col-start-4"
          }`}
          key={i}
        >
          <span
            className={`text-2xl bg-brand-primary text-white rounded-full p-2 font-light  top-0 
            `}
          >
            {feature.icon}
          </span>
          <p className=" text-balance max-w-72 my-0 ">{feature.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
