import type { ChangelogRelease } from '@/data/changelog';
import { cn } from '@/lib/utils';
import { HammerIcon, HouseIcon, MagicWandIcon } from '@phosphor-icons/react/dist/ssr';

type ChangeCategory = 'improvements' | 'fixes' | 'refactors';

const CHANGE_CATEGORY_META: Record<
  ChangeCategory,
  { label: string; dotClassName: string }
> = {
  improvements: { label: 'Improvement', dotClassName: 'bg-pink-300' },
  fixes: { label: 'Fix', dotClassName: 'bg-sky-300' },
  refactors: { label: 'Patch', dotClassName: 'bg-emerald-600' },
};

interface ChangelogTimelineItemProps {
  release: ChangelogRelease;
  anchorId: string;
  isLatest?: boolean;
  isLast?: boolean;
}

function getFlattenedChanges(release: ChangelogRelease) {
  const categories: Array<{ key: ChangeCategory; items: string[] }> = [
    { key: 'improvements', items: release.improvements },
    { key: 'fixes', items: release.fixes },
    { key: 'refactors', items: release.refactors },
  ];

  return categories
    .filter(({ items }) => items.length > 0)
    .map(({ key, items }) => ({
      id: key,
      items,
      ...CHANGE_CATEGORY_META[key],
    }));
}

function getDateTimeValue(date: string): string {
  const parsedDate = Date.parse(date);
  if (Number.isNaN(parsedDate)) return date;
  return new Date(parsedDate).toISOString();
}

export function ChangelogTimelineItem({
  release,
  anchorId,
  isLatest = false,
  isLast = false,
}: ChangelogTimelineItemProps) {
  const groupedChanges = getFlattenedChanges(release);

  return (
    <article
      id={anchorId}
      className="group grid scroll-mt-24 grid-cols-1 gap-4 md:grid-cols-[170px_minmax(0,1fr)] md:gap-3"
    >
      <div className="relative text-sm text-muted-foreground max-w-32">
        <time dateTime={getDateTimeValue(release.date)} className="inline-block md:pt-1">
          {release.date}
        </time>

        <div
          className="absolute right-0 top-0 hidden h-full translate-x-1/2 md:block"
          aria-hidden="true"
        >
          {!isLast ? (
            <span className="absolute left-1/2 top-5 h-[calc(100%+3.5rem)] w-px -translate-x-1/2 bg-border/60" />
          ) : null}
          <span className="relative block h-5 w-5 rounded-full border border-border/80 bg-background shadow-sm">
            <span className="absolute inset-[4px] rounded-full bg-foreground/75" />
          </span>
        </div>
      </div>

      <div className={cn('pb-14', !isLast && 'border-b border-border/40')}>
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex rounded-full border border-border/80 bg-muted/50 px-2.5 py-1 text-xs font-semibold tracking-wide text-foreground/90">
            {release.version}
          </span>
          {isLatest ? (
            <span className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
              Latest
            </span>
          ) : null}
        </div>

        <h2 className=" font-semibold tracking-tight text-foreground md:text-2xl">
          {release.title}
        </h2>
        <p className="mt-2 text-base text-muted-foreground">
          {release.description}
        </p>

        {groupedChanges.length > 0 ? (
          <div className="mt-6 space-y-4">
            {groupedChanges.map((changeGroup) => (
              <section key={changeGroup.id} className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground/90">
                  {changeGroup.label === 'Improvement' ? <MagicWandIcon size={16} weight="duotone" className="shrink-0" /> : null}
                  {changeGroup.label === 'Fix' ? <HammerIcon size={16} weight="duotone" className="shrink-0" /> : null}
                  {changeGroup.label === 'Patch' ? <HouseIcon size={16} weight="duotone" className="shrink-0" /> : null}
                  <span>{changeGroup.label}</span>
                </div>

                <ul className="space-y-2 pl-6">
                  {changeGroup.items.map((text, index) => (
                    <li key={`${changeGroup.id}-${index}`} className="relative text-[17px] leading-6 text-foreground/90">
                      <span
                        className={cn('absolute -left-4 top-[0.65rem] h-2 w-2 rounded-full', changeGroup.dotClassName)}
                        aria-hidden="true"
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
