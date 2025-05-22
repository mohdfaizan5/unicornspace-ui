import { useId } from "react";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const styles = {
  xs: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2",
  sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
  md: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8",
  lg: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8",
};

type ContainerSize = "xs" | "sm" | "md" | "lg";

export function Container({
  size = "sm",
  className,
  ...props
}: {
  size?: ContainerSize;
  className?: string;
  children?: React.ReactNode;
}) {
  return <div className={clsx(styles[size], className)} {...props} />;
}
interface GridProps {
  x: string | number;
  patternTransform: string;
}

export function GridPattern(props: GridProps) {
  let patternId = useId();

  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={patternId}
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          {...props}
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export function StarRating({ rating = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from(Array(rating).keys()).map((index) => (
        <StarIcon key={index} className="h-5 w-5 fill-current " />
      ))}
    </div>
  );
}

const author = {
  name: "Akshyanshu",
  avatar: "/images/avatars/1.jpg",
  role: "Full Stack Developer.",
};
const children = {
  children: `"I’ve tried to create my own icons in the past but quickly got frustrated and gave up. Now I sell my own custom icon sets online."`,
};
function Testimonials4({ id }: any) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from Unkonown`}
      className="relative  py-16 sm:py-32"
    >
      <div className="text-slate-900/10 dark:text-slate-100/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex  sm:justify-center">
            <StarRating />
          </div>
          <blockquote className="mt-10 font-display text-3xl font-medium tracking-tight  sm:text-center">
            {children.children}
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="overflow-hidden rounded-full bg-slate-200">
              <Avatar>
                <AvatarImage
                  src="https://github.com/akshsekhr1102.png"
                  alt="@akshsekhr1102"
                />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight ">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {author.role}
              </div>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}

export default Testimonials4;
