import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { components } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      // tree={components.pageTree}
      tree={{
        name: 'docs',
        children: [
          {
            type: "page",
            name: 'Get Started',
            url: "/components/get-started",
          },
            {
            type: "page",
            name: "Hero Section",
            url: "/components/hero-section",
          },
          {
            type: "page",
            name: "CTA and Sections",
            url: "/components/cta-and-sections",
          },
          {
            type: "page",
            name: "Features",
            url: "/components/features",
          },
          {
            type: "page",
            name: "Navbar",
            url: "/components/navbar",
          },
          {
            type: "page",
            name: "Pricing",
            url: "/components/pricing",
          },
          {
            type: "page",
            name: "FAQ",
            url: "/components/faq",
          },
          {
            type: "page",
            name: "Ecommerce",
            url: "/components/ecommerce",
          },
          {
            type: "page",
            name: "Footers",
            url: "/components/footers",
          },
  
        
          
          {
            type: "page",
            name: "Shadcn Forms",
            url: "/components/shadcn-forms",
          },
          {
            type: "page",
            name: "Testimonials",
            url: "/components/testimonials",
          },

        ],

      }}
      // nav={{ ...baseOptions.nav, transparentMode:  }}

      githubUrl='https://github.com/mohdfaizan5/unicornspace-ui'
      {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
