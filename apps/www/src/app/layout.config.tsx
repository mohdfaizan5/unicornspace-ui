import Logo from '@/components/logo';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BookIcon, FileIcon, NotebookText, Settings } from 'lucide-react';

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
      <Logo full textClassName='text-lg mt-2' className='items-center'/>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
 links: [
    {
      icon: <FileIcon   />,
            label: 'components', // `aria-label`

      text: 'Components',
      url: '/components',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    {
      icon: <NotebookText className=''   />,
      text: 'Courses',
      url: '/course',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    {
      icon: <BookIcon   />,
      text: 'Blog',
      url: '/blog',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    {
      icon: <Settings   />,
      text: 'Tools',
      url: '/tools',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    
  ],};
