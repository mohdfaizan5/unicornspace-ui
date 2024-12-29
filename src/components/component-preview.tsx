"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/code-highlight";
import componentRegistry from "@/registry";
import ComponentWrapper from "./component-wrapper";
import { ImSpinner } from "react-icons/im";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

const ComponentPreview = ({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) => {
  // console.log(name)
  // console.log(componentRegistry[name])
  const ComponentToRender = componentRegistry[name];

  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }

  // console.log(ComponentToRender.code);

  return (
    <div className="relative my-4 z-10 flex flex-col space-y-2 overflow-auto">
      <Tabs defaultValue="tab-1">
        <TabsList className="h-auto gap-2 rounded-none border-b border-border bg-transparent px-0 py-1 text-foreground">
          <TabsTrigger
            value="tab-1"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent"
          >
            Code
          </TabsTrigger>
          <Link href={`/blocks/${name}`} className="ml-2">
            <Button variant={"ghost"} className="group flex items-center gap-2">
              See full component <MoveRight size={18} className="group-hover:translate-x-2 transition-all duration-150"/>
            </Button>
          </Link>
        </TabsList>
        <TabsContent value="tab-1">
          <ComponentWrapper>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <ImSpinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className=" bg-background/30">
                <ComponentToRender.component {...props} />
              </div>
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
        <TabsContent value="tab-2">
          <CodeHighlight
            className="w-full max-h-96 overflow-y-auto"
            code={ComponentToRender.code}
          />
        </TabsContent>
      </Tabs>

      {/* <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger
            value="code"
            className="hover:bg-accent hover:text-accent-foreground"
          >
            Code
          </TabsTrigger>
          <Link href={`/blocks/${name}`} className="ml-2">
            <Button variant={"ghost"}>See full component</Button>
          </Link>
        </TabsList>
        <TabsContent value="preview" className="relative rounded-md ">
          <ComponentWrapper>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <ImSpinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className="scale-[60%] bg-background/30">
                <ComponentToRender.component {...props} />
              </div>
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>

        <TabsContent value="code" className=" rounded-sm ">
          <CodeHighlight
            className="w-full max-h-96 overflow-y-auto"
            code={ComponentToRender.code}
          />
        </TabsContent>
      </Tabs> */}
    </div>
  );
};

export default ComponentPreview;
