import type {
    SectionSidebarBadge,
    SectionSidebarEntry,
    SectionSidebarLink,
} from '@/components/layouts/section-sidebar.types';

type PageLike = {
    data?: {
        title?: string;
    };
    url?: string;
};

type CourseLike = {
    title: string;
    slug: string;
    isPublished?: boolean;
};

const COMPONENT_BADGES: Record<string, SectionSidebarBadge> = {
    '/components/get-started': { label: 'New', variant: 'default' },
    '/components/hero-section': { label: 'Updated', variant: 'secondary' },
    '/components/pricing': { label: 'New', variant: 'secondary' },
};

function toLinks(pages: PageLike[]): SectionSidebarLink[] {
    return pages
        .filter((page): page is Required<Pick<PageLike, 'url'>> & PageLike => Boolean(page?.url))
        .map((page) => ({
            title: page.data?.title ?? 'Untitled',
            href: page.url,
        }));
}

function withBadges(
    links: SectionSidebarLink[],
    badgeMap: Record<string, SectionSidebarBadge>
): SectionSidebarLink[] {
    return links.map((link) => ({
        ...link,
        badge: badgeMap[link.href],
    }));
}

export function getComponentsNavigation(componentPages: PageLike[]): SectionSidebarEntry[] {
    const componentLinks = withBadges(
        toLinks(componentPages).filter((link) => link.href !== '/components' && link.href !== '/components/temp' && link.href !== '/components/roadmap' ),
        COMPONENT_BADGES
    );

    return [
        {
            type: 'group',
            title: 'Main',
            items: [
                // { title: 'Home', href: '/', exact: true },
                { title: 'Get Started', href: '/components/get-started', exact: true },
                // { title: 'Tools Home', href: '/tools', exact: true },
                { title: 'Resources', href: '/tools/resources' },
                { title: 'Changelog', href: '/changelog', exact: true },
                { title: 'Roadmap', href: '/components/roadmap', exact: true },
                // { title: 'Blog', href: '/Blog', exact: true },
            ],
        },
        // {
        //     type: 'heading',
        //     title: 'Blog',
        // },
        // {
        //     type: 'group',
        //     title: 'Tools',
        //     items: [
        //     ],
        // },
        // {
        //     type: 'group',
        //     title: 'Learning',
        //     items: [
        //         // { title: 'Blocks', href: '/blocks', exact: true },
        //     ],
        // },
        {
            type: 'divider',
        },
        {
            type: 'group',
            title: 'Components',

            items: componentLinks.filter((link) => link.href !== '/components/get-started' && link.href !== '/components/contribution-guide' ),
        },
        {
            type: 'group',
            title: 'Other',

            items: [
                { title: 'Favourite UI Libraries', href: '/favourite-ui-libraries', exact: true },
            ]},
    ];
}

export function getBlocksNavigation(blockPages: PageLike[]): SectionSidebarEntry[] {
    return [
        {
            type: 'group',
            title: 'Blocks',
            items: toLinks(blockPages),
        },
    ];
}

export function getCourseNavigation(courseItems: CourseLike[]): SectionSidebarEntry[] {
    const publishedCourses = courseItems
        .filter((course) => course.isPublished)
        .map((course) => ({
            title: course.title,
            href: `/course/${course.slug}`,
        }));

    return [
        {
            type: 'group',
            title: 'Courses',
            items: [{ title: 'All Courses', href: '/course', exact: true }, ...publishedCourses],
        },
    ];
}

export function getToolsNavigation(): SectionSidebarEntry[] {
    return [
        {
            type: 'group',
            title: 'Tools',
            items: [
                { title: 'Tools Home', href: '/tools', exact: true },
                { title: 'Resources', href: '/tools/resources' },
            ],
        },
        {
            type: 'group',
            title: 'Introduction',
            items: [
                { title: 'Components', href: '/components' },
                { title: 'Blocks', href: '/blocks' },
                { title: 'Courses', href: '/course' },
            ],
        },
    ];
}
