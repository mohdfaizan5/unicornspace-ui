import { components } from '@/lib/source';
import { SiteSectionLayout } from '@/components/layouts/site-section-layout';
import { getComponentsNavigation } from '@/config/navigation/section-navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = getComponentsNavigation(components.getPages() as any[]);

  return (
    <SiteSectionLayout  navigation={navigation}>
      {children}
    </SiteSectionLayout>
  );
}
