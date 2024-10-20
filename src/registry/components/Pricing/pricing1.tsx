import React from "react";
import { Button } from "../../../components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "../../../components/ui/badge";
const PricingSection1 = () => {
  return (
    <section className="flex flex-col items-center overflow-y-hidden w-full">
      <h1 className="text-6xl font-bold">Pricing</h1>
      <p className="text-md mt-3 opacity-70 font-light ">
        $100 off for the first 3710 customers (7 left)
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-10 my-10">
        <Card
          className={`flex flex-col justify-between px-10 py-10 border min-h-[80dvh] w-96 `}
        >
          <div>
            <h4 className="font-semibold text-xl">Starter</h4>
            <h2 className="mt-2">
              <span className="line-through mr-2 opacity-80">$269</span>
              <span className="text-5xl font-bold mr-1">$169</span>
              <span className="text-sm font-light">USD</span>
            </h2>
          </div>
          <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
            <CustomList hightLightText={"hi"}>
              Individual configuration
            </CustomList>
            <CustomList>No setup, or hidden fees</CustomList>
            <CustomList>Free updates:</CustomList>
            <CustomList hightLightText={"1 developer"} check={false}>
              Team size:
            </CustomList>
            <CustomList hightLightText={"6 months"} check={false}>
              Premium support:
            </CustomList>
          </ul>
          <div>
            <Button className="w-[100%]">Get IndieHacker</Button>
            <p className="text-center mt-2 text-sm opacity-70">
              Pay once. Build unlimited projects!
            </p>
          </div>
        </Card>
        <Card
          className={`flex flex-col justify-between px-10 py-10 border min-h-[80dvh] w-96 border-ring relative`}
        >
          <Badge className="absolute -top-3 right-[40%] rounded shadow-2xl shadow-primary">
            Popular
          </Badge>

          <div>
            <h4 className="font-semibold text-xl">Starter</h4>
            <h2 className="mt-2">
              <span className="line-through mr-2 opacity-80">$269</span>
              <span className="text-5xl font-bold mr-1">$399</span>
              <span className="text-sm font-light">USD</span>
            </h2>
          </div>
          <ul className="space-y-2 text-left text-gray-500 dark:text-gray-400">
            <CustomList hightLightText={"hi"}>
              Individual configuration
            </CustomList>
            <CustomList>No setup, or hidden fees</CustomList>
            <CustomList>Free updates:</CustomList>
            <CustomList hightLightText={"1 developer"}>Team size:</CustomList>
            <CustomList hightLightText={"6 months"}>
              Premium support:
            </CustomList>
          </ul>
          <div>
            <Button className="w-[100%]">⚡ Get IndieHacker</Button>
            <p className="text-center mt-2 text-sm opacity-70">
              Pay once. Build unlimited projects!
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

const CustomList = ({
  children,
  hightLightText,
  check = true,
}: {
  children: React.ReactNode;
  hightLightText?: string;
  check?: boolean;
}) => {
  if (check) {
    return (
      <li className="flex items-center space-x-3 rtl:space-x-reverse">
        <svg
          className="flex-shrink-0 w-3.5 h-3.5 text-primary dark:text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>

        <span>
          {children}{" "}
          {hightLightText && (
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          )}
        </span>
      </li>
    );
  } else {
    return (
      <li className="flex items-center space-x-3 rtl:space-x-reverse -translate-x-[2px] opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <span className="-translate-x-1 ">
          {children}{" "}
          {hightLightText && (
            <span className="font-semibold text-gray-900 dark:text-white">
              6 months
            </span>
          )}
        </span>
      </li>
    );
  }
};

export default PricingSection1;
