
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  className: string;
}
function ArrowRightIcon(props: Props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NewsLettersForm2() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mx-4 overflow-hidden  py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          {/* <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          /> */}
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter  sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight   ">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight ">
                Sign up to our newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5  flex rounded-3xl  py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 ">
                <Input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  // className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5  text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                <Button>
                  {/* <span className="sr-only sm:not-sr-only">
                    </span> */}
                    Sign up today
                  {/* <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span> */}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
