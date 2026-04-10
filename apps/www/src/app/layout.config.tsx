import Logo from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, FileIcon, LayoutGrid, NotebookText, Settings } from 'lucide-react';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <Logo full link={false} textClassName='text-base mt-1' className='items-center flex' />
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      icon: <FileIcon />,
      label: 'components', // `aria-label`

      text: 'Components',
      url: '/components',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    // {
    //   icon: <NotebookText className='' />,
    //   text: 'Courses',
    //   url: '/course',
    //   // secondary items will be displayed differently on navbar
    //   secondary: false,
    // },
    // {
    //   icon: <LayoutGrid />,
    //   text: 'Blocks',
    //   url: '/blocks',
    //   // secondary items will be displayed differently on navbar
    //   secondary: false,
    // },
    {
      icon: <BookIcon />,
      text: 'Blog',
      url: '/blog',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    {
      icon: <Settings />,
      text: 'Resources',
      url: '/tools/resources',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },

  ],
};
