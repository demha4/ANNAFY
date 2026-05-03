import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Reveal, Section, SectionLabel } from '../components/UI';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/works" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="bg-dark text-text">
      <SEO
        title={`${project.title} — Branding Case Study | Annafy Morocco`}
        description={`Case study: ${project.title}. ${project.overview.substring(0, 140)}... Brand Designer & UI/UX Consultant based in Agadir, Morocco.`}
      />

      {/* ── Hero ── */}
      <section className="bg-dark pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-dark transition-colors duration-200 mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All projects
            </Link>
          </Reveal>
          <Reveal delay={50}>
            <SectionLabel>{project.category}</SectionLabel>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-dark leading-[1.02]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              {project.overview}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border-light pt-8">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Client</p>
                <p className="text-sm font-medium text-dark">{project.client}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Year</p>
                <p className="text-sm font-medium text-dark">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Services</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.services.map((s) => (
                    <span key={s} className="inline-flex items-center h-7 px-3 text-[11px] font-medium text-text-secondary bg-surface rounded-md border border-border-light">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Black visual panel ── */}
      <section className="bg-dark pb-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-border-light bg-black aspect-[16/9] flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-xs font-medium text-accent uppercase tracking-[0.15em] mb-4">Case Study Preview</p>
                <h2 className="font-display text-3xl md:text-5xl font-medium text-dark leading-[1.05]">
                  Working on the case.
                </h2>
                <p className="text-text-secondary mt-4 max-w-xl mx-auto">
                  The project is real. The full visual breakdown is being prepared.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section bg="bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05]">
                What needed
                <br />
                <span className="italic font-normal text-accent">to change.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <p className="text-text-secondary leading-relaxed text-[15px]">{project.problem}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section bg="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>The Thinking</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05]">
                How I
                <br />
                <span className="italic font-normal text-accent">approached it.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-border">
              {project.thinking.map((step, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 py-5 border-b border-border-light">
                    <span className="text-xs text-text-muted font-medium mt-0.5 shrink-0 w-5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>The Solution</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05]">
                What I
                <br />
                <span className="italic font-normal text-accent">delivered.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-0 border-t border-border-light">
              {project.solution.map((step, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 py-5 border-b border-border-light">
                    <span className="shrink-0 w-5 flex justify-center mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel>The Outcome</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-dark leading-[1.05]">
                The
                <br />
                <span className="italic font-normal text-accent">impact.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <p className="text-text-secondary leading-relaxed text-[15px]">{project.outcome}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {project.testimonial && (
        <Section bg="bg-dark">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-display text-3xl md:text-4xl italic text-dark leading-tight mb-6">
                “{project.testimonial.text}”
              </p>
              <div>
                <p className="text-sm font-semibold text-dark">{project.testimonial.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{project.testimonial.role}</p>
              </div>
            </div>
          </Reveal>
        </Section>
      )}

      <section className="bg-dark border-t border-border-light py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <SectionLabel>Next project</SectionLabel>
            <Link to={`/work/${nextProject.slug}`} className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
              <h3 className="font-display text-3xl md:text-4xl font-medium text-dark group-hover:text-accent transition-colors duration-200">
                {nextProject.title}
                <span className="inline-block ml-3 text-text-muted group-hover:translate-x-2 transition-transform duration-200">→</span>
              </h3>
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider">{nextProject.category}</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
