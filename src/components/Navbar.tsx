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

const Navbar = () => {
  return (
    <header className="flex items-center justify-between mx-auto py-10 w-[90vw]">
      <div>UnicornSpaceUI</div>
      <nav className="">
        <Menubar className="w-32">
          <MenubarMenu>
            <MenubarTrigger>Components </MenubarTrigger>
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
            <MenubarTrigger>Tools</MenubarTrigger>
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
      <div>
        <SearchEventListener />
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Navbar;
