import React from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import SearchEventListener from "@/components/client/SearchEventListener";

const page = () => {
  return (
    <div className="min-h-screen">
      
      <Navbar/>
      <main className="flex min-h-screen flex-row-reverse justify-center items-center">
        <section className=" flex flex-col gap-3">
          <input type="color" />
          <div>
            <Label htmlFor="saturation">
              Saturation
              <Slider
                id="saturation"
                defaultValue={[33]}
                max={100}
                step={1}
                className="w-64 h-2"
              />
            </Label>
          </div>
          <div>
            <Label htmlFor="saturation">
              Lightness
              <Slider
                id="saturation"
                defaultValue={[33]}
                max={100}
                step={1}
                className="w-64 h-2"
              />
            </Label>
          </div>
          <div className="flex gap-1">
            <Button variant={"outline"} size={"sm"}>
              0
            </Button>
            <Button variant={"outline"} size={"sm"}>
              0.2
            </Button>
            <Button variant={"outline"} size={"sm"}>
              0.5
            </Button>
            <Button variant={"outline"} size={"sm"}>
              0.75
            </Button>
            <Button variant={"outline"} size={"sm"}>
              1
            </Button>
          </div>
          <div className="flex gap-1">
            <Button variant={"outline"} size={"sm"}>
              Light
            </Button>
            <Button variant={"outline"} size={"sm"}>
              Dark
            </Button>
          </div>
        </section>
        <section>
          <h1>A library build to show possiblities of fast development</h1>
          <h2 className="font-bold">You can copy paste code from here</h2>
          <ul>
            <li>For saas</li>
            <li>Bootstraping a project very fast</li>
            <li>Startups</li>
            <li>For Hackathons.</li>
          </ul>
        </section>
      </main>
      <section className="flex flex-col w-[500px] mx-auto ">
        <section>
          <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Create New Order</Button>
            </CardFooter>
          </Card>
        </section>
        <section className="flex">
          <Card className="w-[60%]">
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">$1,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card>

          <Card className="w-[40%]">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card>
        </section>
      </section>
    </div>
  );
};

export default page;
