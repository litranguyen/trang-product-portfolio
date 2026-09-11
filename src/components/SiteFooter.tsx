import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-lead">
          <span className="site-footer-kicker">GET IN TOUCH</span>

          <h2>
            Let&apos;s build
            <br />
            <span>something useful.</span>
          </h2>

          <p>
            Open to product roles building AI products. Happy to talk through
            how Chef&apos;s Table was scoped, or anything else here.
          </p>
        </div>

        <div className="site-footer-links">
          <a
            className="site-footer-cta"
            href="mailto:litranguyen@gmail.com"
          >
            <span>EMAIL</span>
            <strong>litranguyen@gmail.com</strong>
          </a>

          <a
            className="site-footer-cta"
            href="https://www.linkedin.com/in/linhtrangnguyen11/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LINKEDIN</span>
            <strong>Connect</strong>
          </a>
        </div>
      </div>

      <div className="site-footer-base">
        <span>&copy; {new Date().getFullYear()} Trang Nguyen</span>

        <Link href="/work/chefs-table">Chef&apos;s Table case study</Link>
      </div>
    </footer>
  );
}
