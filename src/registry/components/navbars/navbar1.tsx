"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { useTheme } from "next-themes";

const Navbar1 = () => {
  const { theme } = useTheme();

  const logoSrc =
    theme === "dark"
      ? "/logos/logo-white-256x256.png" 
      : "/logos/logo-black-256x256.png"; 

  return (
    <header className="py-6 flex justify-between px-5 md:px-16 items-center z-10 bg-background">
      <div>
        <Link
          href={"#"}
          className="text-2xl md:text-3xl font-semibold flex items-center text-foreground"
        >
          <Image
            src={logoSrc}
            height={50}
            width={50}
            alt="UnicornSpace logo"
            className="hidden md:block"
          />{" "}
          UnicornSpace
        </Link>
      </div>
      <nav className="text-foreground/70 text-sm xl:flex gap-4 hidden">
        <Link
          href={"#"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Features
        </Link>
        <Link
          href={"#"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Pricing
        </Link>
        <Link
          href={"#"}
          className="hover:text-foreground hover:scale-105 transition-transform"
        >
          Roadmap
        </Link>
      </nav>
      <div className="lg:flex hidden gap-4">
        <Link href={"#"}>
          <Button variant={"default"}>Get started now</Button>
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet key={"left"}>
          <SheetTrigger>
            <GiHamburgerMenu size={32} className="text-foreground" />
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader>
              <SheetTitle className="text-foreground">UnicornSpace</SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[85vh]">
                <nav className="text-foreground/70 flex flex-col space-y-4 mt-10">
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Features
                  </Link>
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Pricing
                  </Link>
                  <Link
                    href={"#"}
                    className="hover:text-foreground hover:scale-105 transition-transform"
                  >
                    Roadmap
                  </Link>
                </nav>
                <div className="flex gap-4 justify-center">
                  <Button variant={"outline"}>Login</Button>
                  <Button>Get started</Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar1;
