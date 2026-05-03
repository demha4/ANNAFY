import { Link } from 'react-router-dom';

function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="136"
      height="19"
      viewBox="0 0 136 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Annafy Logo"
    >
      <path
        d="M5.967 15.741H15.606L16.983 18.9H21.573L13.203 0H8.37L0 18.9H4.59L5.967 15.741ZM13.878 11.691H7.722L10.8 4.591L13.878 11.691ZM28.134 3.429L41.418 18.9H43.767V0H41.418V15.5L28.134 0H25.785V18.9H28.134V3.429ZM52.407 3.429L65.695 18.9H68.044V0H65.695V15.5L52.407 0H50.058V18.9H52.407V3.429ZM75.06 18.9L77.085 14.607L88.506 14.58L90.506 18.9H93.015L84.159 0H81.432L72.549 18.9H75.06ZM87.453 12.366H78.138L82.809 2.4L87.453 12.366ZM99.873 10.557H111.348V8.343H99.873V2.214H112.695V0H97.524V18.9H99.873V10.557ZM124.686 18.9H127.035V11.232L135.675 0H132.867L125.874 8.964L118.854 0H116.019L124.686 11.232V18.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const pages = [
    { label: 'Work', to: '/works' },
    { label: 'Process', to: '/#approach' },
    { label: 'Pricing', to: '/packages' },
    { label: 'About', to: '/about' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', to: '/contact' },
  ];

  const socials = [
    { label: 'Behance', href: 'https://behance.net/annafy4design' },
    { label: 'Instagram', href: 'https://instagram.com/annafy4design' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/ahmed-el-hanafi' },
    { label: 'WhatsApp', href: 'https://wa.me/212653921306' },
  ];

  return (
    <footer className="bg-surface text-dark border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-14 md:py-20 lg:py-28 flex flex-col">
        {/* Top area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20">
          {/* Left — Logo + statement */}
          <div className="md:col-span-7 flex flex-col justify-between gap-10 md:gap-20">
            <Link to="/" className="w-fit text-dark hover:text-accent transition-colors duration-200" aria-label="Back to home">
              <Logo className="h-5 w-auto" />
            </Link>

            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.05] max-w-2xl text-dark">
                I help brands become
                <br />
                clear, focused, and <span className="text-accent italic font-normal">trusted.</span>
              </h2>
            </div>
          </div>

          {/* Right — Navigation + contact */}
          <div className="md:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12 lg:text-right">
            <nav className="flex flex-col gap-2.5 lg:items-end">
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Pages</p>
              {pages.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-200 w-fit lg:self-end"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="lg:self-start lg:flex lg:flex-col lg:items-end">
              <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2.5">Get in touch</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 lg:justify-end">
                <a
                  href="mailto:annafy4design@gmail.com"
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  annafy4design@gmail.com
                </a>
                <span className="hidden lg:inline text-text-muted/30">|</span>
                <a
                  href="tel:+212653941306"
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  +212 6 53 94 13 06
                </a>
              </div>
              <p className="mt-3 text-xs text-text-muted">
                Agadir, Morocco · Available worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 md:mt-16 pt-5 md:pt-8 border-t border-border-light flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Annafy · All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-text-muted hover:text-accent transition-colors duration-200"
              >
                {social.label}
              </a>
            ))}
            <span className="text-text-muted/40">•</span>
            <Link to="/privacy" className="text-xs text-text-muted hover:text-accent transition-colors duration-200">
              Privacy
            </Link>
            <span className="text-text-muted/40">•</span>
            <Link to="/terms" className="text-xs text-text-muted hover:text-accent transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
