import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and tagline */}
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-semibold tracking-tight text-foreground"
            >
              BaxterLabs
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              AI consulting for modern businesses.
            </p>
          </div>

          {/* Navigation links */}
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

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 BaxterLabs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
