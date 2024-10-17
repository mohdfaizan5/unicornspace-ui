import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "@/components/logo";

const Footer2 = () => {
  return (
    <footer className=" mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Crafting beautiful wood decor for your home and office.
            </p>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919341817975"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Available Fabrics</h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href={"https://sarom.info/catalogpdf/VELVETO.pdf"}
                  className="text-gray-400 hover:text-white transition"
                >
                  Suede Fabrics
                </Link>
              </li>
              <li>
                <Link
                  href="https://sarom.info/catalogpdf/BENTLEY.pdf"
                  className="text-gray-400 hover:text-white transition"
                >
                  Leatherette Fabric
                </Link>
              </li>
              <li>
                <Link
                  href="https://sarom.info/catalogpdf/SOOFFICE.pdf"
                  className="text-gray-400 hover:text-white transition"
                >
                  Suede Fabric (Non Shaded)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <Link
                  href="tel:+919341817975"
                  className="text-gray-400 hover:text-white transition"
                >
                  +91 9341817975
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <Link
                  href="mailto:md.azmath84@gmail.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  md.azmath84@gmail.com
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-10 w-10 mt-1" />
                <Link
                  href="https://maps.app.goo.gl/keBZbAcunBgA97wu9"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  No. 10/7, Begur Hulimavu Rd, Raghavendra Layout, Akshaya
                  Gardens, Hulimavu, Bengaluru, Karnataka 560068
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
          <Link
            href="https://www.unicornspace.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-400 hover:text-white transition mb-4"
          >
            Made by
            <Image
              width={20}
              height={20}
              quality={100}
              src="/unicorn-space-logo-white-256x256.webp"
              className="inline-block mx-2"
              alt="UnicornSpace logo"
            />
            <span className="font-semibold">UnicornSpace</span>
          </Link>
          <p className="text-sm text-gray-400">
            &copy; 2024 THE WOOD DECOR. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
