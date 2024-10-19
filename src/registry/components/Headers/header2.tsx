import Link, { LinkProps } from "next/link";
import clsx from "clsx";
import { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

// Utility type to allow custom `as` prop
type AsProp<C extends ElementType> = {
  as?: C;
};

// Generic props for any polymorphic component with custom props like hoverEffect
type PolymorphicComponentProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof Props | "as">;

// Chevron Icon Component
function ChevronRightIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Main Card Component
interface CardProps<C extends ElementType = "div"> {
  hoverEffect?: boolean;
  className?: string;
  children: ReactNode;
}

export function Card<C extends ElementType = "div">({
  as,
  className,
  hoverEffect = true,
  children,
  ...props
}: PolymorphicComponentProps<C, CardProps<C>>) {
  const Component = as || "div";
  return (
    <Component
      className={clsx(
        "relative flex flex-col items-start",
        hoverEffect && "group",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

// Card Link Component
type CardLinkProps = LinkProps & { children: ReactNode; className?: string };

Card.Link = function CardLink({
  href,
  children,
  className,
  ...props
}: CardLinkProps) {
  return (
    <>
      <div
        className={clsx(
          "absolute -inset-y-6 -inset-x-4 scale-95 opacity-0 transition",
          "group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl z-0",
          className
        )}
      />
      <Link href={href} {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 sm:-inset-x-6 sm:rounded-2xl z-20" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

// Card Title Component
type CardTitleProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    href?: string;
    children: ReactNode;
  }
>;

Card.Title = function CardTitle<C extends ElementType = "h2">({
  as,
  href,
  children,
  className,
  ...props
}: CardTitleProps<C>) {
  const Component = as || "h2";
  return (
    <Component
      className={clsx(
        "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
        className
      )}
      {...props}
    >
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

// Card Description Component
type CardDescriptionProps = { children: ReactNode; className?: string };

Card.Description = function CardDescription({
  children,
  className,
}: CardDescriptionProps) {
  return (
    <p
      className={clsx(
        "mt-2 text-sm text-zinc-600 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};

// Card CTA Component
type CardCtaProps = { children: ReactNode; className?: string };

Card.Cta = function CardCta({ children, className }: CardCtaProps) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        "mt-4 flex items-center text-sm font-medium text-teal-500",
        className
      )}
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

// Card Eyebrow Component
type CardEyebrowProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    decorate?: boolean;
    children: ReactNode;
  }
>;

Card.Eyebrow = function CardEyebrow<C extends ElementType = "p">({
  as,
  decorate = false,
  children,
  className,
  ...props
}: CardEyebrowProps<C>) {
  const Component = as || "p";
  return (
    <Component
      className={clsx(
        "order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5",
        className
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
