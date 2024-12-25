"use client";
import { Button } from "@/components/ui/button";
import { Github, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? " shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg
                className="h-8 w-8 text-[#00e699]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-2 text-2xl font-bold text-[#00e699]">
                Unicorn
              </span>
            </Link>
          </div>
          
          {/* Desktop Navbar */}
          <nav className="hidden xl:flex space-x-4">
            <Link href="#" className="">
              Product
            </Link>
            <Link href="#" className="">
              Docs
            </Link>
            <Link href="#" className="">
              Pricing
            </Link>
            <Link href="#" className="">
              About
            </Link>
            <Link href="#" className="">
              Blog
            </Link>
          </nav>

          {/* Right-side Icons and Buttons */}
          <div className=" hidden sm:flex items-center space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <Button variant="ghost" className="">
              Login
            </Button>
            <Button className="bg-[#00e699] hover:bg-[#00cc88] text-[#0e1525]">
              Sign up
            </Button>
          </div>

          {/* Mobile Navbar Toggle */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden ">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              Product
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Docs
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              Blog
            </Link>
            <div className="flex flex-col items-center space-y-4  ">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Login
              </Button>
              <Button className="bg-[#00e699] hover:bg-[#00cc88] text-[#0e1525]">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
