"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { formFields } from "./objects";

const Page = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: formFields.reduce(
      (acc, field) => ({ ...acc, [field.name]: "" }),
      {}
    ),
  });

  // State for dialog visibility and content
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<string | null>(null);

  // Handle form submission
  const onSubmit = (data: Record<string, string>) => {
    console.log("Form Data Submitted:", data);
  };

  // Handle preview
  const handlePreview = () => {
    // Format the form values for display
    const formattedValues = Object.entries(watch())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    setDialogContent(formattedValues);
    setIsDialogOpen(true);
  };

  return (
    <ScrollArea className="">
      <main className="grid grid-rows-1 md:grid-cols-1 place-content-center gap-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Fill in the Credentials</CardTitle>
              <CardDescription>
                Choose the words that describe your project perfectly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                {formFields.map((field) => (
                  <div key={field.id} className="mb-4">
                    <Label className="text-xl" htmlFor={field.id}>
                      {field.label}
                    </Label>
                    <Textarea
                      id={field.id}
                      // @ts-ignore
                      {...register(field.name)}
                      className="w-full p-2 border rounded"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <Button type="submit" className="mt-4">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center h-full bg-red-400 gap-4 rounded-2xl p-5">
          <Image
            src={"/logos/logo-black-256x256.png"}
            alt="Logo"
            height={100}
            width={100}
            className="rounded-full"
          />
          <h1 className="md:text-4xl text-2xl font-bold">ReadMe - Generator</h1>
          <p className="max-w-[75%] text-center">Let's get you set up.</p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handlePreview}>Click here to preview</Button>
            </DialogTrigger>
            <DialogContent className="w-full">
              <pre className="flex">{dialogContent}</pre>{" "}
              {/* Display the preview content */}
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </ScrollArea>
  );
};

export default Page;
