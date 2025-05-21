import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-background px-5 md:px-10 min-h-[70dvh] py-10 flex flex-col items-center">
      {/* <h2>Develop projects without the manual management</h2>
      <h3>hioajsdf</h3> */}
      <h2 className="text-3xl">FAQs</h2>
      <div className="py-10 pb-20 sm:w-[500px] text-lg sm:text-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger  className="text-left text-xl">What is UnicornSpaceUI?</AccordionTrigger>
            <AccordionContent>
              UnicornSpaceUI is a Next.js and Web Development tool designed to
              simplify your workflow by providing reusable components, guides,
              and resources to speed up your development process.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-xl">
              Is UnicornSpaceUI suitable for big projects?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! UnicornSpaceUI is designed for both small and
              large-scale projects, making it easier to manage complex UIs and
              workflows efficiently.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-xl">
              How will UnicornSpaceUI benefit me?
            </AccordionTrigger>
            <AccordionContent>
              By using UnicornSpaceUI, you save time on repetitive design tasks,
              focus on core functionalities, and build faster with pre-built
              components and templates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-xl">
              How do I get started with UnicornSpaceUI?
            </AccordionTrigger>
            <AccordionContent>
              Getting started is easy. Just follow our step-by-step guides,
              copy-paste components, and integrate them into your Next.js
              projects seamlessly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-xl">
              Can UnicornSpaceUI scale with my project?
            </AccordionTrigger>
            <AccordionContent>
              Yes, UnicornSpaceUI is built to grow with your needs, offering
              components and tools that scale as your projects become more
              complex.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
