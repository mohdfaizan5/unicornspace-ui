"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeHighlight from "@/components/code-highlight";
import componentRegistry from "@/registry";
import ComponentWrapper from "./component-wrapper";
import { ImSpinner } from "react-icons/im";

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
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
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
              {/* <div className="scale-[60%] bg-background/30"> */}
                <ComponentToRender.component {...props} />
              {/* </div> */}
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>

        <TabsContent
          value="code"
          className=" rounded-sm "
        >
          {/* {ComponentToRender.code} */}
          <CodeHighlight
            className="w-full max-h-96 overflow-y-auto"
            code={ComponentToRender.code}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ComponentPreview;
