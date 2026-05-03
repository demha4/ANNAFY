import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, Section, SectionLabel, PageHero } from '../components/UI';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

export default function Works() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const workCards = [
    {
      ...projects[0],
      title: 'Case study coming soon',
      category: 'Brand Strategy & Identity',
      description: 'I am preparing a clearer breakdown of the problem, thinking, and impact behind this brand identity work.',
      services: ['Brand Strategy', 'Visual Identity', 'Direction'],
      link: '/contact',
    },
    {
      ...projects[1],
      title: 'Work in progress',
      category: 'UI/UX & Digital Experience',
      description: 'A digital experience case study is being shaped with the right context, process, and results.',
      services: ['UI/UX Design', 'Web Design', 'Design System'],
      link: '/contact',
    },
    {
      ...projects[2],
      title: 'Why not be the next case?',
      category: 'New Collaboration',
      description: 'If your brand needs clarity, direction, or a better digital experience, this space could tell your story next.',
      services: ['Branding', 'UI/UX', 'Consulting'],
      link: '/contact',
    },
  ];

  return (
    <main>
      <SEO
        title="Portfolio — Branding & UI/UX Projects in Morocco | Annafy"
        description="Explore branding, logo design, and UI/UX projects by Annafy, a Brand Designer based in Agadir, Morocco. Real case studies showing strategy, thinking, and results for Moroccan and international brands."
      />
      <PageHero
        label="Work"
        title="Problems solved,"
        titleAccent="not just things designed."
        description="Every project starts with a question, not a canvas. Here's how strategic thinking drives meaningful outcomes."
      />

      {/* ── Projects Grid ── */}
      <Section>
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {workCards.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <Link
                to={project.link}
                className="group block"
              >
                <div className="relative h-[420px] sm:h-[480px] md:h-auto overflow-hidden rounded-2xl border border-border bg-black hover:border-accent/30 transition-colors duration-300">
                  <div className="h-full md:h-auto md:aspect-[21/10] overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 lg:p-10">
                    <div className="max-w-3xl">
                      <div>
                        <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-[1.03] md:leading-[1.02] group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h2>
                        <p className="hidden md:block text-sm md:text-base text-white/65 mt-3 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>


                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section bg="bg-surface">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <SectionLabel>Interested?</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-6">
              Every brand has a story.
              <br />
              <span className="italic font-normal text-accent">What&apos;s yours?</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-10 max-w-md mx-auto">
              If you have a brand challenge worth solving, I would love to hear about it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
            >
              Start a project
            </Link>
            <p className="mt-4 text-xs text-text-muted">
              No commitment. Just clarity.
            </p>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
