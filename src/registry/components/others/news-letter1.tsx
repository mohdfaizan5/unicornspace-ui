import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLettersForm() {
  return (
    <section
      id="free-chapters"
      aria-label="Free preview"
      className="scroll-mt-14  sm:scroll-mt-32"
    >
      <div className="overflow-hidden lg:relative ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
          <div>
            <h2 className="font-display text-5xl font-extrabold tracking-tight  sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto">
              Get the free sample chapters
            </h2>
            <p className="mt-4 text-lg tracking-tight ">
              Enter your email address and I’ll send you a sample from the book
              containing two of my favorite chapters.
            </p>
          </div>
          <form className="lg:pl-16">
            <h3 className="text-base font-medium tracking-tight">
              Get two free chapters straight to your inbox{" "}
              <span aria-hidden="true">&rarr;</span>
            </h3>
            <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
              <div className="relative sm:static sm:flex-auto">
                <Input
                  type="email"
                  id="email-address"
                  required
                  aria-label="Email address"
                  placeholder="Email address"
                  // className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3"
                />
                {/* <div className="absolute inset-0 rounded-md border border-white/20 peer-focus:border-blue-300 peer-focus:bg-blue-500 peer-focus:ring-1 peer-focus:ring-blue-300 sm:rounded-xl" /> */}
              </div>
              <Button
                type="submit"
                className="mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none"
              >
                Get free chapters
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
