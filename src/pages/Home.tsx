import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { projects as projectData } from '../data/projects';

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Section Wrapper ─── */
function Section({ id, children, className = '', bg = 'bg-bg' }: { id?: string; children: ReactNode; className?: string; bg?: string }) {
  return (
    <section id={id} className={`${bg} py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
      {children}
    </p>
  );
}

/* ═══════════════════════════════════════════════════
   HERO — centered
═══════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center bg-bg pt-20 hero-glow">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14 md:py-0 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border bg-surface text-sm text-text-secondary mb-6 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-30 animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse-dot" />
            </span>
            I take 2 projects/month
          </div>
          <h1 className="font-display text-[3.25rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium text-dark leading-[1.02] animate-fade-up-delay-1">
            I help brands move
            <br />
            from <span data-word="confusion" className="word-confusion italic font-normal text-accent">confusion</span>
            <br />
            to <span data-word="clarity." className="word-clarity italic font-normal text-accent">clarity.</span>
          </h1>
          <p className="mt-7 text-base md:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto animate-fade-up-delay-2">
            Hi, I&apos;m Annafy. I combine strategy, design, and real-world thinking to build brands that are clear, effective, and human.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up-delay-3">
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-7 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-7 rounded-full border border-border text-text-secondary hover:text-dark hover:border-text-muted transition-colors duration-200"
            >
              Get clarity
            </a>
          </div>
          <p className="mt-4 text-xs text-text-muted animate-fade-up-delay-3">
            No commitment. Just clarity.
          </p>
        </div>

        <div className="mt-14 md:mt-28 grid grid-cols-2 gap-8 max-w-xl mx-auto border-t border-border-light pt-8 md:pt-10">
          {[
            { num: '8+', label: 'Years of experience' },
            { num: '60+', label: 'Brands helped' },
          ].map((stat, i) => (
            <div key={stat.label} className={`animate-fade-up-delay-3 ${i === 0 ? 'text-left' : 'text-right'}`}>
              <p className="font-display text-3xl md:text-6xl font-medium text-dark">{stat.num}</p>
              <p className="text-[11px] sm:text-sm text-text-muted mt-1.5 md:mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   STORYLINE — CLARITY
═══════════════════════════════════════════════════ */
function FocusClarity() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const snapTimerRef = useRef<number | null>(null);
  const isSnappingRef = useRef(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const timeline = [
    {
      label: 'Noise',
      lines: [<>In a world that never stops <span className="text-accent">talking,</span></>, <>everyone is trying to be heard.</>],
    },
    {
      label: 'Repetition',
      lines: [<>Same ideas. Same <span className="text-accent">patterns.</span></>, <>The same mistakes… just louder.</>],
    },
    {
      label: 'Silence',
      lines: [<>When you try to say <span className="text-accent">everything,</span></>, <>you end up saying very little.</>],
    },
    {
      label: 'Confusion',
      lines: [<>More doesn't create <span className="text-accent">clarity.</span></>, <>It creates confusion.</>],
    },
    {
      label: 'Step Back',
      lines: [<>But some people <span className="text-accent">step back.</span></>, <>They don't get lost in the noise.</>],
    },
    {
      label: 'Focus',
      lines: [<>They focus on what truly <span className="text-accent">matters—</span></>, <>the value at the core.</>],
    },
    {
      label: 'Choice',
      lines: [<>Not by adding <span className="text-accent">more,</span></>, <>but by choosing better.</>],
    },
    {
      label: 'Clarity',
      lines: [<>That's what makes a brand <span className="text-accent">clear.</span></>, <>And clarity is what makes it unforgettable.</>],
    },
    {
      label: 'Difference',
      lines: [<>That's what makes the <span className="text-accent">difference.</span></>],
    },
  ];

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollDistance = wrapper.offsetHeight - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), Math.max(scrollDistance, 1));
      const nextProgress = passed / Math.max(scrollDistance, 1);
      const nextStep = Math.min(
        timeline.length - 1,
        Math.round(nextProgress * (timeline.length - 1))
      );

      setProgress(nextProgress);
      setActiveStep(nextStep);

      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);

      const wrapperTop = window.scrollY + rect.top;
      const wrapperBottom = wrapperTop + scrollDistance;
      const insideStory = window.scrollY >= wrapperTop && window.scrollY <= wrapperBottom;

      if (insideStory && !isSnappingRef.current) {
        snapTimerRef.current = window.setTimeout(() => {
          const targetStep = Math.min(
            timeline.length - 1,
            Math.round(nextProgress * (timeline.length - 1))
          );
          const stepDistance = scrollDistance / Math.max(timeline.length - 1, 1);
          const targetY = wrapperTop + targetStep * stepDistance;

          if (Math.abs(window.scrollY - targetY) > 8) {
            isSnappingRef.current = true;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
            window.setTimeout(() => {
              isSnappingRef.current = false;
            }, 520);
          }
        }, 140);
      }
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      if (snapTimerRef.current) window.clearTimeout(snapTimerRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [timeline.length]);

  const activeItem = timeline[activeStep];

  const skipIntro = () => {
    const wrapper = wrapperRef.current;
    if (wrapper) {
      window.scrollTo({
        top: window.scrollY + wrapper.getBoundingClientRect().bottom - window.innerHeight + 1,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative bg-bg"
      style={{ height: `${timeline.length * 100}svh` }}
    >
      <section className="sticky top-0 h-[100svh] overflow-hidden bg-bg text-text">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-accent),transparent_85%),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-border-light" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border-light" />

        <div className="relative flex h-[100svh] items-center">
          <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[100svh]">
              <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted mb-5 text-left text-left">
                  The Philosophy
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.04] text-dark max-w-md text-left">
                  Clarity is a choice.
                </h2>
                <div className="w-16 h-px bg-accent mt-6" />
              </div>

              <div className="lg:col-span-8 lg:grid lg:grid-cols-[12px_1fr] lg:gap-16 lg:items-center">
                <div className="hidden lg:block relative h-[420px] md:h-[520px]">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border-light" />
                  <motion.div
                    className="absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-accent rounded-full"
                    style={{ height: `${progress * 100}%` }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                </div>

                <div className="relative min-h-[320px] md:min-h-[420px] flex items-center">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-3xl"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-text-muted mb-5 text-left">
                      {String(activeStep + 1).padStart(2, '0')} / {String(timeline.length).padStart(2, '0')} · {activeItem.label}
                    </p>
                    <div className="space-y-3 md:space-y-4">
                      {activeItem.lines.map((line, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium leading-[1.02] text-dark text-left"
                        >
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Skip Button */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
          <button
            onClick={skipIntro}
            className="group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          >
             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted group-hover:text-accent transition-colors">
              Skip Story
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-bg/80 backdrop-blur shadow-sm group-hover:border-accent/30 group-hover:text-accent transition-all">
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════════ */
function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionLabel>About</SectionLabel>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05]">
            I&apos;m Annafy.
            <br />
            <span className="text-text-secondary italic font-normal">Just a person who loves building brands.</span>
          </h2>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={100}>
            <p className="text-text-secondary leading-relaxed">
              I&apos;m Ahmed EL Hanafi — most people call me Annafy. A Brand Designer and Consultant based in Morocco. I have been doing this for over 8 years, and I still learn something new every day.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-text-secondary leading-relaxed">
              I do not have a big team or a fancy office. I have a laptop, a lot of curiosity, and a genuine interest in helping founders and businesses turn unclear ideas into brands that people understand and trust.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-text-secondary leading-relaxed">
              I work like a partner, not a service provider. Friendly, honest, and direct. I care about long-term value, not quick visuals. And I always try to keep things simple.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <p className="font-display text-2xl md:text-3xl italic mt-4 leading-tight text-dark text-dark">
              That is all there is to it.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 group mt-4"
            >
              More about me
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════
   SELECTED WORK
═══════════════════════════════════════════════════ */
function Work() {
  const workCards = [
    {
      ...projectData[0],
      title: 'Case study coming soon',
      category: 'Brand Strategy & Identity',
      description: 'I am preparing a clearer breakdown of the problem, thinking, and impact behind this brand identity work.',
      services: ['Brand Strategy', 'Visual Identity', 'Direction'],
      link: '/works',
    },
    {
      ...projectData[1],
      title: 'Work in progress',
      category: 'UI/UX & Digital Experience',
      description: 'A digital experience case study is being shaped with the right context, process, and results.',
      services: ['UI/UX Design', 'Web Design', 'Design System'],
      link: '/works',
    },
    {
      ...projectData[2],
      title: 'Your brand could be next',
      category: 'New Collaboration',
      description: 'Have a brand challenge worth solving? Let us turn it into a clear story, a strong system, and a case worth sharing.',
      services: ['Branding', 'UI/UX', 'Consulting'],
      link: '/contact',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = workCards[activeIndex];
  const dragStartRef = useRef(0);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? workCards.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === workCards.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section id="work" bg="bg-bg">
      <Reveal>
        <SectionLabel>Selected Work</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mb-8 md:mb-14">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-2 md:mb-4">
              Problems solved, not just
              <br />
              <span className="text-text-secondary italic font-normal">things designed.</span>
            </h2>
            <p className="hidden md:block text-sm md:text-base text-text-secondary max-w-lg">
              Selected work is being shaped into clearer case studies. For now, here is the direction.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors duration-200"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-xs text-text-muted min-w-[52px] text-center">
              {String(activeIndex + 1).padStart(2, '0')} / {String(workCards.length).padStart(2, '0')}
            </div>
            <button
              onClick={goToNext}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-colors duration-200"
              aria-label="Next project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>

      <div
        onTouchStart={(e) => {
          const touch = e.touches[0];
          dragStartRef.current = touch.clientX;
        }}
        onTouchEnd={(e) => {
          const touch = e.changedTouches[0];
          const diff = dragStartRef.current - touch.clientX;
          if (Math.abs(diff) > 50) {
            if (diff > 0) goToNext();
            else goToPrev();
          }
        }}
        onMouseDown={(e) => {
          const startX = e.clientX;
          const handleMouseUp = (ev: MouseEvent) => {
            const diff = startX - ev.clientX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) goToNext();
              else goToPrev();
            }
            window.removeEventListener('mouseup', handleMouseUp);
          };
          window.addEventListener('mouseup', handleMouseUp);
        }}
      >
        <Reveal key={activeProject.slug} delay={100}>
          <Link to={activeProject.link} className="group block">
            <div className="relative h-[420px] sm:h-[480px] md:h-auto overflow-hidden rounded-2xl border border-border bg-black hover:border-accent/30 transition-colors duration-300">
              <div className="h-full md:h-auto md:aspect-[21/10] overflow-hidden bg-black">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8 lg:p-10">
                <div className="max-w-3xl">
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl font-medium text-white leading-[1.03] md:leading-[1.02] group-hover:text-accent transition-colors duration-200">
                      {activeProject.title}
                    </h3>
                    <p className="hidden md:block text-sm md:text-base text-white/65 mt-3 max-w-2xl leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="mt-6 sm:mt-8 flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
              {workCards.map((project, index) => (
              <button
                key={project.slug}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                  index === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-text-muted'
                }`}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>

          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 group"
          >
            View all projects
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <p className="mt-3 text-xs text-text-muted sm:hidden">
          Swipe to explore
        </p>
      </Reveal>
    </Section>
  );
}

