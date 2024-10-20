import Image from "next/image";

export default function Footer3() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between md:flex-row">
       <div className="flex items-center ">
       <Image src={'/logos/logo-black-256x256.png'} width={150} height={150} alt="logo" className="h-12 w-auto text-slate-900" />
       <p className="font-bold text-xl ">UnicornSpace Ui</p>
       </div>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} DeceptiConf, LLC. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}
