"use client"

import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

type DirectoryEntry = {
  name: string
  href: string
  description: string
  logo: string
}

const favouriteLibraries: DirectoryEntry[] = [
  {
    name: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    description:
      "My default pick for building clean app UIs quickly with reusable primitives and easy customization.",
    logo: "S",
  },
  {
    name: "Magic UI",
    href: "https://magicui.design/",
    description:
      "A strong library for polished landing-page style components, effects, and motion-heavy sections.",
    logo: "M",
  },
  {
    name: "Aceternity UI",
    href: "https://ui.aceternity.com/",
    description:
      "Useful when I want richer visual components with a more expressive, modern presentation style.",
    logo: "A",
  },
  {
    name: "Origin UI",
    href: "https://originui.com/",
    description:
      "A nice source of practical interface patterns and production-friendly components for dashboards and forms.",
    logo: "O",
  },
  {
    name: "Next UI",
    href: "https://www.heroui.com/",
    description:
      "Helpful when I need a more batteries-included React component system with consistent defaults.",
    logo: "N",
  },
]

export function DirectoryList() {
  return (
    <ItemGroup className="mt-8 ">
      {favouriteLibraries.map((library, index) => (
        <div key={library.name}>
          <Item className="gap-4 px-0 py-4 sm:gap-4">
            <ItemMedia
              variant="icon"
              className="size-12 rounded-xl border border-border/70 bg-muted text-sm font-semibold"
            >
              {library.logo}
            </ItemMedia>
            <ItemContent className="gap-0">
              <ItemTitle>
                <a
                  href={library.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary group"
                >
                  {library.name}
                  <ArrowUpRight className="size-4 group-hover:block hidden" />
                </a>
              </ItemTitle>
              <ItemDescription>{library.description}</ItemDescription>
            </ItemContent>
            <ItemActions className="ml-auto hidden sm:flex">
              <Button asChild variant="outline" size="sm">
                <a href={library.href} target="_blank" rel="noopener noreferrer">
                  Visit
                  <ArrowUpRight />
                </a>
              </Button>
            </ItemActions>
          </Item>
          {index < favouriteLibraries.length - 1 ? (
            <ItemSeparator className="my-0" />
          ) : null}
        </div>
      ))}
    </ItemGroup>
  )
}
