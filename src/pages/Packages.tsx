import { useEffect, useRef, useState, type ReactNode } from 'react';
import SEO from '../components/SEO';

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

/* ─── Offers ─── */
const offers = [
  {
    id: 'audit',
    title: 'Brand Audit',
    subtitle: 'Find out what is broken.',
    problem: 'Your brand is not converting. You do not know why.',
    outcome: 'A clear roadmap showing exactly what to fix and in what order.',
    starting: '$500',
  },
  {
    id: 'system',
    title: 'Conversion System',
    subtitle: 'Fix perception. Improve conversion.',
    problem: 'You want to launch with excellence, or you are already selling but know you should be making more.',
    outcome: 'A brand that looks as good as it performs — and converts visitors into buyers.',
    starting: '$2,500',
    featured: true,
  },
  {
    id: 'repositioning',
    title: 'Brand Repositioning',
    subtitle: 'Complete transformation.',
    problem: 'Your brand no longer matches where you are going.',
    outcome: 'A brand that positions you at the top of your market.',
    starting: '$5,000',
  },
];

const businessStages = [
  'Pre-launch (high-intent)',
  'MVP ready / Beta',
  'Launched & making sales',
  'Established & scaling',
];

const revenueRanges = [
  'Pre-revenue',
  '$0 — $50K / year',
  '$50K — $250K / year',
  '$250K — $1M / year',
  '$1M+ / year',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 — $2,500',
  '$2,500 — $5,000',
  '$5,000 — $10,000',
  '$10,000+',
];

