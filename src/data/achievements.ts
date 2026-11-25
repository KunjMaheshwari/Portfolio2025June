export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
}

/**
 * Verified awards and recognitions — kept strictly distinct from certifications and assessments.
 */
export const achievementsList: AchievementItem[] = [
  {
    id: 'amber-award',
    title: 'Amber Award',
    issuer: 'Cognizant',
    date: 'August 2026',
    badge: 'Enterprise Recognition',
    description:
      'Recognized for high-impact contributions to the Regeneron MTS project delivery and additional account-level engineering activities.',
  },
  {
    id: 'achiever-award',
    title: 'Achiever Award',
    issuer: 'Cognizant',
    date: 'May 2026',
    badge: 'Performance Award',
    description:
      'Awarded for consistent technical execution, ownership, and quality engineering impact across enterprise automation deliverables.',
  },
  {
    id: 'coral-award',
    title: 'The Coral Award',
    issuer: 'Cognizant',
    date: 'November 2025',
    badge: 'Excellence Award',
    description:
      'Recognition for continuous and outstanding performance during enterprise automation delivery and team collaboration.',
  },
  {
    id: 'hacktoberfest-2024',
    title: 'Hacktoberfest 2024 Completer',
    issuer: 'DigitalOcean & Holopin',
    date: 'October 2024',
    badge: 'Open Source',
    description:
      'Completed four accepted open-source pull requests with verified Holopin digital badges.',
  },
  {
    id: 'nptel-cloud',
    title: 'NPTEL Cloud Computing — Elite + Silver',
    issuer: 'IIT Kharagpur (SWAYAM)',
    date: '2024',
    badge: 'Top 5% Nationally',
    description:
      'Ranked among the top 5% of nationwide candidates in IIT Kharagpur’s Cloud Computing examination.',
  },
];
