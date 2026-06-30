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
  resumeUrl: '/resume/Deon-Hiu-Resume.pdf',

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
} as const;

export type Site = typeof site;
