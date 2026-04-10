"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type {
  SectionSidebarBadgeVariant,
  SectionSidebarEntry,
  SectionSidebarLink,
} from "@/components/layouts/section-sidebar.types";

function normalizePath(path: string): string {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

function isLink(entry: SectionSidebarEntry): entry is SectionSidebarLink {
  return (entry.type === "link" || entry.type === undefined) && "href" in entry;
}

function isPathActive(pathname: string, link: SectionSidebarLink): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(link.href);

  if (link.exact || target === "/") return current === target;
  return current === target || current.startsWith(`${target}/`);
}

function SidebarLinkItem({
  link,
  pathname,
  markerOffsetClass,
}: {
  link: SectionSidebarLink;
  pathname: string;
  markerOffsetClass?: string;
}) {
  const active = isPathActive(pathname, link);
  const badgeVariant: Exclude<SectionSidebarBadgeVariant, "primary"> | undefined =
    link.badge?.variant === "primary" ? "default" : link.badge?.variant;

  return (
    <SidebarMenuItem key={link.href}>
      <Link
        href={link.href}
        className={cn(
          "relative flex h-9 items-center gap-2 rounded-md px-2 text-[15px] font-medium text-foreground/72 transition-colors duration-150 ease-out",
          "hover:bg-foreground/5 hover:text-foreground",
          active && "bg-foreground/8 text-foreground",
          "before:absolute before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:rounded-full",
          markerOffsetClass ?? "before:left-[-13px]",
          active ? "before:bg-foreground/95" : "before:bg-transparent"
        )}
      >
        <span className="truncate">{link.title}</span>
        {link.badge ? (
          <Badge
            variant={badgeVariant ?? "secondary"}
            className="ml-auto h-5 rounded-full px-2 text-[10px] font-semibold"
          >
            {link.badge.label}
          </Badge>
        ) : null}
      </Link>
    </SidebarMenuItem>
  );
}

function flattenLinks(items: SectionSidebarEntry[]): SectionSidebarLink[] {
  return items.flatMap((item) => {
    if (isLink(item)) return [item];
    if (item.type === "group") return flattenLinks(item.items);
    return [];
  });
}

export function SectionSidebarMenu({ items }: { items: SectionSidebarEntry[] }) {
  const pathname = usePathname();

  const hasGroups = items.some((item) => item.type === "group");

  if (!hasGroups) {
    return (
      <SidebarGroup className="px-1 pb-2 pt-1">
        <div className="ml-2 border-l border-border/35 pl-3">
          <SidebarMenu className="gap-0.5">
            {items.filter(isLink).map((item) => (
              <SidebarLinkItem
                key={item.href}
                link={item}
                pathname={pathname}
              />
            ))}
          </SidebarMenu>
        </div>
      </SidebarGroup>
    );
  }

  return (
    <SidebarGroup className="space-y-5 px-1 pb-2 pt-1">
      {items.map((item, index) => {
        if (item.type === "divider") {
          return <div key={`divider-${index}`} className="mx-2 h-px bg-border/50" />;
        }

        if (item.type === "heading") {
          return (
            <p
              key={`heading-${index}-${item.title}`}
              className="px-2 text-base font-semibold tracking-tight text-foreground/90"
            >
              {item.title}
            </p>
          );
        }

        if (item.type === "group") {
          return (
            <section key={`group-${index}-${item.title}`} className="space-y-2">
              <p className="px-2 text-[15px] font-semibold tracking-tight text-foreground/95">
                {item.title}
              </p>
              <div className="ml-2 border-l border-border/35 pl-3">
                <SidebarMenu className="gap-0.5">
                  {item.items.filter(isLink).map((link) => (
                    <SidebarLinkItem
                      key={link.href}
                      link={link}
                      pathname={pathname}
                    />
                  ))}
                </SidebarMenu>
              </div>
            </section>
          );
        }

        return (
          <SidebarMenu key={`link-${item.href}`} className="gap-0.5">
            <SidebarLinkItem
              link={item}
              pathname={pathname}
              markerOffsetClass="before:left-[-5px]"
            />
          </SidebarMenu>
        );
      })}
    </SidebarGroup>
  );
}

export function SectionSidebarPills({ items }: { items: SectionSidebarEntry[] }) {
  const pathname = usePathname();
  const links = flattenLinks(items);

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 lg:hidden">
      {links.map((item) => {
        const active = isPathActive(pathname, item);

        return (
          <Button
            key={item.href}
            asChild
            size="sm"
            variant="ghost"
            className={cn(
              "h-8 rounded-full px-3 text-sm",
              active
                ? "bg-foreground/12 text-foreground"
                : "text-foreground/70 hover:bg-foreground/6 hover:text-foreground"
            )}
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        );
      })}
    </div>
  );
}
