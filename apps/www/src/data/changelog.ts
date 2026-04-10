export interface ChangelogRelease {
    version: string;
    date: string; // Format: "Jan 24, 2026" or ISO date
    title: string;
    description: string;
    improvements: string[];
    fixes: string[];
    refactors: string[];
}

export type ChangelogReleaseList = ChangelogRelease[];
export type ChangelogEntry = ChangelogRelease;
export type Changelog = ChangelogReleaseList;
/**
 * Changelog data for the application.
 * Add new entries at the TOP of the array.
 * Follow the format: version, date, title, description, and categorized changes.
 */
export const changelogReleases: ChangelogReleaseList = [
    {
        version: "2.0",
        date: "10 April, 2026",
        title: "Rebirth of UnicornSpaceUI",
        description: "A Complete Redesign and Feature Overhaul Project cards now show real collaborator and task progress data, support dynamic progress color thresholds, and use deterministic icon variation with cleaner build/type safety.",
        improvements: [
            "Add Changelog, Add Favourate UI library page,",
            "Changed font to Inter Tight for better readability and Instrumental Serif for headings.",
            "Add Shadcn Directory support ",
        ],
        fixes: [
            "Removed @blocks, @courses and lot of components that were too simple/generic that AI can make them.",
        ],
        refactors: [
            "moved unnecessary components to /other/components and mentioned (avg components)",
            "updated to Nextjs 15-> 16 and Fumadocs14 -> 16.2, Shadcn -> Coss/origin ui",
        ]
    },
    {
        version: "1.5.1",
        date: "till April 10, 2026",
        title: "We didn't document changes properly",
        description: "We regret not maintaining a proper changelog and documenting changes in the past. We are committed to improving our documentation and changelog practices moving forward.",
        improvements: [
        ],
        fixes: [
        ],
        refactors: [

        ]
    },
   
];

export const changelog = changelogReleases;