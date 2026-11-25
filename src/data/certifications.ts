export type CredentialCategory = 'certification' | 'assessment' | 'learning';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: CredentialCategory;
  badge: string;
  verificationLink?: string;
}

/**
 * Strictly separates industry certifications, assessments/badges, and structured courses
 * per Data Integrity Rule #6.
 */
export const certificationsList: CertificationItem[] = [
  // Industry Certifications
  {
    id: 'cca-f',
    title: 'Claude Certified Architect — Foundations (CCA-F)',
    issuer: 'Anthropic',
    category: 'certification',
    badge: 'Certification',
  },
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    category: 'certification',
    badge: 'Certification',
    verificationLink: 'https://drive.google.com/file/d/1VHI9H8izuWi6Du2K7tm89QFF_ekC13vy/view',
  },

  // Assessments & Technical Badges
  {
    id: 'aws-ai-assessment',
    title: 'AWS Certified AI Practitioner Assessment',
    issuer: 'Amazon Web Services',
    category: 'assessment',
    badge: 'Assessment',
  },
  {
    id: 'postman-api',
    title: 'API Fundamentals Student Expert',
    issuer: 'Postman',
    category: 'assessment',
    badge: 'Verified Badge',
  },
  {
    id: 'azure-challenge',
    title: 'Microsoft Azure Fundamentals Challenge',
    issuer: 'Microsoft Learn Student Ambassadors',
    category: 'assessment',
    badge: 'Challenge',
  },

  // Structured Engineering Learning & Bootcamps
  {
    id: 'context-eng',
    title: 'Context Engineering Foundation',
    issuer: 'Cognizant',
    category: 'learning',
    badge: 'Training',
  },
  {
    id: 'gfg-api',
    title: 'API Bootcamp',
    issuer: 'GeeksforGeeks',
    category: 'learning',
    badge: 'Bootcamp',
  },
  {
    id: 'google-networking',
    title: 'Google Networking Fundamentals',
    issuer: 'Google',
    category: 'learning',
    badge: 'Course',
  },
  {
    id: 'ibm-cloud',
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    category: 'learning',
    badge: 'Course',
  },
  {
    id: 'udemy-webdev',
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    category: 'learning',
    badge: 'Bootcamp',
  },
  {
    id: 'apna-dsa',
    title: 'DSA with Java',
    issuer: 'Apna College',
    category: 'learning',
    badge: 'Course',
  },
];
