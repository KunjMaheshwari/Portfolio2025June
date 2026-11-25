export interface PublicationItem {
  id: string;
  title: string;
  date: string;
  url: string;
  topic: string;
  tags: string[];
}

/**
 * Live-verified Medium technical publications extracted directly from
 * https://medium.com/feed/@KunjMaheshwari.
 */
export const publicationsList: PublicationItem[] = [
  {
    id: 'ms-outage-2026',
    title: 'The Microsoft Outage of 2026',
    date: 'Nov 15, 2026',
    url: 'https://medium.com/@KunjMaheshwari/the-microsoft-outage-of-2026-7cda4036c1f5',
    topic: 'Distributed Systems',
    tags: ['Distributed Systems', 'Reliability', 'Architecture'],
  },
  {
    id: 'asdlc',
    title: 'ASDLC: The Agentic Software Development Lifecycle',
    date: 'Oct 28, 2026',
    url: 'https://medium.com/@KunjMaheshwari/asdlc-the-agentic-software-development-lifecycle-908c77f817fe',
    topic: 'Agentic AI',
    tags: ['Agentic AI', 'SDLC', 'AI Coding'],
  },
  {
    id: 'ai-agents-decide-faster',
    title: 'AI Agents Don’t Need to Think Harder. They Need to Decide Faster.',
    date: 'Sep 24, 2026',
    url: 'https://medium.com/@KunjMaheshwari/ai-agents-dont-need-to-think-harder-they-need-to-decide-faster-4522f7d800be',
    topic: 'AI Engineering',
    tags: ['AI Agents', 'Latency', 'Engineering'],
  },
  {
    id: 'claude-code-10-habits',
    title: 'Claude Code: 10 Habits That Make AI Coding Better',
    date: 'Aug 20, 2026',
    url: 'https://medium.com/@KunjMaheshwari/claude-code-10-habits-that-make-ai-coding-better-454ed9bb9341',
    topic: 'Developer Tooling',
    tags: ['Claude Code', 'Workflows', 'Productivity'],
  },
  {
    id: 'messaging-queues',
    title: 'Messaging Queues in System Design',
    date: 'Apr 5, 2026',
    url: 'https://medium.com/@KunjMaheshwari/messaging-queues-in-system-design-33757d2f169a',
    topic: 'Backend Architecture',
    tags: ['System Design', 'Backend', 'Queues'],
  },
  {
    id: 'inside-craft',
    title: 'Inside CRAFT Framework: The Automation Architecture No One Documented (Until Now)',
    date: 'Mar 28, 2026',
    url: 'https://medium.com/@KunjMaheshwari/inside-craft-framework-the-automation-architecture-no-one-documented-until-now-5550f90c62fa',
    topic: 'Test Automation',
    tags: ['CRAFT', 'Java', 'Selenium'],
  },
  {
    id: 'modern-ai-stack',
    title: 'The Modern AI Stack Explained: LangChain, LangGraph & LangSmith',
    date: 'Mar 23, 2026',
    url: 'https://medium.com/@KunjMaheshwari/the-modern-ai-stack-explained-langchain-langgraph-langsmith-986b023ee2c0',
    topic: 'AI Engineering',
    tags: ['LangChain', 'LangGraph', 'LLMs'],
  },
  {
    id: 'autocomplete-to-autonomy',
    title: 'From Autocomplete to Autonomy: What Claude Code Teaches Us About the Future of Engineering',
    date: 'Aug 17, 2026',
    url: 'https://medium.com/@KunjMaheshwari/from-autocomplete-to-autonomy-what-claude-code-teaches-us-about-the-future-of-engineering-ab495d465afd',
    topic: 'Agentic AI',
    tags: ['Claude', 'Autonomy', 'Engineering'],
  },
];
