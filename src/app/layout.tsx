import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins, Passion_One } from "next/font/google";
import Navbar from "@/components/navbar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import "@/styles/globals.css";
import "@/styles/general.css";
import BasicFooter from "@/registry/components/footer/basic-footer";

const inter = Poppins({
  weight: ["400", "200"],
  subsets: ["latin"],
  variable: "--popins",
});
const passion = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin-ext"],
  variable: "--passion",
});

export const metadata: Metadata = {
  title: "UnicornSpaceUI",
  description: "A React opensource UI library made for Startups and SAAS companies to boost their development process",
};
/*
1. A opensource UI copy-paste library for Nextjs EcoSystem

opensource, UI,  library, Nextjs, Startups, SAAS, Design.
1. A React opensource UI library made for Startups and SAAS companies to boost their development process.
2. A React opensource UI library made for Startups and SAAS.


*/ 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
      <body
        className={`${inter.className} antialiased bg-background`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme={"dark"}>
          <div className="relative flex min-h-screen flex-col antialiased mx-auto  max-w-[1560] bg-background">
            <Navbar />
            {children}
            <BasicFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
function localFont(arg0: {
  src: { path: string; weight: string }[];
  variable: string;
}) {
  throw new Error("Function not implemented.");
}
