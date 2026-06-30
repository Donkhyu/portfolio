// Single source of truth for site copy, links, and the editable status strings.
// Update values here — components read from this file.

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  /** short handle shown next to the label, optional */
  handle?: string;
}

export const site = {
  name: 'Deon Hiu',
  role: 'Software Engineer Intern',
  company: 'Rooftop Energy',
  /** one-line value proposition shown in the hero */
  tagline: 'I build warm, considered software — backend systems, data, and the occasional pour-over.',
  /** short blurb for SEO description / OG */
  description:
    'Deon Hiu — Software Engineer Intern at Rooftop Energy. Backend, data, and clean web work, served warm.',
  location: 'Malaysia',

  // The editable personality strings (Phase 5 islands read these):
  nowBrewing: 'Reading docs + a flat white',
  onTheRecord: 'Daniel Caesar — Best Part',

  email: 'deon@rooftop.my',
  // Drop your PDF at public/resume/Deon-Hiu-Resume.pdf and set this to
  // '/resume/Deon-Hiu-Resume.pdf'. Left empty hides the Résumé button.
  resumeUrl: '',

  socials: [
    { label: 'GitHub', href: 'https://github.com/Donkhyu', handle: '@Donkhyu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', handle: 'add your URL' },
    { label: 'Email', href: 'mailto:deon@rooftop.my', handle: 'deon@rooftop.my' },
  ] satisfies SocialLink[],

  nav: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ] satisfies NavItem[],

  // "The Roast" — short bio paragraphs. Edit freely.
  about: [
    'I’m a software engineer who likes building things that feel considered — backend systems and data work at Rooftop Energy by day, small experiments by night.',
    'Off the keyboard you’ll find me chasing a clean pass on the volleyball court, dialing in a pour-over, or letting some R&B run in the background. Turns out the same things matter everywhere: rhythm, a good setup, and caring about the details.',
  ],

  // "The Menu" — skills as a coffee menu. levels: 1 = exploring, 2 = comfortable, 3 = strong.
  skills: [
    {
      group: 'Espresso',
      subtitle: 'Languages I reach for',
      items: [
        { name: 'Python', level: 3 },
        { name: 'TypeScript / JavaScript', level: 3 },
        { name: 'SQL', level: 2 },
        { name: 'Java', level: 2 },
      ],
    },
    {
      group: 'Pour-over',
      subtitle: 'Frameworks & tools',
      items: [
        { name: 'FastAPI', level: 2 },
        { name: 'React', level: 2 },
        { name: 'Node.js', level: 2 },
        { name: 'PostgreSQL', level: 2 },
        { name: 'Git', level: 3 },
        { name: 'Docker', level: 1 },
      ],
    },
    {
      group: 'Cold brew',
      subtitle: 'Currently steeping',
      items: [
        { name: 'Astro', level: 1 },
        { name: 'AWS', level: 1 },
        { name: 'Rust', level: 1 },
      ],
    },
  ],
} as const;

export type Site = typeof site;
export type SkillGroup = (typeof site.skills)[number];
