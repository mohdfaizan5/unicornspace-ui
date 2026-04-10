import { blocks } from '@/lib/source';
import { SiteSectionLayout } from '@/components/layouts/site-section-layout';
import { getBlocksNavigation } from '@/config/navigation/section-navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = getBlocksNavigation(blocks.getPages() as any[]);

  return (
    <SiteSectionLayout navTitle="Blocks" navigation={navigation}>
      {children}
    </SiteSectionLayout>
  );
}