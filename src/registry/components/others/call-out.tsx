import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Send, TrendingUp, Zap } from "lucide-react";

const CallOutSection = () => {
  return (
    <div className=" justify-center mx-auto flex flex-col items-center py-10  ">
      <Card className="md:flex bg-muted items-center bg-gradient-to-r from-card to-muted relative">
        <CardContent className="flex flex-col p-10 items-start">
          {/* <div className="-z-10 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div> */}
          <h2 className="text-3xl font-semibold ">
            Build beautiful websites faster
          </h2>
          <CardDescription>
            SuperDev Pro has been extensively used while building this website,
            so if you love this website, you will love SuperDev Pro too. Join
            web developers and designers from 34+ countries who have already
            said goodbye to tedious debugging with Inspect Element.
          </CardDescription>
          {/* </CardHeader> */}
          <Button className="mt-5">Get it for free</Button>
        </CardContent>
        <CardFooter>
          {/* <Image
            src={"/glassmorphic.png"}
            height={600}
            width={600}
            alt="abs img"
            className="hidden md:block"
          /> */}
          <div className="bg-primary/10 p-5 rounded-full hidden xl:block">
            <Zap className="text-primary size-28" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CallOutSection;
