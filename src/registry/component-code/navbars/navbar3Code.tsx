export const Navbar3Code = 'import Logo from "@/components/logo";\r\nimport { Button } from "@/components/ui/button";\r\nimport { Input } from "@/components/ui/input";\r\nimport { Search } from "lucide-react";\r\nimport Link from "next/link";\r\n\r\nconst Navbar3 = () => {\r\n  return (\r\n    <nav className="  w-full bg-white border-b border-gray-200 z-10">\r\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">\r\n        <div className="w-full items-center h-16 flex justify-between">\r\n          <div className="flex-shrink-0">\r\n            <Logo />\r\n            {/* <Link href="#" className="text-xl font-bold ">\r\n              UnicornSpaceUI\r\n            </Link> */}\r\n          </div>\r\n\r\n          {/* Navigation Links */}\r\n          <div className="hidden text-sm md:flex items-center space-x-4">\r\n            <Link\r\n              href="/templates"\r\n              className="text-muted-foreground hover:text-foreground transition-colors duration-200"\r\n            >\r\n              Templates\r\n            </Link>\r\n            <Link\r\n              href="/tools"\r\n              className="text-muted-foreground hover:text-foreground transition-colors duration-200"\r\n            >\r\n              Tools\r\n            </Link>\r\n            <Link\r\n              href="/learn"\r\n              className="text-muted-foreground hover:text-foreground transition-colors duration-200"\r\n            >\r\n              Learn\r\n            </Link>\r\n          </div>\r\n\r\n          {/* Search Bar */}\r\n          <div className="hidden xl:flex items-center flex-1 max-w-80 mx-8">\r\n            <div className="relative w-full">\r\n              <Input\r\n                type="text"\r\n                placeholder="Search..."\r\n                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"\r\n              />\r\n              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />\r\n            </div>\r\n          </div>\r\n\r\n          {/* Auth Buttons */}\r\n          <div className="flex items-center space-x-4">\r\n            <Link href="#">\r\n              <Button variant={"outline"}>Sign in</Button>\r\n            </Link>\r\n            <Link href="/signup">\r\n              <Button>Sign up - Free</Button>\r\n            </Link>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </nav>\r\n  );\r\n};\r\n\r\nexport default Navbar3;\r\n';
