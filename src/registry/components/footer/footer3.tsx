import Image from "next/image";
import { useTheme } from "next-themes";

export default function Footer3() {
  const { theme } = useTheme(); // Access the current theme

  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center">
          <Image
            src={
              theme === "dark"
                ? "/logos/logo-white-256x256.png"
                : "/logos/logo-black-256x256.png"
            }
            width={150}
            height={150}
            alt="logo"
            className="h-12 w-auto"
          />
          <p className="font-bold text-xl text-slate-900 dark:text-slate-100">
            UnicornSpace Ui
          </p>
        </div>
        <p className="mt-6 text-base text-slate-500 dark:text-slate-400 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} DeceptiConf, LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