/* ═══════════════════════════════════════════════════
   PACKAGES PAGE
═══════════════════════════════════════════════════ */
export default function Packages() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    businessStage: '',
    revenue: '',
    budget: '',
    project: '',
  });
  const [selectedOffer, setSelectedOffer] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Request — ${form.name || 'New inquiry'}`);
    const body = encodeURIComponent(
      `Hi Annafy,\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company || '—'}\n` +
      `Website: ${form.website || '—'}\n\n` +
      `Business Stage: ${form.businessStage || '—'}\n` +
      `Revenue: ${form.revenue || '—'}\n` +
      `Budget: ${form.budget || '—'}\n` +
      `Offer Interest: ${selectedOffer || '—'}\n\n` +
      `Project details:\n${form.project || '—'}\n`
    );
    window.location.href = `mailto:annafy4design@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main>
      <SEO
        title="Offers — Brand Clarity & Conversion | Annafy"
        description="Brand Audit, Conversion System, and Repositioning for serious brands. Fix perception, clarify message, improve conversion. Based in Agadir, Morocco."
      />
      
      {/* ── Hero ─ */}
      <section className="bg-bg pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
              Ways to Work
            </p>
          </Reveal>
          <Reveal delay={50}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-dark leading-[1.02] max-w-3xl">
              Three ways to fix
              <br />
              <span className="italic text-accent">what is not working.</span>
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              Not packages. Not deliverables. Three paths to the same outcome: a brand that converts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Offers ── */}
      <section className="bg-bg border-t border-border-light py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {offers.map((offer, i) => (
              <Reveal key={offer.id} delay={i * 100}>
                <div
                  onClick={() => { setSelectedOffer(offer.id); scrollToForm(); }}
                  className={`relative flex flex-col h-full rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    offer.featured
                      ? 'bg-accent text-white border border-accent scale-105 shadow-2xl'
                      : 'bg-surface text-dark border border-border hover:border-accent/30 hover:shadow-lg'
                  }`}
                >
                  {offer.featured && (
                    <span className="inline-flex items-center self-start h-6 px-3 text-[10px] font-semibold uppercase tracking-wider bg-accent text-white rounded-full mb-4">
                      Most Effective
                    </span>
                  )}

                  <div className="mb-6">
                    <h3 className={`font-display text-2xl font-medium leading-tight mb-2 ${offer.featured ? 'text-white' : 'text-dark'}`}>
                      {offer.title}
                    </h3>
                    <p className={`text-sm ${offer.featured ? 'text-white/60' : 'text-text-muted'}`}>
                      {offer.subtitle}
                    </p>
                  </div>

                  <div className={`pt-6 border-t mb-6 ${offer.featured ? 'border-white/10' : 'border-border-light'}`}>
                    <p className={`text-xs uppercase tracking-wider mb-3 ${offer.featured ? 'text-white/40' : 'text-text-muted'}`}>
                      The Problem
                    </p>
                    <p className={`text-sm leading-relaxed ${offer.featured ? 'text-white/80' : 'text-text-secondary'}`}>
                      {offer.problem}
                    </p>
                  </div>

                  <div className={`pt-6 border-t mb-6 ${offer.featured ? 'border-white/10' : 'border-border-light'}`}>
                    <p className={`text-xs uppercase tracking-wider mb-3 ${offer.featured ? 'text-white/40' : 'text-text-muted'}`}>
                      The Outcome
                    </p>
                    <p className={`text-sm leading-relaxed ${offer.featured ? 'text-white/80' : 'text-text-secondary'}`}>
                      {offer.outcome}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className={`text-xs uppercase tracking-wider mb-2 ${offer.featured ? 'text-white/40' : 'text-text-muted'}`}>
                      Starting from
                    </p>
                    <p className={`font-display text-3xl font-medium ${offer.featured ? 'text-white' : 'text-dark'}`}>
                      {offer.starting}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ── */}
      <section className="bg-bg py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <Reveal>
            <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
              Who This Is For
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-14">
              I work with brands
              <br />
              <span className="text-text-secondary italic font-normal">that are ready.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Reveal delay={100}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">You value depth over speed.</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Whether you are an established brand or a high-intent startup, you know that doing it right the first time is the only way to build lasting trust.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">You know your brand is your bridge.</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Your product or service is excellent. You need a brand identity and digital presence that communicates that excellence clearly to the right people.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">You are ready to invest in clarity.</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    You understand that strategic design is an investment, not a cost. You are ready to get the best work possible to achieve the best results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">You want a strategic partner.</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    You do not want a pixel-pusher. You want a partner who thinks, challenges your assumptions, and cares as much about your conversion as you do.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote-form" className="bg-surface border-t border-border-light py-20 md:py-28">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">
          <Reveal>
            <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
              Next Step
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-6">
              Tell me about
              <br />
              <span className="text-text-secondary italic font-normal">your vision.</span>
            </h2>
            <p className="text-text-secondary max-w-xl mb-10">
              I work with serious founders and businesses ready to level up. If we are a fit, I will respond within 24 hours. If not, I will point you in the right direction.
            </p>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="bg-bg border border-border rounded-2xl p-6 md:p-10 space-y-8"
            >
              {/* Contact */}
              <div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-5">
                  01 — Contact
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field
                    label="Name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                  <Field
                    label="Company"
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                  />
                  <Field
                    label="Website"
                    type="text"
                    placeholder="yourcompany.com"
                    value={form.website}
                    onChange={(v) => setForm({ ...form, website: v })}
                  />
                </div>
              </div>

              {/* Business */}
              <div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-5">
                  02 — Your Business
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Stage"
                    placeholder="Select..."
                    value={form.businessStage}
                    onChange={(v) => setForm({ ...form, businessStage: v })}
                    options={businessStages}
                  />
                  <SelectField
                    label="Revenue"
                    placeholder="Select..."
                    value={form.revenue}
                    onChange={(v) => setForm({ ...form, revenue: v })}
                    options={revenueRanges}
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-5">
                  03 — Budget
                </p>
                <SelectField
                  label="Investment range"
                  placeholder="Select..."
                  value={form.budget}
                  onChange={(v) => setForm({ ...form, budget: v })}
                  options={budgetRanges}
                />
              </div>

              {/* Project */}
              <div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-5">
                  04 — What is the challenge?
                </p>
                <Field
                  label=""
                  type="textarea"
                  placeholder="What are you building? What is not working? What does success look like?"
                  value={form.project}
                  onChange={(v) => setForm({ ...form, project: v })}
                  required
                />
              </div>

              {/* Privacy */}
              <div className="bg-surface border border-border-light rounded-xl p-4">
                <p className="text-xs text-text-muted leading-relaxed">
                  <span className="font-medium text-text-secondary">Privacy:</span> Everything you share stays between us. I do not use your information for anything except responding to your request.
                </p>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center h-14 px-8 bg-accent text-white text-base font-medium rounded-full hover:bg-accent-hover transition-colors duration-200"
                >
                  {submitted ? 'Opening your email…' : 'Send Request'}
                </button>
                <p className="text-xs text-text-muted text-center mt-4">
                  I respond within 24 hours. No spam. No automated replies.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* ─── Form Field ─── */
function Field({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const baseClass = "w-full bg-surface border border-border rounded-xl px-4 text-sm text-dark placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200";

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-dark mb-2">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`${baseClass} py-3 resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={`${baseClass} h-12`}
        />
      )}
    </div>
  );
}

/* ─── Custom Select Field ─── */
function SelectField({
  label,
  placeholder,
  value,
  onChange,
  options,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-12 bg-surface border border-border rounded-xl px-4 pr-10 text-sm appearance-none focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 cursor-pointer ${
            value ? 'text-dark' : 'text-text-muted'
          }`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-dark">{opt}</option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
