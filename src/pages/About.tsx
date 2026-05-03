import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Section, SectionLabel } from '../components/UI';
import SEO from '../components/SEO';
import profileImage from '../assets/ahmed-profile.jpg';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main>
      <SEO
        title="About Annafy — Brand Designer in Morocco | Agadir"
        description="Ahmed EL Hanafi (Annafy) is a Brand Designer & Consultant based in Agadir, Morocco with 8+ years of experience. Learn about my approach to branding, UI/UX design, and helping Moroccan and global brands achieve clarity."
      />
      <section className="bg-bg pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            {/* Image — left */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <Reveal delay={150}>
                <div className="relative max-w-[380px]">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface border border-border-light">
                    <img
                      src={profileImage}
                      alt="Ahmed EL Hanafi (Annafy), Brand Designer & Consultant based in Agadir, Morocco"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Text — right */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <Reveal>
                <SectionLabel>About</SectionLabel>
              </Reveal>
              <Reveal delay={50}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-dark leading-[1.02]">
                  Design is not decoration.
                  <br />
                  <span className="italic font-normal text-text-secondary">It&apos;s a way of thinking.</span>
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
                  I&apos;m Ahmed EL Hanafi — most people call me Annafy. Brand Designer and Consultant based in Agadir, Morocco. I help brands move from confusion to clarity.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05] mb-6">
                Who I am
              </h2>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={50}>
                <p className="text-text-secondary leading-relaxed">
                  Hey, I&apos;m Ahmed EL Hanafi — but most people know me as Annafy. I&apos;m a Brand Designer and Design Partner based in Agadir, Morocco.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-text-secondary leading-relaxed">
                  My work is focused on one thing: helping startups, founders, and growing businesses turn unclear ideas into clear brands people can understand, trust, and use.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-text-secondary leading-relaxed">
                  I turn scattered ideas into brands people understand and trust. Branding, visual identity, and UI/UX are the tools I use to solve real business problems — not the final goal.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-text-secondary leading-relaxed">
                  My story with design didn&apos;t start in a classroom. It started much earlier — as a kid, constantly sketching on walls, papers, and notebooks. I didn&apos;t know it then, but I was already learning how to observe, simplify, and communicate ideas visually.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="text-text-secondary leading-relaxed">
                  Over time, that curiosity became a serious practice in brand identity and digital experience. I learned how a logo, a website, an interface, and a message all need to work together to make a brand feel clear and credible.
                </p>
              </Reveal>
            </div>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05] mb-6">
                What I do
              </h2>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={150}>
                <p className="text-text-secondary leading-relaxed">
                  After high school, I chose a different path and built my skills through real projects, self-learning, and direct client work. Not for titles or validation — but to understand how design can help businesses make better decisions.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-text-secondary leading-relaxed">
                  Today, I help brands move from confusion to clarity by defining their position, shaping their identity, and improving how people experience them online. The goal is not to make things look impressive. The goal is to make the brand easier to understand, easier to trust, and easier to choose.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p className="text-text-secondary leading-relaxed">
                  I use visual identity to give brands a recognizable system. I use UI/UX to make digital experiences clear and usable. I use strategy to make sure every design decision supports the business, not just the screen.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-text-secondary leading-relaxed">
                  Titles don&apos;t build brands. <span className="text-dark font-medium">Decisions do.</span> My role is to help you make the right ones — with clarity, honesty, and a focus on results.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <p className="font-display text-2xl md:text-3xl text-accent italic mt-4 leading-tight">
                  I design trust.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Philosophy pillars ── */}
      <Section bg="bg-surface">
        <Reveal>
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-14">
            How I see <span className="italic font-normal text-text-secondary">the work.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Think before you design',
              text: 'Every project starts with questions, not tools. Understanding the problem deeply is the only way to create solutions that actually work.',
            },
            {
              title: 'Remove, then refine',
              text: 'Good design is not about adding more. It is about removing everything that does not serve the goal — until only what matters remains.',
            },
            {
              title: 'Partner, not provider',
              text: 'I work alongside founders and teams as a collaborator. Honesty, transparency, and shared ownership create the best results.',
            },
            {
              title: 'Outcomes over outputs',
              text: 'A beautiful logo means nothing if the brand is not positioned correctly. I focus on results — clarity, trust, and real business impact.',
            },
            {
              title: 'Long-term over short-term',
              text: 'Quick fixes fade. I build brand systems and design solutions that grow with the business and stay relevant for years.',
            },
            {
              title: 'Human-centered always',
              text: 'Brands exist for people. Every decision — from positioning to pixel — should serve the humans who interact with the brand.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="bg-bg border border-border-light rounded-xl p-6 md:p-8 h-full hover:border-accent/30 transition-colors duration-300">
                <h3 className="text-base font-semibold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Fit & Partnership ── */}
      <Section bg="bg-surface">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <SectionLabel>Fit</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-14">
              I Work With People
              <br />
              <span className="italic text-accent">Who Get It.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-10">
              <Reveal delay={100}>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4">I don&apos;t work with everyone — and that&apos;s intentional.</h3>
                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                    <p>
                      I work with founders and businesses who understand that design is not decoration. It is a decision, a system, and a way to create clarity and drive results.
                    </p>
                    <p>
                      People who know that cheap design is expensive in the long run. Because unclear brands do not just look bad — they lose trust, time, and opportunity.
                    </p>
                    <p>
                      Businesses that see branding as an investment, not a cost. Founders who understand the why behind what they build. Teams that value clarity over noise, and strategy over trends.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4">Built on Clarity, Not Guesswork</h3>
                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                    <p>
                      Great design is not about adding more. It is about choosing what matters — and removing what does not.
                    </p>
                    <p>
                      The smallest decisions shape how people see you, trust you, and remember you.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-4">Simple, Honest Process</h3>
                  <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    <p>Clear scope.</p>
                    <p>Clear timeline.</p>
                    <p>No surprises.</p>
                    <p>
                      We work fast, communicate clearly, and stay focused on what moves the brand forward.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
              <Reveal delay={250}>
                <p>Unlike most freelancers, I do not treat your project as just another task.</p>
              </Reveal>
              <Reveal delay={300}>
                <p>I work as a partner — fully focused on what we are building and why it matters.</p>
              </Reveal>
              <Reveal delay={350}>
                <p>Most of the industry is repeating itself. Same styles. Same shortcuts. Same idea of branding reduced to a logo.</p>
              </Reveal>
              <Reveal delay={400}>
                <p>But branding is not what you add. It is what you decide.</p>
              </Reveal>
              <Reveal delay={450}>
                <p>It is how your business is understood. How it earns trust. How it stands out — without trying to be loud.</p>
              </Reveal>
              <Reveal delay={500}>
                <p>That is why cheap design is expensive. Because when there is no clarity, everything else suffers.</p>
              </Reveal>
              <Reveal delay={550}>
                <p>I do not outsource the thinking. I do not rush through decisions. And I do not sell unlimited work with limited value.</p>
              </Reveal>
              <Reveal delay={600}>
                <p>I focus on doing the right work — properly.</p>
              </Reveal>
              <Reveal delay={650}>
                <p className="font-semibold text-dark">
                  If you are building something serious, and you understand the value behind it, we will work well together.
                </p>
              </Reveal>
              <Reveal delay={700}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200 mt-4"
                >
                  Book a call
                </Link>
                <p className="mt-3 text-xs text-text-muted">
                  No commitment. Just clarity.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Numbers ── */}
      <Section>
        <Reveal>
          <SectionLabel>By the numbers</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
          {[
            { num: '8+', label: 'Years of experience' },
            { num: '60+', label: 'Brands helped' },
            { num: '3', label: 'Countries worked in' },
            { num: '20+', label: 'Projects completed' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-accent">{stat.num}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Personal ── */}
      <Section bg="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal>
            <SectionLabel>Beyond the work</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-6">
              A few things
              <br />
              <span className="italic font-normal text-text-secondary">about me.</span>
            </h2>
            <div className="space-y-5">
              <p className="text-text-secondary leading-relaxed">
                I am based in Agadir, Morocco. I speak Tamazight (native), Arabic (fluent), English (very good), and French (good).
              </p>
              <p className="text-text-secondary leading-relaxed">
                I am self-taught. My learning journey has been shaped by online courses, tutorials, and most importantly — real-world projects and hands-on experience.
              </p>
              <p className="text-text-secondary leading-relaxed">
                I believe the best designers are curious people first. I spend time understanding business, psychology, and communication — not just design tools.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionLabel>Languages</SectionLabel>
            <div className="space-y-0 border-t border-border mb-10">
              {[
                { lang: 'Tamazight', level: 'Native' },
                { lang: 'Arabic', level: 'Fluent' },
                { lang: 'English', level: 'Very Good' },
                { lang: 'French', level: 'Good' },
              ].map((l) => (
                <div key={l.lang} className="flex items-center justify-between py-3.5 border-b border-border-light">
                  <span className="text-sm text-dark font-medium">{l.lang}</span>
                  <span className="text-xs text-text-muted">{l.level}</span>
                </div>
              ))}
            </div>

            <SectionLabel>Social</SectionLabel>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: 'Behance', href: 'https://behance.net/annafy4design' },
                { label: 'Instagram', href: 'https://instagram.com/annafy4design' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-el-hanafi' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-9 px-4 text-xs font-medium text-text-secondary bg-bg rounded-lg border border-border-light hover:border-accent/40 transition-colors"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-dark leading-[1.05] mb-6">
              Want to work <span className="italic text-accent">together?</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-md mx-auto">
              I am always open to interesting projects and meaningful collaborations.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-8 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
              >
                Start a project
              </Link>
              <Link
                to="/works"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-border text-dark/80 bg-surface hover:text-dark hover:border-text-muted transition-colors duration-200"
              >
                Get clarity
              </Link>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              No commitment. Just clarity.
            </p>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
