import React from "react";
// TODO: Add proper questions and answers
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq2 = () => {
  return (
    <section className="bg-background  py-10 px-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="py-10 pb-20 sm:w-[500px] text-xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is IndieTook?</AccordionTrigger>
            <AccordionContent>
              IndieTook is a platform designed to help indie developers manage their projects efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it suitable for big projects?</AccordionTrigger>
            <AccordionContent>
              Yes, IndieTook is scalable and can handle projects of any size.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Why should I use it instead of managing manually?
            </AccordionTrigger>
            <AccordionContent>
              Using IndieTook automates many tasks, saving you time and reducing errors compared to manual management.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How will it benefit me?</AccordionTrigger>
            <AccordionContent>
              IndieTook streamlines your workflow, making it easier to track progress and collaborate with others.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              Simply sign up on our website, and you can start using IndieTook immediately.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq2;
