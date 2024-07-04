import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "./ui/button";
import SearchEventListener from "./client/SearchEventListener";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky right-0  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex h-14 max-w-screen-2xl items-center justify-between ">
        <Link href={"/"} className="flex items-center font-bold">
          <Image
            src={"/logos/logo-black-256x256.png"}
            width={30}
            height={30}
            alt="logo"
          />{" "}
          UnicornSpaceUI
        </Link>
        <nav className="">
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger className="text-xs">Components </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  HeroSections <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Forms</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Testimonials</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Pricing</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Footers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="text-xs">Tools</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Components <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Colors generator</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Practical Fonts</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Contrast checker</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Other tools</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </nav>
        <div className="flex items-center gap-2">
          <SearchEventListener />
          <Button>Login</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
