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

const Navbar = () => {
  return (
    <div>
      <div></div>
      <nav>
        <Menubar className="w-32">
          <MenubarMenu>
            <MenubarTrigger>File </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
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
    </div>
  );
};

export default Navbar;
