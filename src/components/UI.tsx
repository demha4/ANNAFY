import { useEffect, useRef, useState, type ReactNode } from 'react';

export function useInView(threshold = 0.15) {
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

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

export function Section({ id, children, className = '', bg = 'bg-bg' }: { id?: string; children: ReactNode; className?: string; bg?: string }) {
  return (
    <section id={id} className={`${bg} py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
      {children}
    </p>
  );
}

export function PageHero({ label, title, titleAccent, description }: { label: string; title: string; titleAccent?: string; description?: string }) {
  return (
    <section className="bg-bg pt-28 pb-14 md:pt-40 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={50}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-dark leading-[1.02] max-w-4xl">
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="italic font-normal text-accent">{titleAccent}</span>
              </>
            )}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={100}>
            <p className="mt-7 md:mt-8 text-base md:text-xl text-text-secondary leading-relaxed max-w-xl">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
