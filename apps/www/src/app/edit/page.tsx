import Link from 'next/link';

export const metadata = {
  title: 'Edit Content | UnicornSpaceUI',
  description: 'Contributor edit hub for docs, components, blocks, and courses.',
};

const sections = [
  {
    title: 'Components Content',
    href: 'https://github.com/mohdfaizan5/unicornspace-ui/tree/main/apps/www/content/components',
    description: 'Update component docs, examples, and usage notes.',
  },
  {
    title: 'Blocks Content',
    href: 'https://github.com/mohdfaizan5/unicornspace-ui/tree/main/apps/www/content/blocks',
    description: 'Edit block pages and grouped examples.',
  },
  {
    title: 'Blog Content',
    href: 'https://github.com/mohdfaizan5/unicornspace-ui/tree/main/apps/www/content/blog',
    description: 'Publish tutorials and product updates.',
  },
  {
    title: 'Courses Content',
    href: 'https://github.com/mohdfaizan5/unicornspace-ui/tree/main/apps/www/content/courses',
    description: 'Maintain course lessons and learning tracks.',
  },
  {
    title: 'Navigation Config',
    href: 'https://github.com/mohdfaizan5/unicornspace-ui/blob/main/apps/www/src/config/navigation/section-navigation.ts',
    description: 'Edit sidebar grouping, labels, ordering, and badges in one place.',
  },
];

export default function EditPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 md:px-6">
      <h1 className="text-3xl font-semibold tracking-tight">Edit Hub</h1>
      <p className="mt-2 text-muted-foreground">
        Use this page to quickly jump into the right section and update site content.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            target="_blank"
            className="rounded-xl border border-border/70 p-4 transition-colors hover:bg-foreground/5"
          >
            <h2 className="text-lg font-medium">{section.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
