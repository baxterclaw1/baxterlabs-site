import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              BaxterLabs
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI consulting and automation for modern businesses.
            </p>
          </div>

          <nav className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 BaxterLabs. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/50">
            Built with intention, not templates.
          </p>
        </div>
      </div>
    </footer>
  );
}
