import { SiteSectionLayout } from '@/components/layouts/site-section-layout';
import { coursesRegistry } from 'content/courses/course-registry';
import { getCourseNavigation } from '@/config/navigation/section-navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigation = getCourseNavigation(coursesRegistry);

  return (
    <SiteSectionLayout navTitle="Courses" navigation={navigation}>
      {children}
    </SiteSectionLayout>
  );
}
