"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import type {
  SectionSidebarBadgeVariant,
  SectionSidebarCollapsible,
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

function isCollapsible(
  entry: SectionSidebarEntry
): entry is SectionSidebarCollapsible {
  return entry.type === "collapsible";
}

function isPathActive(pathname: string, link: SectionSidebarLink): boolean {
  const current = normalizePath(pathname);
  const target = normalizePath(link.href);

  if (link.exact || target === "/") return current === target;
  return current === target || current.startsWith(`${target}/`);
}

function hasActiveLink(pathname: string, items: SectionSidebarEntry[]): boolean {
  return items.some((item) => {
    if (isLink(item)) return isPathActive(pathname, item);
    if (item.type === "group" || isCollapsible(item)) {
      return hasActiveLink(pathname, item.items);
    }

    return false;
  });
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
    if (item.type === "group" || isCollapsible(item)) {
      return flattenLinks(item.items);
    }

    return [];
  });
}

export function SectionSidebarMenu({ items }: { items: SectionSidebarEntry[] }) {
  const pathname = usePathname();

  const hasStructuredItems = items.some(
    (item) => item.type && item.type !== "link"
  );

  const renderEntries = (
    entries: SectionSidebarEntry[],
    scope: string,
    nested = false
  ) => {
    return entries.map((item, index) => {
      if (item.type === "divider") {
        return (
          <div
            key={`${scope}-divider-${index}`}
            className={cn("h-px bg-border/50", nested ? "mx-0" : "mx-2")}
          />
        );
      }

      if (item.type === "heading") {
        return (
          <p
            key={`${scope}-heading-${index}-${item.title}`}
            className={cn(
              "px-2 font-semibold tracking-tight text-foreground/90",
              nested ? "text-sm" : "text-base"
            )}
          >
            {item.title}
          </p>
        );
      }

      if (item.type === "group") {
        return (
          <section key={`${scope}-group-${index}-${item.title}`} className="space-y-2">
            <p className="px-2 text-[15px] font-semibold tracking-tight text-foreground/95">
              {item.title}
            </p>
            <div className="ml-2 border-l border-border/35 pl-3">
              <div className="space-y-1">
                {renderEntries(item.items, `${scope}-group-${index}`, true)}
              </div>
            </div>
          </section>
        );
      }

      if (isCollapsible(item)) {
        const defaultOpen = item.defaultOpen ?? hasActiveLink(pathname, item.items);

        return (
          <Collapsible
            key={`${scope}-collapsible-${index}-${item.title}`}
            defaultOpen={defaultOpen}
            className="space-y-2"
          >
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="group/collapsible flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-[15px] font-semibold tracking-tight text-foreground/95 transition-colors hover:bg-foreground/5"
              >
                <span>{item.title}</span>
                <CaretDown
                  aria-hidden="true"
                  className="size-4 text-foreground/65 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180"
                />
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-2">
              <div className="border-l border-border/35 pl-3">
                <div className="space-y-1">
                  {renderEntries(item.items, `${scope}-collapsible-${index}`, true)}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        );
      }

      return (
        <SidebarMenu key={`${scope}-link-${item.href}-${index}`} className="gap-0.5">
          <SidebarLinkItem
            link={item}
            pathname={pathname}
            markerOffsetClass={nested ? undefined : "before:left-[-5px]"}
          />
        </SidebarMenu>
      );
    });
  };

  if (!hasStructuredItems) {
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
    <SidebarGroup className="space-y-5 px-1 pb-2 pt-1">{renderEntries(items, "root")}</SidebarGroup>
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
