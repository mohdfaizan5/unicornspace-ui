import {
    changelogReleases,
    type ChangelogRelease,
} from '@/data/changelog';
import { ChangelogTimelineItem } from '@/components/changelog/changelog-timeline-item';
import { cn } from '@/lib/utils';

export const metadata = {
    title: 'Changelog | UnicornSpaceUI',
    description:
        'Latest updates, improvements, and fixes for UnicornSpaceUI components and docs.',
};

function toReleaseAnchorId(version: string): string {
    return `release-${version.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase()}`;
}

function sortByNewest(releases: ChangelogRelease[]): ChangelogRelease[] {
    return [...releases].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export default function ChangelogPage() {
    const releases = sortByNewest(changelogReleases);
    const releaseItems = releases.map((release) => ({
        release,
        anchorId: toReleaseAnchorId(release.version),
    }));

    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-12 pt-10 sm:px-6 lg:px-8">
                <header className="mb-10 border-b border-border/40 pb-4">
                    <p className="text-xs font-medium font-mono uppercase tracking-[0.18em] text-muted-foreground">
                        Release Notes
                    </p>
                    <h1 className="mt-0 text-4xl font-semibold tracking-tight sm:text-4xl">
                        Changelog
                    </h1>
                    <p className="mt-0 max-w-2xl text-lg leading-8 text-muted-foreground">
                        One place for every shipped update across components, blocks, and docs.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
                    <section aria-label="Product changelog timeline">
                        <div className="space-y-0">
                            {releaseItems.map((item, index) => (
                                <ChangelogTimelineItem
                                    key={item.release.version}
                                    release={item.release}
                                    anchorId={item.anchorId}
                                    isLatest={index === 0}
                                    isLast={index === releaseItems.length - 1}
                                />
                            ))}
                        </div>
                    </section>

                    <aside className="hidden xl:block xl:sticky xl:top-2 xl:h-fit">
                        <p className="mb-4 text-sm font-medium text-foreground">On this page</p>
                        <nav className="border-l border-border/60 pl-3">
                            {releaseItems.map((item, index) => (
                                <a
                                    key={item.anchorId}
                                    href={`#${item.anchorId}`}
                                    className={cn(
                                        'block border-l-2 border-transparent py-1.5 pl-3 text-sm transition-colors',
                                        index === 0
                                            ? 'border-foreground/90 text-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    )}
                                >
                                    {item.release.version}
                                </a>
                            ))}
                        </nav>
                    </aside>
                </div>
            </div>
        </div>
    );
}
