import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Github } from "lucide-react";
import Logo from "@/components/logo";

const Footer2 = () => {
  return (
    <footer className=" mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo full className="flex justify-start" />
            <p className="text-sm text-gray-400">
              Create Web Startups 300% Faster With UnicornSpaceUI.
            </p>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/components"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Blogs
                </Link>
              </li>
              {/* <li>
                <Link
                  href="tel:+"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Contact Us
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={"/tools/fonts-in-use"}
                  className="text-gray-400 hover:scale-105 transition text-sm"
                >
                  Fonts in Use
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/color-palettes"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Color Palettes
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/color-convertor"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Color Convertor
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/resources"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Github className="mr-2 size-5" />
                <Link
                  href="https://github.com/mohdfaizan5/unicornspace-ui"
                  className="text-gray-400 hover:scale-105 transition"
                  target="_blank"
                >
                  Github Repo
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 size-5" />
                <Link
                  href="mailto:faizan@unicorn-space.com"
                  className="text-gray-400 hover:scale-105 transition"
                >
                  faizan@unicorn-space.com
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 size-5 mt-1" />
                <Link
                  href="#"
                  target="_blank"
                  className="text-gray-400 hover:scale-105 transition text-sm"
                >
                  Bengaluru, India
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
          <Link
            href="https://www.unicorn-space.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:scale-105 transition mb-4"
          >
            Made by
            <Logo link={false} className="ml-2 mr-1" />
            <span className="font-semibold">UnicornSpace</span>
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer2;
