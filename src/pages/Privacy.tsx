import { useEffect } from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 md:pb-28">
      <SEO
        title="Privacy Policy — Annafy | Brand Designer Morocco"
        description="Privacy policy for Annafy (Ahmed EL Hanafi), Brand Designer & UI/UX Consultant based in Agadir, Morocco. Learn how your data is collected, used, and protected."
      />
      <div className="max-w-[720px] mx-auto px-6 md:px-8">
        <p className="text-xs font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-dark leading-tight tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-text-muted mb-12">
          Last updated: January 2025
        </p>

        <div className="space-y-10">
          <Section title="Introduction">
            <p>
              This Privacy Policy explains how Annafy (Ahmed EL Hanafi), operating as a freelance Brand Designer & Consultant based in Morocco, collects, uses, and protects your personal information when you visit this website or engage with my services.
            </p>
            <p>
              I respect your privacy and am committed to handling your data with care and transparency. This policy is written in plain language — no legal jargon.
            </p>
          </Section>

          <Section title="What I Collect">
            <p>I may collect the following information when you contact me or use this website:</p>
            <ul>
              <li>Your name and email address (when you reach out)</li>
              <li>Any information you share in messages or project inquiries</li>
              <li>Basic analytics data (pages visited, time on site) through privacy-respecting tools</li>
            </ul>
            <p>I do not collect sensitive personal data, and I do not use cookies for tracking or advertising.</p>
          </Section>

          <Section title="How I Use Your Information">
            <p>Your information is used only to:</p>
            <ul>
              <li>Respond to your inquiries and messages</li>
              <li>Discuss potential projects and collaborations</li>
              <li>Improve the website experience based on general usage patterns</li>
            </ul>
            <p>I will never sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </Section>

          <Section title="Data Storage & Security">
            <p>
              Your data is stored securely and accessed only by me. I use reasonable measures to protect your information from unauthorized access, alteration, or loss.
            </p>
            <p>
              Email communications are handled through standard email providers with industry-standard security practices.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              This website may use minimal third-party services for hosting and analytics. These services have their own privacy policies, and I choose providers that respect user privacy.
            </p>
            <p>I do not use social media tracking pixels or retargeting tools.</p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>Request access to any personal data I hold about you</li>
              <li>Ask me to correct or delete your information</li>
              <li>Withdraw consent for communication at any time</li>
            </ul>
            <p>
              Simply reach out to me at hello@annafy.com and I will respond promptly.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              I may update this policy from time to time. Any changes will be reflected on this page with an updated date. Nothing complicated — just transparency.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              If you have any questions about this Privacy Policy, feel free to reach out:
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
