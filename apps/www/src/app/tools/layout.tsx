import { SiteSectionLayout } from '@/components/layouts/site-section-layout';
import { getComponentsNavigation, getToolsNavigation } from '@/config/navigation/section-navigation';
import { components } from '@/lib/source';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = getComponentsNavigation(components.getPages() as any[]);

  return (
    <SiteSectionLayout navigation={navigation}>
      {children}
    </SiteSectionLayout>
  );
}
