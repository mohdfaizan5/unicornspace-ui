import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "All Components",
    template: "%s Components | UnicornSpaceUI",
  },
  description:
    "Explore all the components available in the UnicornSpaceUI library. A collection of React components for building modern web applications and SAAS startups.",
  twitter: {
    card: "summary_large_image",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
