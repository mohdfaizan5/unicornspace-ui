import Image from "next/image";
import Link from "next/link";

const Logo = () => {

  return (
    <>
      <Link href={"/"} className="flex items-center font-bold">
        <Image
          src={"/logos/logo-black-256x256.png"}
          width={30}
          height={30}
          alt="Unicorn Space UI logo"
          className="dark:hidden block"
        />
        <Image
          src={"/logos/logo-white-256x256.png"}
          width={30}
          height={30}
          alt="Unicorn Space UI logo"
          className="hidden dark:block"
        />
        UnicornSpaceUI
      </Link>

    </>
  );
};

export default Logo;
