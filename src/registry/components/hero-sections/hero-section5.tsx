import { Button } from "@/components/ui/button";
import { ChevronDown, Star } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection5() {
  return (
    <main className="bg-black text-white min-h-screen">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Link href="/" className="text-xl font-bold">
          UnicornSpace
        </Link>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/components">Components</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/resources">
              Resources <ChevronDown className="inline-block ml-1 h-4 w-4" />
            </Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
        >
          Explore Components
        </Button>
        <Button variant="outline" className="md:hidden">
          Menu
        </Button>
      </nav>

      <div className="container mx-auto mt-20 text-center">
        <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Avatar key={i}>
              <AvatarImage src="https://github.com/likithanagaraj.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ))}
          <div className="ml-3 flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </div>
          <span className="ml-2 text-sm">from 1384 reviews</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          BUILD <span className="text-green-500">STUNNING</span> UIs
          <br />
          WITH EASE
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
          Escape the frustrating guesswork and endless trial-and-error. Embrace
          our proven components and data-driven design system to fuel your
          application development, leaving uncertainty behind.
        </p>

        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-xl"
        >
          Get Started
        </Button>
      </div>
    </main>
  );
}
