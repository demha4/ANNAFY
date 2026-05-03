import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 md:pb-28">
      <SEO
        title="Terms of Service — Annafy | Brand Designer Morocco"
        description="Terms of service for Annafy (Ahmed EL Hanafi), Brand Designer & UI/UX Consultant based in Agadir, Morocco. Service terms, pricing, and project agreements."
      />
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
          Legal
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium text-dark leading-[1.05] mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: January 2025
        </p>

        <div className="space-y-10">
          <Section title="Overview">
            <p>
              These terms apply to the use of this website and to any professional engagement with Annafy (Ahmed EL Hanafi), a freelance Brand Designer & Consultant based in Morocco.
            </p>
            <p>
              By using this website or engaging my services, you agree to these terms. They are written simply and fairly — for both sides.
            </p>
          </Section>

          <Section title="Services">
            <p>
              I provide brand strategy, visual identity design, UI/UX design, digital experience design, and consulting services. The specific scope, deliverables, timeline, and pricing for each project are agreed upon before work begins — typically through a written proposal or agreement.
            </p>
          </Section>

          <Section title="Project Agreements">
            <p>
              Each project is defined by a clear scope of work agreed upon by both parties. This includes:
            </p>
            <ul>
              <li>Project objectives and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Pricing and payment terms</li>
              <li>Revision rounds and feedback process</li>
            </ul>
            <p>
              Any changes to the agreed scope may affect timeline and cost, and will be discussed openly before proceeding.
            </p>
          </Section>

          <Section title="Payment">
            <p>
              Payment terms are outlined in each project proposal. Typically, a deposit is required before work begins, with the remaining balance due upon completion or at agreed milestones.
            </p>
            <p>
              Late payments may result in paused work until the balance is resolved.
            </p>
          </Section>

          <Section title="Intellectual Property">
            <p>
              Upon full payment, all final deliverables and their intellectual property rights are transferred to the client. Until payment is complete, all work remains the property of Annafy.
            </p>
            <p>
              I reserve the right to showcase completed work in my portfolio unless otherwise agreed in writing.
            </p>
          </Section>

          <Section title="Confidentiality">
            <p>
              I treat all client information, strategies, and project details as confidential. I will not share your business information with third parties without your explicit consent.
            </p>
          </Section>

          <Section title="Website Content">
            <p>
              All content on this website — including text, images, and design — is the property of Annafy and is protected by copyright. You may not reproduce, distribute, or use any content without written permission.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              While I strive for the highest quality in every project, I cannot guarantee specific business outcomes (such as revenue increases or user growth) as a result of design work. My responsibility is to deliver thoughtful, professional work as agreed.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              Either party may end a project engagement with written notice. If the client terminates, payment is due for all work completed up to that point. If I terminate, I will deliver all work completed and refund any payment for undelivered work.
            </p>
          </Section>

          <Section title="Changes to These Terms">
            <p>
              I may update these terms from time to time. Changes will be posted on this page. For active projects, the terms agreed upon at the start of the project will apply.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Reach out:
            </p>
            <p>
              <strong>Email:</strong> hello@annafy.com
              <br />
              <strong>Location:</strong> Morocco
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-dark mb-3">{title}</h2>
      <div className="space-y-3 text-text-secondary text-[15px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:text-dark [&_strong]:font-medium">
        {children}
      </div>
    </div>
  );
}
