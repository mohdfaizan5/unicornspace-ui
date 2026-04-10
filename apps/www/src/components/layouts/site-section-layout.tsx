import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import {
    Sidebar,
    SidebarHeader,
    SidebarProvider,
} from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import {
    SectionSidebarMenu,
    SectionSidebarPills,
} from '@/components/layouts/section-sidebar-nav';
import type {
    SectionSidebarBadge,
    SectionSidebarEntry,
} from '@/components/layouts/section-sidebar.types';

export interface SectionNavItem {
    title: string;
    href: string;
    badge?: SectionSidebarBadge;
    exact?: boolean;
}

interface SiteSectionLayoutProps {
    children: ReactNode;
    navTitle?: string;
    navigation?: SectionSidebarEntry[];
    navItems?: SectionNavItem[];
    contentClassName?: string;
}

export function SiteSectionLayout({
    children,
    navTitle,
    navigation,
    navItems = [],
    contentClassName,
}: SiteSectionLayoutProps) {
    const resolvedNavigation: SectionSidebarEntry[] = navigation ?? navItems;
    const hasSidebar = resolvedNavigation.length > 0;

    return (
        <HomeLayout {...baseOptions}>
            <SidebarProvider defaultOpen>
                <div className="mx-auto flex h-[calc(100svh-var(--fd-nav-height,4rem))] min-h-0 w-full max-w-[1440px] flex-1 gap-6 overflow-hidden px-4 py-6 md:px-6">
                    {hasSidebar ? (
                        <>
                            <Sidebar
                                collapsible="none"
                                className="hidden h-full min-h-0 shrink-0 overflow-hidden bg-transparent lg:flex lg:flex-col lg:self-stretch"
                            >
                                {navTitle && (

                                    <SidebarHeader className="px-3 pb-2 pt-1">
                                        <p className="text-lg font-semibold tracking-tight text-foreground">
                                            {navTitle}
                                        </p>
                                    </SidebarHeader>
                                )}
                                <ScrollArea className="h-full min-h-0 flex-1 pl-2 pr-5">
                                    <SectionSidebarMenu items={resolvedNavigation} />
                                </ScrollArea>
                            </Sidebar>

                            <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-hidden lg:pl-3">
                                <SectionSidebarPills items={resolvedNavigation} />
                                <ScrollArea className={cn('h-full min-h-0 min-w-0 flex-1 pr-1', contentClassName)}>{children}</ScrollArea>
                            </div>
                        </>
                    ) : (
                        <ScrollArea className={cn('h-full min-h-0 min-w-0 flex-1 pr-1', contentClassName)}>{children}</ScrollArea>
                    )}
                </div>
            </SidebarProvider>
        </HomeLayout>
    );
}
