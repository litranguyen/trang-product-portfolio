import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer-main">
        <div className="site-footer-lead">
          <span className="site-footer-kicker">GET IN TOUCH</span>

          <h2>
            Currently looking for
            <br />
            <span>product management roles.</span>
          </h2>

          <p>
            Interested in AI products, decision-making, and the moments where a
            good interface changes what someone chooses to do.
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
