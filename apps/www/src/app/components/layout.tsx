import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { components } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout  tree={components.pageTree}  githubUrl='https://github.com/mohdfaizan5/unicornspace-ui' {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
