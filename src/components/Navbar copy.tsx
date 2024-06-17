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
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="py-7 flex justify-between px-16 items-center ">
      <div>
        <h3 className="text-4xl flex items-center">
          <Image
            src={"/logo-base-256x256.png"}
            height={60}
            width={60}
            alt="abs img"
            className="hidden md:block"
          />{" "}
          IndieToolkit
        </h3>
      </div>
      <nav className="text-white/70 text-sm sm:flex gap-2 hidden">
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Pricing</Link>
        <Link href={"#"}>Roadmap</Link>
        <Link href={"#"}>Changelog</Link>
      </nav>
      <div className="sm:flex  hidden gap-2">
        <Link href={"/login"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={"signup"}>
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
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[85vh]">
                n
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

export default Navbar;
