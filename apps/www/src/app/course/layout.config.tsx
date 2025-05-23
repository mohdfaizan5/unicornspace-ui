import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  links: [
    {
      type: 'menu',
      text: 'Guide',
      items: [
        {
          text: 'Getting Started',
          description: 'Learn to use Fumadocs',
          url: '/docs',
        },
      ],
    },
  ],
};