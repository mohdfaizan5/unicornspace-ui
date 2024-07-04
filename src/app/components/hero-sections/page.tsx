import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/final/HeroSection";
import { CodeHighlight } from "@/components/CodeHighlight";

const page = () => {
  return (
    <div className="">
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="scale-75" value="preview">
          <HeroSection />
        </TabsContent>
        <TabsContent value="code">
          <CodeHighlight code={`cont hi = 01`}></CodeHighlight>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
