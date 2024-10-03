import React from "react";
import Logo from "../../components/logo";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FaXTwitter } from "react-icons/fa6";

const BasicFooter = () => {
  return (
    <footer className="py-10 flex px-5 md:px-10 justify-between items-center border-t border-white/20">
      <section className="space-y-1">
        <Logo />
        <p className="text-xs opacity-80 ml-5">© 2023 UnicornSpace, Inc.</p>
      </section>
      <section className="flex gap-3 items-center">
        <Link href={siteConfig.links.github}>
          <GitHubLogoIcon className="size-7" />
        </Link>
        <Link href={siteConfig.links.twitter}>
          <FaXTwitter className="size-7" />
        </Link>
      </section>
    </footer>
  );
};

export default BasicFooter;
