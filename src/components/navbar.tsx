"use client";
// TODO: Needs a refactor of code and the its structured and implemented
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
import CommandMenu from "./client/command-menu";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown, FaGithub } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
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
import Logo from "./logo";
import { Navigation } from "./navigation";
import { navigation } from "@/config/navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  // console.log(path.includes("/components"))
  return (
    <header className="sticky right-0  top-0 z-50 w-full border-b border-border/40 bg-background/15 backdrop-blur supports-[backdrop-filter]:bg-background/8opacity-75  transition-all duration-300 px-6">
      <div className="flex h-14 max-w-screen-2xl items-center justify-between ">
        <Logo full textClassName="text-lg" />
        <nav className="mix-blend-difference hidden md:flex text-[14px] items-center gap-5">
          <Link
            className={cn(
              "hover:opacity-100 opacity-75 hover:font-semibold transition-all duration-100",
              path.includes("/components") &&
                "font-bold opacity-90  underline decoration-dotted underline-offset-2"
            )}
            href={"/components"}
          >
            Components
          </Link>
          <Link
            className={cn(
              "hover:opacity-100 opacity-75 hover:font-semibold transition-all duration-100",
              path.includes("/tools") &&
                "font-bold opacity-90 underline  decoration-dotted underline-offset-2"
            )}
            href={"/tools"}
          >
            Tools
          </Link>

          <Link
            className={cn(
              "hover:opacity-100 opacity-75 hover:font-semibold transition-all duration-100",
              path.includes("/course") &&
                "font-bold opacity-90 underline decoration-dotted underline-offset-2"
            )}
            href={"/course"}
          >
            Courses
          </Link>
          <Link
            className={cn(
              "hover:opacity-100 opacity-75 hover:font-semibold transition-all duration-100",
              path.includes("/blogs") &&
                "font-bold opacity-90 underline decoration-[0px_0px_45px_10px_rgba(255,46,88,1)] decoration-dotted shadow- underline-offset-2"
            )}
            href={"/blogs"}
          >
            Blogs
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <CommandMenu className="hidden md:block" />
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
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

const MobileNavbar = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent className="overflow-auto" side="left">
          <SheetHeader>
            <Logo />
          </SheetHeader>

          <div className="flex flex-col space-y-6 mt-6">
            <Navigation
              navigation={navigation}
              className="flex flex-col space-y-4"
            />

            <div className="flex items-center gap-2">
              <Link href={siteConfig.links.github} target="_blank">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-sm flex items-center gap-1"
                >
                  Star
                  <FaGithub className="h-4 w-4" />
                </Button>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
