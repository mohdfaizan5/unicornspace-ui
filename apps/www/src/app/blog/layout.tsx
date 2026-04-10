import { SiteSectionLayout } from '@/components/layouts/site-section-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SiteSectionLayout navTitle="Blog" navigation={[]}>
      {children}
    </SiteSectionLayout>
  );
}
