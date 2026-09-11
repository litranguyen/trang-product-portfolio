import Link from "next/link";

const links = [
  { href: "/#work", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

/**
 * Server component. These are all in-page hash links, so there is no active
 * state to track — `aria-current` would compare a pathname against a hash and
 * never match. Section position is conveyed by the numbered section heads.
 */
export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="site-header-brand">
        <span className="site-header-mark">TN</span>

        <span className="site-header-name">
          <strong>Trang Nguyen</strong>
        </span>
      </Link>

      <nav className="site-header-nav" aria-label="Primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="site-header-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
