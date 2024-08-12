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
import { FaCaretDown, FaGithub } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";
import { siteConfig } from "@/config/site";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
          />
          UnicornSpaceUI
        </Link>
        <nav className="hidden md:flex text-[13px] items-center gap-6">
          <Menubar className="border-none flex items-center gap-6">
            <MenubarMenu>
              <div className="flex items-center gap-1">
                <Link className="hover:underline" href={"/components"}>
                  Components
                </Link>
                <MenubarTrigger className="p-0">
                  <FaCaretDown />
                </MenubarTrigger>
              </div>
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
              <div className="flex items-center gap-1">
                <Link className="hover:underline" href={"/tools"}>
                  Tools
                </Link>
                <MenubarTrigger className="p-1">
                  <FaCaretDown />
                </MenubarTrigger>
              </div>
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
          <Link className="hover:underline" href={"/guides"}>
            Guides
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* <SearchEventListener /> */}
          <Link href={siteConfig.links.github} target="_blank">
            <Button
              variant={"secondary"}
              size={"sm"}
              className="text-[13px] flex items-center gap-1"
            >
              Star
              <FaGithub />
            </Button>
          </Link>
          <ModeToggle />
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

const MobileNavbar = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>UnicornSpaceUi</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col justify-between h-full py-10 text-sm  gap-7">
            <Menubar className="border-none flex flex-col  gap-3">
              <MenubarMenu>
                <div className="flex items-center">
                  <Link className="hover:underline" href={"/components"}>
                    Components
                  </Link>
                  <MenubarTrigger className="p-0">
                    <FaCaretDown />
                  </MenubarTrigger>
                </div>
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
                <div className="flex items-center gap-1">
                  <Link className="hover:underline" href={"/tools"}>
                    Tools
                  </Link>
                  <MenubarTrigger className="p-1">
                    <FaCaretDown />
                  </MenubarTrigger>
                </div>
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
              <Link className="hover:underline" href={"/guides"}>
                Guides
              </Link>
            </Menubar>

            <div className="flex items-center gap-2 w-full justify-between">
              {/* <SearchEventListener /> */}
              <Link href={siteConfig.links.github} target="_blank">
                <Button
                  variant={"secondary"}
                  size={"sm"}
                  className="text-[13px] flex items-center gap-1"
                >
                  Star
                  <FaGithub />
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
