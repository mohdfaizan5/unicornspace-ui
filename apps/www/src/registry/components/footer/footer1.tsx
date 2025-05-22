"use client"
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useTheme } from "next-themes"; // Import theme hook

const Footer1 = () => {
  const { theme } = useTheme(); // Access the current theme

  return (
    <footer className="bg-background rounded-lg shadow overflow-x-hidden border-t px-5 mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <h3 className="text-4xl flex items-center">
              <Image
                src={
                  theme === "dark"
                    ? "/logos/logo-white-256x256.png"
                    : "/logos/logo-black-256x256.png"
                }
                height={60}
                width={60}
                alt="IndieToolkit Logo"
                className="hidden md:block"
              />{" "}
              IndieToolkit
            </h3>
          </a>
          <ul className="flex  flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Separator className="my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            FileConvertor™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer1;
