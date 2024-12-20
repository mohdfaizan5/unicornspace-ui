import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "All Components",
    template: "%s Components | UnicornSpaceUI",
  },
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
  twitter: {
    card: "summary_large_image",
  },
};

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
