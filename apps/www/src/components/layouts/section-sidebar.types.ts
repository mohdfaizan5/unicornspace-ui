export type SectionSidebarBadgeVariant = "default" | "secondary" | "primary";

export interface SectionSidebarBadge {
  label: string;
  variant?: SectionSidebarBadgeVariant;
}

export interface SectionSidebarLink {
  type?: "link";
  title: string;
  href: string;
  badge?: SectionSidebarBadge;
  exact?: boolean;
}

export interface SectionSidebarGroup {
  type: "group";
  title: string;
  items: SectionSidebarEntry[];
}

export interface SectionSidebarHeading {
  type: "heading";
  title: string;
}

export interface SectionSidebarDivider {
  type: "divider";
}

export type SectionSidebarEntry =
  | SectionSidebarLink
  | SectionSidebarGroup
  | SectionSidebarHeading
  | SectionSidebarDivider;
