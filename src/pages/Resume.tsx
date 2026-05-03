import { useEffect } from 'react';
import { Reveal, Section, SectionLabel, PageHero } from '../components/UI';
import SEO from '../components/SEO';

export default function Resume() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <SEO
        title="Resume — Ahmed EL Hanafi (Annafy) | Brand Designer Morocco"
        description="Ahmed EL Hanafi (Annafy) — Brand Designer & UI/UX Consultant with 8+ years of experience in Morocco. Expertise in branding, logo design, web design, and UI/UX. Based in Agadir, working globally."
      />
      <PageHero
        label="Resume"
        title="Ahmed EL Hanafi"
        titleAccent="Brand Designer & Consultant"
        description="8+ years of experience helping brands move from confusion to clarity — through positioning, design, and honest decisions."
      />

      {/* ── Statement Divider ── */}
      <section className="bg-bg pt-4 pb-8 md:pt-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <div className="border-t border-border-light pt-8 md:pt-10">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-dark leading-tight max-w-3xl">
                Certificates don&apos;t matter.
                <span className="italic text-accent"> Results do.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Profile + Contact sidebar ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Sidebar ── */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            {/* Contact Info */}
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
              <div className="space-y-3 mb-10">
                {[
                  { type: 'location', label: 'Agadir, Morocco' },
                  { type: 'email', label: 'annafy4design@gmail.com' },
                  { type: 'phone', label: '(+212) 6 53 94 13 06' },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-text-muted w-4 h-4 flex items-center justify-center shrink-0">
                      {c.type === 'location' && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-4.6 7-11a7 7 0 10-14 0c0 6.4 7 11 7 11z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      )}
                      {c.type === 'email' && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 6 8-6" />
                        </svg>
                      )}
                      {c.type === 'phone' && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.6 10.8c1.6 3.2 3.4 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.1.7.7 0 1.3.6 1.3 1.3v3.5c0 .7-.6 1.3-1.3 1.3C10.4 21.8 2.2 13.6 2.2 3.3 2.2 2.6 2.8 2 3.5 2H7c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.7 4.1.1.4 0 .9-.3 1.2l-2.1 2.2z" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm text-text-secondary">{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Socials */}
            <Reveal delay={50}>
              <SectionLabel>Socials</SectionLabel>
              <div className="space-y-2.5 mb-10">
                {[
                  { platform: 'Behance', handle: 'annafy4design', href: 'https://behance.net/annafy4design' },
                  { platform: 'Instagram', handle: 'annafy4design', href: 'https://instagram.com/annafy4design' },
                  { platform: 'LinkedIn', handle: 'ahmed-el-hanafi', href: 'https://linkedin.com/in/ahmed-el-hanafi' },
                  { platform: 'WhatsApp', handle: '06 53 92 13 06', href: 'https://wa.me/212653921306' },
                ].map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-sm text-text-secondary hover:text-dark transition-colors group"
                  >
                    <span>
                      <span className="font-medium text-dark">{s.platform}</span>
                      <span className="text-text-muted ml-2 text-xs">{s.handle}</span>
                    </span>
                    <span className="text-text-muted text-xs group-hover:translate-x-0.5 transition-transform">↗</span>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Languages */}
            <Reveal delay={100}>
              <SectionLabel>Languages</SectionLabel>
              <div className="space-y-0 border-t border-border-light mb-10">
                {[
                  { lang: 'Tamazight', level: 'Native' },
                  { lang: 'Arabic', level: 'Fluent' },
                  { lang: 'English', level: 'Very Good' },
                  { lang: 'French', level: 'Good' },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center justify-between py-3 border-b border-border-light">
                    <span className="text-sm text-dark">{l.lang}</span>
                    <span className="text-xs text-text-muted">{l.level}</span>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>

          {/* ── Main Content ── */}
          <div className="lg:col-span-8 order-1 lg:order-2">

            {/* Experience */}
            <Reveal>
              <SectionLabel>Experience</SectionLabel>
            </Reveal>
            <div className="space-y-0 border-t border-border mb-14">
              {[
                {
                  role: 'codesign.ma',
                  type: 'Co-Founder',
                  company: '',
                  period: '2025 — Present',
                  description: 'A digital team focused on conception, brand identity, UI/UX design, packaging, printing, and social media management.',
                  bullets: [
                    'Co-founded the team and help shape creative direction across brand, digital, and print projects.',
                    'Work on brand concepts, UI/UX direction, packaging ideas, print materials, and social media communication.',
                    'Support clients from idea to execution by bringing structure, clarity, and consistent visual direction.',
                  ],
                },
                {
                  role: 'Freelance Graphic Designer',
                  type: 'Graphic Designer',
                  company: '',
                  period: '2017 — Present',
                  bullets: [
                    'Created visual assets for businesses including logos, brochures, social media visuals, packaging, and advertising campaigns.',
                    'Worked closely with clients to understand design needs, translating briefs into effective visuals, and maintain brand consistency.',
                    'Delivered creative solutions within tight deadlines while managing multiple projects.',
                    'Managed social media content and advertising creatives for brands, ensuring consistent visual communication and audience engagement.',
                  ],
                },
                {
                  role: 'imk.frame Studio',
                  type: 'Designer & Consultant',
                  company: '',
                  period: '2023 — Present',
                  bullets: [
                    'Contributed to a variety of design projects including digital campaigns, brand assets, and visual strategies.',
                    'Provided design recommendations and creative direction to ensure impactful, consistent visuals.',
                  ],
                },
                {
                  role: 'aFraw',
                  type: 'Co-Founder & Graphic Designer',
                  company: '',
                  period: '2020 — 2025',
                  description: 'A creative studio specializing in designing and developing websites, digital solutions, branding, games, and mobile apps.',
                  bullets: [
                    'Built successful games and helped over 10 businesses bring their ideas to life through thoughtful design and development.',
                    'Led visual direction, crafted brand identities, and collaborated closely with developers to deliver user-centered digital products.',
                    'Worked with 10+ clients, crafting website, brand identities and delivering design solutions across print and digital media.',
                    'Successfully completed 20+ projects, helping businesses build strong, consistent, and impactful visual identities.',
                  ],
                },
              ].map((exp, i) => (
                <Reveal key={exp.role} delay={i * 60}>
                  <div className="py-7 border-b border-border">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-base font-semibold text-dark">{exp.role}</h3>
                        <p className="text-sm text-text-muted">— {exp.type}</p>
                      </div>
                      <span className="text-xs text-text-muted font-medium whitespace-nowrap mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">{exp.description}</p>
                    )}
                    <ul className="space-y-2 mt-3">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="shrink-0 w-1 h-1 rounded-full bg-text-muted mt-2" />
                          <span className="text-sm text-text-secondary leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Expertise */}
            <Reveal>
              <SectionLabel>Expertise (Skills)</SectionLabel>
            </Reveal>
            <Reveal delay={50}>
              <div className="flex flex-wrap gap-2 mb-14">
                {[
                  'Brand Strategy', 'Branding & Visual Identity', 'Logo Design',
                  'UI Design', 'UX Design', 'UX Writing', 'Design Systems',
                  'Wireframing', 'Prototyping', 'Interaction Design',
                  'Website Design', 'Web Design', 'Responsive Design', 'Landing Page Design',
                  'Social Media Direction', 'Social Media Design', 'Creative Direction',
                  'Design Review & Direction', 'Consulting', 'Art Direction',
                  'Front-end Development', 'React Development', 'Component Architecture',
                  'Accessibility Basics', 'Performance-minded Design', 'Problem Solving',
                  'Design Thinking', 'Typography', 'Color Theory',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center h-8 px-4 text-xs font-medium text-text-secondary bg-surface rounded-lg border border-border-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Education */}
            <Reveal>
              <SectionLabel>Education</SectionLabel>
            </Reveal>
            <div className="space-y-0 border-t border-border mb-14">
              {[
                {
                  title: 'Self-Taught Designer',
                  institution: 'Self Education',
                  period: 'Always',
                  description: "Passionate about design for years. My learning journey has been shaped by online courses, tutorials, and hands-on experience through real-world projects.",
                },
              ].map((edu, i) => (
                <Reveal key={edu.title} delay={i * 60}>
                  <div className="py-6 border-b border-border-light">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                      <div>
                        <h3 className="text-base font-semibold text-dark">{edu.title}</h3>
                        <p className="text-sm text-text-muted">— {edu.institution}</p>
                      </div>
                      <span className="text-xs text-text-muted font-medium whitespace-nowrap mt-1 sm:mt-0">
                        {edu.period}
                      </span>
                    </div>
                    {edu.description && (
                      <p className="text-sm text-text-secondary leading-relaxed mt-2">{edu.description}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Tools */}
            <Reveal>
              <SectionLabel>Tools</SectionLabel>
            </Reveal>
            <Reveal delay={50}>
              <div className="flex flex-wrap gap-2">
                {[
                  'Figma (my love)',
                  'Adobe Illustrator',
                  'Adobe Photoshop',
                  'Adobe InDesign',
                  'Adobe XD',
                  'Adobe AfterEffects',
                  'Sketch',
                  'Blender 3D (Basics)',
                  'Artificial Intelligence',
                  'React',
                  'TypeScript',
                  'JavaScript',
                  'Tailwind CSS',
                  'Vite',
                  'Next.js',
                  'Firebase',
                  'Git',
                  'GitHub',
                  'Vercel',
                  'Netlify',
                  'Cloudflare',
                  'Google Analytics',
                  'Meta Ads Manager',
                  'WordPress',
                  'Notion',
                ].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center h-8 px-4 text-xs font-medium text-text-secondary bg-surface rounded-lg border border-border-light"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section bg="bg-surface">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-display text-3xl md:text-4xl text-dark leading-tight">
              I turn scattered ideas
              <br />
              into brands people <span className="italic text-accent">trust.</span>
            </p>
            <p className="text-sm text-text-muted mt-4">— Annafy</p>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