/* ─── Services ─── */
const services = [
  {
    num: '01',
    title: 'Brand Strategy',
    description: 'Define who you are, who you serve, and why it matters. Build a foundation that makes every decision easier and every message clearer.',
  },
  {
    num: '02',
    title: 'Visual Identity',
    description: 'Create a visual language that feels like you — logo, typography, color, and system. Consistent, memorable, and built to last.',
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'Design experiences people actually enjoy using. Clear interfaces, intuitive flows, and interactions that serve a purpose.',
  },
  {
    num: '04',
    title: 'Digital Experiences',
    description: 'Websites, landing pages, and digital products that communicate value, build trust, and convert visitors into believers.',
  },
  {
    num: '05',
    title: 'Social Media Direction',
    description: 'Beyond posting. I shape what your brand says, how it shows up, and how it stays consistent — so your social presence feels intentional, not reactive.',
  },
  {
    num: '06',
    title: 'Design Review & Direction',
    description: 'Honest, expert feedback on existing brand, UI, or design work. I help you see what is working, what is not, and which direction to take next.',
  },
  {
    num: '07',
    title: 'Consulting',
    description: "Fresh eyes on your brand. I help teams identify what's not working, find clarity, and make better creative decisions.",
  },
];

function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="services" bg="bg-surface">
      <Reveal>
        <SectionLabel>What I Do</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05]">
          Outcomes, not
          <br />
          <span className="text-text-secondary italic font-normal">deliverables.</span>
        </h2>
      </Reveal>

      <div className="space-y-0 border-t border-border mt-10 md:mt-14">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={service.num} delay={i * 60}>
              <div className="md:hidden border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-text-muted font-medium">{service.num}</span>
                    <h3 className="text-base font-semibold text-dark">{service.title}</h3>
                  </div>
                  <svg
                    className={`w-4 h-4 text-text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="hidden md:grid grid-cols-1 md:grid-cols-12 gap-8 py-8 border-b border-border group">
                <div className="md:col-span-1">
                  <span className="text-xs text-text-muted font-medium">{service.num}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold text-dark group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <div className="mt-12 flex items-center gap-3">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200 group"
          >
            See packages & pricing
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}

/* ─── Approach ─── */
const steps = [
  {
    num: '01',
    title: 'Understand',
    description: 'Listen deeply. Ask the right questions. Understand the brand, the audience, and the real problem before anything else.',
  },
  {
    num: '02',
    title: 'Simplify',
    description: 'Remove the noise. Find the core truth. Strip away complexity until the direction is clear and focused.',
  },
  {
    num: '03',
    title: 'Design',
    description: 'Create with intention. Every element serves a purpose. Build solutions that are clear, effective, and human.',
  },
  {
    num: '04',
    title: 'Refine',
    description: 'Polish relentlessly. Test, iterate, and improve until every detail feels right and delivers real results.',
  },
];

function Approach() {
  return (
    <Section id="approach">
      <Reveal>
        <SectionLabel>How I Work</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-4">
          Design is not how it looks.
          <br />
          <span className="text-text-secondary italic font-normal text-accent">It&apos;s how it works.</span>
        </h2>
        <p className="text-sm md:text-base text-text-secondary max-w-lg mb-10 md:mb-14">
          A clear process, every time. No surprises. No unnecessary steps. A focused approach that keeps things simple and effective.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 100}>
            <div className="bg-surface border border-border rounded-xl p-6 md:p-8 h-full hover:border-accent/30 transition-colors duration-300">
              <span className="text-xs text-text-muted font-medium">{step.num}</span>
              <h3 className="text-lg font-semibold text-dark mt-4 mb-3">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    text: "Annafy doesn't just design — he thinks. He helped us see our own brand from a completely new angle. The result was clear, confident, and exactly right.",
    name: 'Youssef B.',
    role: 'Founder, Tech Startup',
    logo: 'YB'
  },
  {
    text: "Working with him felt like working with a partner, not a designer. He challenged our assumptions, simplified our message, and delivered something we're genuinely proud of.",
    name: 'Sara M.',
    role: 'Co-founder, E-commerce Brand',
    logo: 'SM'
  },
  {
    text: "He understood what we needed before we could explain it. The brand he built for us still feels as relevant today as the day he delivered it. That's rare.",
    name: 'Karim T.',
    role: 'Creative Director, Agency',
    logo: 'KT'
  },
];

function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-surface py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <Reveal>
          <SectionLabel>What People Say</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-10 md:mb-14">
            Trust is built
            <br />
            <span className="text-text-secondary italic font-normal text-accent">through results.</span>
          </h2>
        </Reveal>
      </div>

      <div 
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1260] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running' 
          }}
        >
          {displayTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[420px] first:pl-6 md:first:pl-8 last:pr-6 md:last:pr-8"
            >
              <div className="bg-bg border border-border rounded-2xl p-8 md:p-10 h-[280px] md:h-[300px] flex flex-col justify-between">
                <p className="text-base md:text-lg font-medium text-dark leading-relaxed flex-1 mb-6 md:mb-8 text-left">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-lg bg-border-light flex items-center justify-center text-dark font-semibold text-sm">
                    {t.logo}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-dark">{t.role}</p>
                    <p className="text-xs text-text-muted text-left">Client review</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FIT / CTA
═══════════════════════════════════════════════════ */
function WorkWithPeople() {
  return (
    <Section id="contact" bg="bg-bg">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <SectionLabel>Fit</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-14">
            I Work With People
            <br />
            <span className="italic text-accent">Who Get It.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="space-y-8 md:space-y-10">
            <Reveal delay={100}>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">I don&apos;t work with everyone — and that&apos;s intentional.</h3>
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  <p>
                    I work with founders and businesses who understand that design is not decoration. It is a decision, a system, and a way to create clarity and drive results.
                  </p>
                  <p>
                    Cheap design is expensive in the long run. Unclear brands do not just look bad — they lose trust, time, and opportunity.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">Built on Clarity, Not Guesswork</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Great design is not about adding more. It is about choosing what matters — and removing what does not.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <h3 className="text-lg font-semibold text-dark mb-4">Simple, Honest Process</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Clear scope. Clear timeline. No surprises. We stay focused on what moves the brand forward.
                </p>
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
              <p>Branding is not what you add. It is what you decide.</p>
            </Reveal>
            <Reveal delay={400}>
              <p>It is how your business is understood, how it earns trust, and how it stands out without trying to be loud.</p>
            </Reveal>
            <Reveal delay={450}>
              <p className="font-semibold text-dark">
                If you are building something serious, and you understand the value behind it, we will work well together.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="flex flex-col items-start gap-4 mt-4">
                <Link
                  to="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-8 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors duration-200"
                >
                  Book a call
                </Link>
                <p className="mt-3 text-xs text-text-muted">
                  No commitment. Just clarity.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <SEO
        title="Annafy — Brand Designer & UI/UX Consultant in Morocco | Agadir"
        description="Brand Designer & UI/UX Consultant based in Agadir, Morocco. Specializing in branding, logo design, web design, and UI/UX for Moroccan and global brands. 8+ years of experience helping businesses from confusion to clarity."
      />
      <Hero />
      <FocusClarity />
      <Work />
      <Services />
      <About />
      <Approach />
      <Testimonials />
      <WorkWithPeople />
    </main>
  );
}
