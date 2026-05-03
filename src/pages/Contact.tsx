import { useEffect } from 'react';
import { Reveal, Section, SectionLabel, PageHero } from '../components/UI';
import SEO from '../components/SEO';

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <SEO
        title="Contact — Brand Designer in Morocco | Agadir | Annafy"
        description="Start a project with Annafy, a Brand Designer & UI/UX Consultant based in Agadir, Morocco. Available for branding, logo design, web design, and UI/UX projects worldwide. No commitment. Just clarity."
      />
      <PageHero
        label="Contact"
        title="Start a project."
        titleAccent="Get clarity."
        description="Tell me what you are building, what feels unclear, and where you want to go. No commitment. Just clarity."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Direct contacts */}
          <div>
            <Reveal>
              <SectionLabel>Reach me directly</SectionLabel>
              <div className="space-y-6 mt-2">
                {/* Email */}
                <a
                  href="mailto:annafy4design@gmail.com"
                  className="group flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-text-muted/30 transition-colors duration-200"
                >
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-bg border border-border-light flex items-center justify-center text-text-muted">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-1">Email</p>
                    <p className="text-sm font-medium text-dark group-hover:text-text-secondary transition-colors">annafy4design@gmail.com</p>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href="https://wa.me/212653921306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-text-muted/30 transition-colors duration-200"
                >
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-bg border border-border-light flex items-center justify-center text-text-muted">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-1">WhatsApp</p>
                    <p className="text-sm font-medium text-dark group-hover:text-text-secondary transition-colors">+212 6 53 92 13 06</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+212653941306"
                  className="group flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-text-muted/30 transition-colors duration-200"
                >
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-bg border border-border-light flex items-center justify-center text-text-muted">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-1">Phone</p>
                    <p className="text-sm font-medium text-dark group-hover:text-text-secondary transition-colors">(+212) 6 53 94 13 06</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-bg border border-border-light flex items-center justify-center text-text-muted">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-text-muted mb-1">Location</p>
                    <p className="text-sm font-medium text-dark">Agadir, Morocco</p>
                    <p className="text-xs text-text-muted mt-0.5">Available worldwide · Remote friendly</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — Socials + info */}
          <div>
            <Reveal delay={100}>
              <SectionLabel>Find me online</SectionLabel>
              <div className="space-y-4 mt-2">
                {[
                  { platform: 'Behance', handle: 'annafy4design', href: 'https://behance.net/annafy4design' },
                  { platform: 'Instagram', handle: 'annafy4design', href: 'https://instagram.com/annafy4design' },
                  { platform: 'LinkedIn', handle: 'ahmed-el-hanafi', href: 'https://linkedin.com/in/ahmed-el-hanafi' },
                ].map((s) => (
                  <a
                    key={s.platform}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-border-light hover:border-text-muted/30 transition-colors duration-200"
                  >
                    <div>
                      <p className="text-sm font-medium text-dark group-hover:text-text-secondary transition-colors">{s.platform}</p>
                      <p className="text-xs text-text-muted mt-0.5">@{s.handle}</p>
                    </div>
                    <span className="text-text-muted text-xs group-hover:translate-x-0.5 transition-transform duration-200">↗</span>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 bg-surface border border-border rounded-xl p-6 md:p-8">
                <h3 className="text-base font-semibold text-dark mb-3">Before you reach out</h3>
                <div className="space-y-3">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    I am most helpful to brands that are serious about investing in clarity, identity, and long-term value. If that sounds like you, I would love to hear about your challenge.
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Tell me about your brand, your challenge, and what you are hoping to achieve. The more context, the better our first conversation will be.
                  </p>
                  <p className="text-sm text-text-muted">
                    I typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 bg-surface border border-border rounded-xl p-6 md:p-8">
                <h3 className="text-base font-semibold text-dark mb-3">Availability</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  I am currently accepting new projects and ongoing partnerships. Timezone: GMT+1 (Morocco).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
