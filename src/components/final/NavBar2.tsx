import Image from "next/image";
import React from "react";
import { GrMenu } from "react-icons/gr";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full fixed bg-brand-bg left-0 right-0 top-0 px-3 py-3 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <section className="">
        <Image
          width={80}
          height={80}
          className=""
          src="/assets/logo_hamdun.png"
          alt=""
        />
      </section>
      <nav className="hidden md:flex">
        {/* <a href="">Home</a>
        <a href="">About us</a>
        <a href="">
          <button className="">Order Now</button>
        </a> */}
      </nav>
      <nav className="flex items-center gap-1">
        <Button variant={"brand"}>Get your Majoon</Button>
        <Sheet>
          <SheetTrigger>
            <GrMenu size={20} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default NavBar;
