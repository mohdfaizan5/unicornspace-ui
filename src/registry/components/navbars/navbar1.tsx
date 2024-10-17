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

const Navbar1 = () => {
  return (
    <header className="py-7 flex justify-between px-5 md:px-16 items-center  z-10">
      <div>
        <Link href={"#"} className="text-3xl font-semibold flex items-center">
          <Image
            src={"/logos/logo-black-256x256.png"}
            height={50}
            width={50}
            alt="abs img"
            className="hidden md:block"
          />{" "}
          UnicornSpace
        </Link>
      </div>
      <nav className="text-foreground/70 text-sm sm:flex gap-2 hidden">
        <Link href={"#"} className="hover:text-foreground hover:scale-105">
          Features
        </Link>
        <Link href={"#"} className="hover:text-foreground hover:scale-105">
          Pricing
        </Link>
        <Link href={"#"} className="hover:text-foreground hover:scale-105">
          Roadmap
        </Link>
      </nav>
      <div className="sm:flex  hidden gap-2">
        <Link href={"#"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={"#"}>
          <Button variant={"default"}>Get started now</Button>
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet key={"left"}>
          <SheetTrigger>
            <GiHamburgerMenu size={32} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>UnicornSpace</SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[85vh]">
                <nav className="text-foreground/70 flex flex-col space-y-2 mt-10">
                  <Link href={"#"}>Features</Link>
                  <Link href={"#"}>Pricing</Link>
                  <Link href={"#"}>Roadmap</Link>
                </nav>
                <div className="flex gap-5 justify-center">
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
