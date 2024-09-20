import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins, Passion_One } from "next/font/google";
import Navbar from "@/components/navbar";
import BasicFooter from "@/registry/components/basic-footer";

import "@/styles/globals.css";
import "@/styles/general.css";

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
  description: "A opensource UI copy-paste library for Nextjs EcoSystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme={"light"}>
          <div className="relative flex min-h-screen flex-col antialiased bg-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        <BasicFooter />
      </body>
    </html>
  );
}
function localFont(arg0: { src: { path: string; weight: string; }[]; variable: string; }) {
  throw new Error("Function not implemented.");
}

