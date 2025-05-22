import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

const Navbar3 = () => {
  return (
    <nav className="  w-full bg-white border-b border-gray-200 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="w-full items-center h-16 flex justify-between">
          <div className="flex-shrink-0">
            <Logo />
            {/* <Link href="#" className="text-xl font-bold ">
              UnicornSpaceUI
            </Link> */}
          </div>

          {/* Navigation Links */}
          <div className="hidden text-sm md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Templates
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Tools
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Learn
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden xl:flex items-center flex-1 max-w-80 mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="#">
              <Button variant={"outline"}>Sign in</Button>
            </Link>
            <Link href="#">
              <Button>Sign up - Free</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar3;
