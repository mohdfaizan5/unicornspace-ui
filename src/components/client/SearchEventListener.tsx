"use client";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SearchEventListener = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const searchListener = document.addEventListener("keydown", (e) => {
      console.log(e);
      if (e.key === "/") {
        setIsSearchOpen(true)
      }
      if (e.key === "Escape") {
        console.log("closing search");
        setIsSearchOpen(false)
      }
    });

    return () => {
      document.removeEventListener("keydown", () => {
        console.log("closing search");
      });
    };
  }, []);
  return (
    <AlertDialog open={isSearchOpen}>
      <AlertDialogTrigger>
        <Input placeholder="Search ...                  Hit /" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SearchEventListener;
