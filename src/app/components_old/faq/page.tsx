import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroSection from "@/components/final/HeroSections/HeroSection";
import CodeHighlight from "@/components/CodeHighlight";
import Features from "@/components/final/Features/Features2";
import Faq from "@/components/final/Faq";

const HeroSectionCode = `import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-background min-h-screen py-10 px-5 flex flex-col items-center">
      {/* <h2>Develop projects without the manual management</h2>
      <h3>hioajsdf</h3> */}
        <h1>FAQs</h1>
      <div className=" py-10 pb-20 sm:w-[500px] text-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is IndieTook?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it for big projects?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Why should I use, while I can manually manage?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How is it going to benefit me?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to get started?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it for big projects?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
`;
const page = () => {
  return (
    <div className="">
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent className="scale-75 border" value="preview">
          <Faq />
        </TabsContent>
        <TabsContent
          value="code"
          className="w-96 md:w-[800px] ml-10 rounded-sm"
        >
          <CodeHighlight code={HeroSectionCode} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
