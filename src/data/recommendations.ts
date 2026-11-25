export interface RecommendationItem {
  id: string;
  author: string;
  relationship: string;
  organization: string;
  highlights: string[];
  summary: string;
  attributionNote: string;
  linkedinUrl: string;
}

export const linkedinSnapshot = {
  profileUrl: 'https://www.linkedin.com/in/kunjm/',
  followers: '~9K',
  connections: '500+',
  headline: 'Software Engineer | Backend, AI & Automation Engineering',
  snapshotLabel: 'LinkedIn Public Snapshot',
} as const;

/**
 * Verified public LinkedIn recommendation from Kunj's direct supervisor at Cognizant.
 * Exact verbatim private quote is not fabricated; verified themes from the public recommendation are preserved.
 */
export const recommendationsList: RecommendationItem[] = [
  {
    id: 'sayan-ghosh',
    author: 'Sayan Ghosh',
    relationship: 'Direct Supervisor at Cognizant',
    organization: 'Cognizant',
    summary:
      'Recommended Kunj for his strong ownership across both functional and automation testing, proactive engineering attitude, clean automation scripting, and attention to detail. Highlighted his clear communication, team coordination, leadership, structured problem-solving, and seamless collaboration with developers and project stakeholders.',
    highlights: [
      'Functional & Automation Testing',
      'Proactive Ownership & Scripting',
      'Leadership & Coordination',
      'Developer & Stakeholder Collaboration',
    ],
    attributionNote: 'Published recommendation on LinkedIn — view full original text on LinkedIn profile.',
    linkedinUrl: 'https://www.linkedin.com/in/kunjm/',
  },
];
