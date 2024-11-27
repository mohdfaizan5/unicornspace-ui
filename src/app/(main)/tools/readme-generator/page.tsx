"use client";

// TODO: This page needs to be made server side rendered and the code needs to be cleaned up

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import CodeHighlight from "@/components/code-highlight";
import { useState } from "react";
import { generateReadme } from "./return";
import { FormField } from "./custom-form";

export default function Page() {
  const { register, handleSubmit, reset } = useForm();
  const [readmeContent, setReadmeContent] = useState("");

  const onSubmit = (data: any) => {
    const content = generateReadme(data);
    setReadmeContent(content);
  };

  return (
    <main className="p-4">
      <Card className="w-full max-w-[720px] mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-lg sm:text-2xl">
            README Generator
          </CardTitle>
          <CardDescription className="text-center text-sm">
            Fill in the details to generate a README file for your project.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            {/* Required Fields */}
            <FormField
              label="Project Title"
              registerProps={register("title", { required: true })}
              placeholder="Enter your project title"
            />
            <FormField
              label="Project Description"
              registerProps={register("description", { required: true })}
              type="textarea"
              placeholder="Briefly describe your project."
            />
            <FormField
              label="Features"
              registerProps={register("features")}
              type="textarea"
              placeholder="List the features (one per line)."
            />

            {/* Optional Fields */}
            <FormField
              label="Main Application Routes"
              registerProps={register("routes")}
              placeholder="E.g., Homepage, Dashboard, Components"
              optional
            />
            <FormField
              label="Route Descriptions"
              registerProps={register("roadmap")}
              type="textarea"
              placeholder="Describe each route briefly."
              optional
            />
            <FormField
              label="Live Demo URL"
              registerProps={register("demoLink")}
              type="url"
              placeholder="Provide the live demo link."
              optional
            />
            <FormField
              label="Project Image URL"
              registerProps={register("image")}
              type="url"
              placeholder="Provide an image link (if available)."
              optional
            />
            <FormField
              label="Technologies Used"
              registerProps={register("techstack")}
              placeholder="E.g., React, Tailwind CSS, Prisma"
              optional
            />
            <FormField
              label="Contributors (Name:Link format, comma separated)"
              registerProps={register("contributors")}
              type="textarea"
              placeholder="E.g., John Doe:https://github.com/johndoe, Jane Smith:https://github.com/janesmith"
              optional
            />
            <FormField
              label="Contact Gmail"
              registerProps={register("gmail")}
              type="email"
              placeholder="Provide a contact email."
              optional
            />
            <FormField
              label="License"
              registerProps={register("license")}
              placeholder="E.g., MIT"
              optional
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="w-full sm:w-auto">
                Generate README
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => reset()}
                className="w-full sm:w-auto"
              >
                Reset Form
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="mt-4 flex flex-col">
          <CodeHighlight
            className="w-full min-h-[12rem] rounded-md overflow-auto"
            code={readmeContent}
          />
          <div>
            <h2 className="text-lg font-semibold">Preview:</h2>
            <div className="markdown-preview">
              <ReactMarkdown>{readmeContent}</ReactMarkdown>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
