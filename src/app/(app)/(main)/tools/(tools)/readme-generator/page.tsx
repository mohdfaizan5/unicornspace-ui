// TODO: This page needs to be made server side rendered and the code needs to be cleaned up

import ReadmeForm from "@/components/tools/readme-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Readme Generator - UnicornSpaceUI",
  description: "A free README generator to create beautiful projects readme.",
};

export default function Page() {
  return (
    <main className="">
      <ReadmeForm />
    </main>
  );
}
