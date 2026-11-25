export interface CommunityRole {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export const communityRoles: CommunityRole[] = [
  {
    id: 'tedx-vit-bhopal',
    organization: 'TEDx VIT Bhopal',
    role: 'Core Member — Media & PR Outreach Team',
    period: 'May 2023 — February 2025',
    location: 'VIT Bhopal University',
    description:
      'Drove media outreach, communications strategy, brand visibility, and digital engagement campaigns for TEDx VIT Bhopal while coordinating across design, speaker curation, and operations teams.',
    highlights: [
      'Led media outreach & public relations campaigns for university-wide TEDx events',
      'Expanded digital engagement & brand visibility across social channels',
      'Collaborated cross-functionally with speaker, design, and logistics teams',
    ],
  },
];
