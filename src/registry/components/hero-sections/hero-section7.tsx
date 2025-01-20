import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection7 = () => {
  return (
    <div className="relative mx-auto mt-8 flex w-full flex-col items-center justify-center text-2xl font-medium tracking-tight">
      <div className="mt-16 w-full lg:max-w-[954px]">
        <div className="flex w-full flex-col items-center justify-center p-8 pt-4 xs:p-12 xs:pt-12">
          <h1 className="text-center text-5xl font-semibold leading-[1] -tracking-[1px] sm:text-6xl lg:-tracking-[1.8px]">
            What will you{" "}
            <span className="font-serif font-normal italic tracking-normal text-red-600">
              build
            </span>{" "}
            today?
          </h1>

          <span className="text-wrap max mb-8 mt-2 text-center text-xl font-medium tracking-tight text-muted-foreground sm:text-2xl">
            Design, deploy, get feedback, and become a better coder.
          </span>

          <div className="flex w-full flex-col items-center justify-center sm:w-2/3">
            <Link className="relative z-10 w-full" href="/auth/signin">
              <Button className="flex w-full flex-row items-center justify-center gap-2 rounded-2xl dark:bg-white  bg-black px-8 py-2.5 text-base  transition sm:px-16 sm:py-6 sm:text-lg">
                Start deploying - its free
                <span className="size-5 flex items-center justify-center dark:bg-black bg-white dark:text-white text-black rounded-full">
                  <ArrowRightIcon size={17} className="" />
                </span>
              </Button>
            </Link>

            <div className="mt-2 relative z-0 flex w-full max-w-[90%] flex-col items-start justify-start gap-2 overflow-hidden rounded-b-2xl bg-gray-100 p-6 pt-4 shadow-lg ring-1 ring-black/5">
              <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-16 w-full bg-gradient-to-b from-transparent to-gray-100" />
              <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-transparent to-gray-100" />
              <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-transparent to-gray-100" />

              <p className="mb-1 w-full text-center text-sm tracking-tight2 text-gray-500">
                Trusted by 75,000+ coders
              </p>

              <div className="flex w-full flex-row items-center justify-center gap-2">
                {writers.slice(0, 2).map((writer) => (
                  <button
                    key={writer.name}
                    className="flex w-full flex-row items-center justify-start gap-2 overflow-hidden rounded-lg bg-white p-2 ring-1 ring-black/5"
                  >
                    <Image
                      src={writer.image}
                      alt={writer.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex w-full flex-col items-start justify-start">
                      <p className="line-clamp-1 text-left text-sm font-medium tracking-tight2 text-black">
                        {writer.name}
                      </p>
                      <div className="flex flex-row items-center justify-end gap-1 text-xs font-medium tracking-tight2 text-gray-500">
                        {writer.platform === "linkedin" ? (
                          <svg className="h-3 w-3" viewBox="0 0 448 512">
                            <path
                              fill="currentColor"
                              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            />
                          </svg>
                        ) : (
                          <svg className="h-3 w-3" viewBox="0 0 512 512">
                            <path
                              fill="currentColor"
                              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                            />
                          </svg>
                        )}
                        <p>{writer.followers}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex w-[150%] -translate-x-12 flex-row items-start justify-start gap-2">
                {writers.slice(2).map((writer) => (
                  <button
                    key={writer.name}
                    className="flex w-full flex-row items-center justify-start gap-2 overflow-hidden rounded-lg bg-white p-2 ring-1 ring-black/5"
                  >
                    <Image
                      src={writer.image}
                      alt={writer.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex w-full flex-col items-start justify-start">
                      <p className="line-clamp-1 text-left text-sm font-medium tracking-tight2 text-black">
                        {writer.name}
                      </p>
                      <div className="flex flex-row items-center justify-end gap-1 text-xs font-medium tracking-tight2 text-gray-500">
                        <svg className="h-3 w-3" viewBox="0 0 512 512">
                          <path
                            fill="currentColor"
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                          />
                        </svg>
                        <p>{writer.followers}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const writers = [
  {
    name: "Justin Welsh",
    followers: "545k",
    platform: "linkedin",
    image:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid",
  },
  {
    name: "Dickie Bush",
    followers: "489k",
    platform: "twitter",
    image:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid",
  },
  {
    name: "Nat Eliason",
    followers: "217k",
    platform: "twitter",
    image:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid",
  },
  {
    name: "Nicolas Cole",
    followers: "197k",
    platform: "twitter",
    image:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid",
  },
  {
    name: "Nik Sharma",
    followers: "316k",
    platform: "twitter",
    image:
      "https://img.freepik.com/premium-vector/people-saving-money_24908-51568.jpg?semt=ais_hybrid",
  },
];

export default HeroSection7;
