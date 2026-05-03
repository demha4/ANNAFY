import afrawImg from '../assets/project-afraw.jpg';
import imkframeImg from '../assets/project-imkframe.jpg';
import riadImg from '../assets/project-riad.jpg';

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  client: string;
  services: string[];
  overview: string;
  problem: string;
  thinking: string[];
  solution: string[];
  outcome: string;
  testimonial?: { text: string; name: string; role: string };
}

export const projects: Project[] = [
  {
    slug: 'afraw',
    title: 'Afraw',
    category: 'Brand Strategy & Identity',
    description: 'Building a complete brand identity for a Moroccan-rooted creative studio — from strategy to visual system.',
    image: afrawImg,
    year: '2021',
    client: 'Afraw Studio',
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Creative Direction'],
    overview:
      'Afraw is a Moroccan-rooted creative studio that needed a brand identity matching the depth of its vision. The challenge was to create something authentic, modern, and culturally grounded — without falling into clichés.',
    problem:
      'Afraw had a strong vision and talented team, but no visual language or market positioning to match. They were competing for clients with nothing but word-of-mouth and inconsistent visuals. The brand felt invisible in a crowded creative market. They needed more than a logo — they needed a complete identity system that communicated who they are and why they matter.',
    thinking: [
      'Started with deep conversations about values, audience, and long-term vision — not aesthetics.',
      'Researched the competitive landscape across Morocco and the broader MENA region to find whitespace.',
      'Identified the core tension: how to feel authentically Moroccan without being traditional or predictable.',
      'Defined the brand positioning around the idea of "rooted creativity" — modern craft with cultural depth.',
    ],
    solution: [
      'Created a brand strategy document defining positioning, voice, audience, and messaging pillars.',
      'Designed a geometric logo system inspired by Amazigh patterns, abstracted into a modern mark.',
      'Developed a complete visual identity: color palette rooted in Moroccan earth tones, typography pairing, and pattern system.',
      'Built comprehensive brand guidelines ensuring consistency across all touchpoints — digital, print, and social.',
    ],
    outcome:
      'Afraw launched with a cohesive presence that resonated immediately with their target audience. The brand system gave the team confidence and clarity in every decision. Within 6 months, client inquiries increased significantly, and the studio was recognized as a serious player in the Moroccan creative scene.',
    testimonial: {
      text: "Annafy didn't just design our brand — he helped us understand it. The result feels like us, but sharper and more intentional than we could have imagined.",
      name: 'Co-founder',
      role: 'Afraw Studio',
    },
  },
  {
    slug: 'imk-frame',
    title: 'IMK Frame',
    category: 'UI/UX & Digital Experience',
    description: 'Redesigning the digital experience for an established agency — from information architecture to pixel-level UI.',
    image: imkframeImg,
    year: '2023',
    client: 'IMK Frame Studio',
    services: ['UI/UX Design', 'Information Architecture', 'Design System', 'Consulting'],
    overview:
      'IMK Frame is an established creative agency that had outgrown its digital presence. Their website no longer reflected their capabilities or the quality of their work. The goal was to create a digital experience that builds trust and converts visitors into clients.',
    problem:
      "The existing website was outdated, slow, and poorly structured. It didn't communicate the agency's expertise or differentiate them from competitors. Navigation was confusing, the portfolio lacked context, and the contact flow had too much friction. Potential clients were leaving before understanding what IMK Frame actually does.",
    thinking: [
      'Audited the existing site: analytics, user flows, and heatmaps revealed where people dropped off.',
      'Interviewed the team and past clients to understand what makes IMK Frame different — and what clients care about most.',
      'Mapped the ideal user journey: from first impression to understanding services to making contact.',
      'Prioritized clarity over creativity — the site needed to communicate value in seconds, not minutes.',
    ],
    solution: [
      'Rebuilt the information architecture from scratch — clear hierarchy, logical flow, zero dead ends.',
      'Designed a clean, minimal UI with strong typography and generous whitespace that lets the work speak.',
      'Created a component-based design system for consistency and easy future updates.',
      'Simplified the contact flow to a single step — removing every unnecessary barrier to conversation.',
    ],
    outcome:
      'The new website transformed how potential clients perceived IMK Frame. Page engagement increased, bounce rate dropped, and client inquiries became more qualified. The design system also made it easy for the team to maintain and update content without design support.',
    testimonial: {
      text: 'The new site finally feels like us. Clients now come to meetings already understanding what we do — that never happened before.',
      name: 'Director',
      role: 'IMK Frame Studio',
    },
  },
  {
    slug: 'riad-botanica',
    title: 'Riad Botanica',
    category: 'Brand Identity & Experience',
    description: 'Crafting a refined brand identity for a luxury boutique hotel in Marrakech — capturing the essence of place.',
    image: riadImg,
    year: '2022',
    client: 'Riad Botanica, Marrakech',
    services: ['Brand Strategy', 'Visual Identity', 'Experience Design', 'Print Design'],
    overview:
      'Riad Botanica is a luxury boutique hotel in the heart of Marrakech. In a city filled with beautiful riads, they needed a brand that captured what makes their experience truly unique — the intersection of botanical calm and Moroccan warmth.',
    problem:
      "Marrakech's hospitality market is saturated with beautiful properties. Riad Botanica had an exceptional guest experience but a forgettable brand presence. Their visual identity didn't match the quality of the stay. Online, they looked like every other riad. They were competing on price when they should have been competing on experience.",
    thinking: [
      'Spent time at the property to understand the experience firsthand — the sounds, the light, the garden, the feeling of arrival.',
      'Identified the unique differentiator: a rare botanical garden within the riad that creates a sense of calm unlike any competitor.',
      'Positioned the brand at the intersection of nature and craftsmanship — organic meets intentional.',
      'Studied luxury hospitality branding globally to understand what signals premium without feeling cold or corporate.',
    ],
    solution: [
      "Developed a brand strategy around the concept of 'cultivated calm' — every touchpoint should feel like entering the garden.",
      'Designed a refined wordmark paired with a botanical illustration system that can flex across all materials.',
      'Created a warm, earthy color palette with a single accent of deep garden green — simple but immediately recognizable.',
      'Designed the full guest experience: welcome cards, room menus, signage, and packaging — all consistent, all intentional.',
    ],
    outcome:
      'Riad Botanica now has a brand that matches its experience. Guests comment on the visual identity as part of what makes the stay special. The premium perception allowed the property to adjust pricing upward while maintaining high occupancy. The brand became a reason to visit, not just the location.',
    testimonial: {
      text: "He understood our riad better than we did. The brand he created isn't just beautiful — it tells our story in a way guests feel the moment they arrive.",
      name: 'Owner',
      role: 'Riad Botanica',
    },
  },
];
