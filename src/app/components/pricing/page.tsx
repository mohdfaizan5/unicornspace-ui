import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingSection from "@/components/PricingSection";

const page = () => {
  return (
    <div className="">
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="scale-75" value="preview">
          <PricingSection />
        </TabsContent>
        <TabsContent value="code">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
