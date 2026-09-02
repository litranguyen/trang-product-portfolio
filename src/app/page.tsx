import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhoneFrame from "@/components/PhoneFrame";

export default function Home() {
  return (
    <main className="home">
      {/* =========================================================
          INTRO
      ========================================================== */}

      <section className="home-intro">
        <Reveal className="home-intro-copy">
          <p className="home-intro-kicker">PRODUCT MANAGER</p>

          <h1>
            I build products that help
            <br />
            people <span>decide.</span>
          </h1>

          <p className="home-intro-lead">
            I work at the point where research meets a shipped decision — turning
            user evidence into scoped, buildable product behavior. Most recently
            on AI products, where the hard part is not generating information but
            making it relevant and trustworthy.
          </p>

          <div className="home-intro-actions">
            <Link href="/work/chefs-table" className="home-intro-primary">
              View the Chef&apos;s Table case study
              <span aria-hidden="true">→</span>
            </Link>

            <a href="#contact" className="home-intro-secondary">
              Get in touch
            </a>
          </div>
        </Reveal>

        <div className="home-intro-meta">
          <div>
            <span>FOCUS</span>
            <strong>
              AI products
              <br />
              Decision confidence
              <br />
              0&nbsp;→&nbsp;1 MVPs
            </strong>
          </div>

          <div>
            <span>PRACTICE</span>
            <strong>
              User research
              <br />
              Prioritization
              <br />
              Scope &amp; acceptance criteria
            </strong>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================== */}

      <section className="home-work" id="work">
        <div className="home-section-head">
          <span>SELECTED WORK</span>
          <small>01 PROJECT</small>
        </div>

        <Reveal>
          <Link href="/work/chefs-table" className="home-project">
            <div className="home-project-copy">
              <div className="home-project-meta">
                <span>2026</span>
                <span>AI / PRODUCT</span>
                <span>iOS MVP</span>
              </div>

              <h2>Chef&apos;s Table</h2>

              <p className="home-project-line">
                An AI dining companion that turns an unfamiliar restaurant menu
                into personalized guidance based on taste, dietary needs, and
                previous dining experiences.
              </p>

              <ul className="home-project-points">
                <li>
                  <span>01</span>
                  <p>
                    3 exploratory interviews synthesized into 4 prioritized
                    product themes
                  </p>
                </li>
                <li>
                  <span>02</span>
                  <p>
                    Impact / urgency / reach scoring used to draw a defensible MVP
                    boundary
                  </p>
                </li>
                <li>
                  <span>03</span>
                  <p>
                    An explicit AI trust rule for allergen uncertainty, written
                    into acceptance criteria
                  </p>
                </li>
              </ul>

              <span className="home-project-cta">
                Read the case study
                <i aria-hidden="true">→</i>
              </span>
            </div>

            <div className="home-project-visual">
              <PhoneFrame
                src="/chefs-table/screens/home.png"
                alt="Chef's Table home screen showing personalized dish recommendations"
                priority
                sizes="(max-width: 900px) 45vw, 260px"
                className="home-project-phone home-project-phone-back"
              />

              <PhoneFrame
                src="/chefs-table/screens/dish-details.png"
                alt="Chef's Table dish detail screen explaining ingredients and flavor"
                sizes="(max-width: 900px) 45vw, 260px"
                className="home-project-phone home-project-phone-front"
              />
            </div>
          </Link>
        </Reveal>

        <div className="home-work-next">
          <span>NEXT PROJECT</span>
          <strong>In progress</strong>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}

      <section className="home-about" id="about">
        <div className="home-section-head">
          <span>ABOUT</span>
          <small>WHO I AM</small>
        </div>

        <div className="home-about-grid">
          <Reveal className="home-about-portrait">
            <Image
              src="/chefs-table/profile/trang.jpg"
              alt="Portrait of Trang Nguyen"
              width={1737}
              height={2584}
              sizes="(max-width: 900px) 70vw, 340px"
              className="home-about-photo"
            />
          </Reveal>

          <Reveal className="home-about-copy" delay={0.1}>
            <h2>
              I care about the decision,
              <br />
              <span>not the feature list.</span>
            </h2>

            <p>
              My product instinct is to find the exact moment a person gets
              stuck, then build the smallest thing that unsticks them. With
              Chef&apos;s Table, that moment was concrete: the restaurant is
              already chosen, the menu arrives, and a completely new decision
              starts with almost no support.
            </p>

            <p>
              I work end to end — running the interviews, synthesizing the
              patterns, scoring what actually deserves to be in scope, writing
              the acceptance criteria, and then building the thing. I am
              particularly interested in AI products where being confidently
              wrong is worse than being usefully uncertain.
            </p>

            <div className="home-about-facts">
              <div>
                <span>WAY OF WORKING</span>
                <strong>Research-led, evidence-first</strong>
              </div>

              <div>
                <span>STRENGTH</span>
                <strong>Turning ambiguity into scope</strong>
              </div>

              <div>
                <span>ALSO</span>
                <strong>I build the prototypes myself</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
