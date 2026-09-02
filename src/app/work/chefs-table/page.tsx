import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MissionJourney from "@/components/MissionJourney";
import QuestionBubbles from "@/components/QuestionBubbles";
import CaseStudyProgress from "@/components/CaseStudyProgress";
import PhoneFrame from "@/components/PhoneFrame";

export const metadata: Metadata = {
  title: "Chef's Table — AI dining companion case study",
  description:
    "A product case study: how three exploratory interviews became four prioritized themes, a defensible MVP boundary, and an AI trust rule for allergen uncertainty.",
  openGraph: {
    title: "Chef's Table — AI dining companion case study",
    description:
      "From user research to MVP scope: turning an unfamiliar restaurant menu into personalized, trustworthy ordering guidance.",
    url: "/work/chefs-table",
  },
};

export default function ChefsTableCaseStudy() {
  return (
    <main className="project-page">
      <CaseStudyProgress />
      {/* =========================================================
          PHASE 01 — OVERVIEW
          SCREEN 01 — PROJECT HERO
      ========================================================== */}

      <section className="hero-v2" id="overview">
        <div className="hero-v2-grid">
          {/* TOP BAR */}
          <div className="hero-v2-top">
            <div className="hero-v2-brand">
              <span className="hero-v2-mark">CT</span>

              <div>
                <strong>CHEF&apos;S TABLE</strong>
                <small>PRODUCT CASE STUDY</small>
              </div>
            </div>

            <div className="hero-v2-top-meta">
              <span>2026</span>
              <span>AI / PRODUCT</span>
              <span>iOS MVP</span>
            </div>
          </div>

          {/* LEFT — CASE STUDY IDENTITY */}
          <div className="hero-v2-sidebar">
            <div className="hero-v2-index">
              <span>01</span>
              <small>OVERVIEW</small>
            </div>

            <div className="hero-v2-sidebar-line" />

            <div className="hero-v2-sidebar-bottom">
              <span>01 / 03</span>
              <small>PROJECT HERO</small>
            </div>
          </div>

          {/* MAIN STATEMENT */}
          <Reveal className="hero-v2-main">
            <p className="hero-v2-kicker">
              AI DINING COMPANION
            </p>

            <h1>
              Helping diners
              <br />
              decide what to
              <br />
              <span>order.</span>
            </h1>

            <p className="hero-v2-description">
              Chef&apos;s Table turns an unfamiliar restaurant menu into personalized
              guidance based on taste, dietary needs, and previous dining experiences.
            </p>

            <div className="hero-v2-question">
              <span>THE PRODUCT QUESTION</span>

              <p>
                Can menu intelligence become
                <strong> personal intelligence?</strong>
              </p>
            </div>
          </Reveal>

          {/* PRODUCT EVIDENCE */}
          <div className="hero-v2-product">
            <div className="hero-v2-product-label">
              <div>
                <span>PRODUCT / 001</span>
                <small>MVP INTERFACE</small>
              </div>

              <span className="hero-v2-product-status">
                <i />
                IN DEVELOPMENT
              </span>
            </div>

            <div className="hero-v2-device-stage">
              <PhoneFrame
                className="hero-v2-device"
                src="/chefs-table/screens/home.png"
                alt="Chef's Table home screen showing personalized dish recommendations"
                sizes="(max-width: 700px) 70vw, 315px"
                priority
              />

              <div className="hero-v2-annotation hero-v2-annotation-one">
                <span>01</span>
                <p>Personalized recommendations</p>
              </div>

              <div className="hero-v2-annotation hero-v2-annotation-two">
                <span>02</span>
                <p>Dining history becomes context</p>
              </div>
            </div>
          </div>

          {/* BOTTOM PRODUCT METADATA */}
          <div className="hero-v2-footer">
            <div className="hero-v2-footer-item">
              <span>ROLE</span>
              <strong>Product / Builder</strong>
            </div>

            <div className="hero-v2-footer-item">
              <span>STAGE</span>
              <strong>MVP</strong>
            </div>

            <div className="hero-v2-footer-item">
              <span>FOCUS</span>
              <strong>Decision confidence</strong>
            </div>

            <div className="hero-v2-footer-item">
              <span>PRODUCT</span>
              <strong>AI dining companion</strong>
            </div>

            <a href="#ideation" className="hero-v2-scroll">
              <span>BEGIN CASE STUDY</span>
              <strong>↓</strong>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCREEN 02 — PRODUCT MISSION
      ========================================================== */}

      <section className="mission-v2">
        <div className="mission-v2-grid">
          {/* LEFT RAIL */}
          <aside className="mission-v2-rail">
            <div>
              <span>01</span>
              <small>OVERVIEW</small>
            </div>

            <div className="mission-v2-line" />

            <div className="mission-v2-bottom">
              <span>02 / 03</span>
              <small>MISSION</small>
            </div>
          </aside>

          {/* TOP STATEMENT */}
          <Reveal className="mission-v2-header">
            <span className="mission-v2-kicker">
              PRODUCT MISSION
            </span>

            <h2>
              Restaurant technology helps you choose
              <span> what to eat.</span>
            </h2>

            <p>
              Chef&apos;s Table focuses on the decision that happens next.
            </p>
          </Reveal>

          {/* ANIMATED DECISION JOURNEY */}
          <MissionJourney />

        
        </div>
      </section>

     {/* =========================================================
        SCREEN 03 — PROBLEM
    ========================================================== */}

    <section className="problem-section">
      <aside className="problem-rail">
        <div>
          <div className="problem-chapter-number">01</div>
          <div className="problem-chapter-name">OVERVIEW</div>
        </div>

        <div className="problem-progress">
          <span>03</span>
          <small>/ 03</small>
        </div>

        <div className="problem-label">The Problem</div>

        <div className="problem-line">
          <span />
        </div>
      </aside>

      <div className="problem-content">
        <Reveal className="problem-intro">
          <p className="problem-eyebrow">THE PROBLEM</p>

          <h2>
            You&apos;ve picked the restaurant.
            <br />
            <em>Now the menu arrives.</em>
          </h2>

          <p className="problem-intro-copy">
            A new decision starts — and suddenly, there&apos;s a lot to figure out.
          </p>
        </Reveal>

        <QuestionBubbles />

        <div className="problem-opportunity">
          <p className="opportunity-eyebrow">
            THE PRODUCT OPPORTUNITY
          </p>

          <h3>
            Restaurant discovery solved
            <br />
            the <em>first</em> decision.
          </h3>

          <p>
            Chef&apos;s Table is designed for the one that comes next.
          </p>

          <div className="decision-flow">
            <div className="decision-step">
              <span>DISCOVERY</span>
              <strong>What should I eat?</strong>
            </div>

            <div className="decision-arrow">
              <span>↓</span>
            </div>

            <div className="restaurant-step">
              <span>ARRIVE</span>
              <strong>The restaurant</strong>
            </div>

            <div className="decision-arrow">
              <span>↓</span>
            </div>

            <div className="decision-step decision-active">
              <span>CHEF&apos;S TABLE</span>
              <strong>What should I order?</strong>
            </div>
          </div>
        </div>

        <div className="ideation-transition">
          <div className="transition-number">02</div>

          <div className="transition-copy">
            <span>NEXT — IDEATION</span>

            <h3>
              But was this actually a problem
              <br />
              <em>other diners experienced?</em>
            </h3>

            <p>I talked to potential users to find out.</p>
          </div>

          <div className="transition-arrow">↓</div>
        </div>
      </div>
    </section>
      {/* =========================================================
          PHASE 02 — IDEATION
          SCREEN 01 — RESEARCH
      ========================================================== */}
    <section className="research-v2" id="ideation">
      <aside className="research-v2-rail">
        <div className="research-v2-rail-top">
          <span>02</span>
          <small>IDEATION</small>
        </div>

        <div className="research-v2-line" />

        <div className="research-v2-rail-bottom">
          <span>01 / 05</span>
          <small>RESEARCH</small>
        </div>
      </aside>

      <div className="research-v2-content">
        <Reveal className="research-v2-header">
          <span className="research-v2-kicker">
            RESEARCH QUESTION
          </span>

          <h2>
            I had a hypothesis.
            <br />
            <span>I needed evidence.</span>
          </h2>

          <p>
            Before defining the product, I wanted to understand how people
            actually make decisions once the menu is in front of them.
          </p>
        </Reveal>

        <div className="research-v2-question">
          <div className="research-v2-question-label">
            <span>THE RESEARCH QUESTION</span>
            <small>001</small>
          </div>

          <p>
            What makes choosing a dish difficult,
            <br />
            and what gives diners enough
            <br />
            <strong>confidence to decide?</strong>
          </p>
        </div>

        <div className="research-v2-method">
          <div className="research-v2-method-stat">
            <strong>03</strong>

            <span>
              EXPLORATORY
              <br />
              INTERVIEWS
            </span>
          </div>

          <div className="research-v2-objectives">
            <div className="research-v2-objective">
              <span>01</span>

              <div>
                <strong>Understand behavior</strong>
                <p>
                  How do people currently decide what to order?
                </p>
              </div>
            </div>

            <div className="research-v2-objective">
              <span>02</span>

              <div>
                <strong>Identify friction</strong>
                <p>
                  Where does the decision become difficult?
                </p>
              </div>
            </div>

            <div className="research-v2-objective">
              <span>03</span>

              <div>
                <strong>Understand confidence</strong>
                <p>
                  What information helps someone make the decision?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="research-v2-next">
          <span>NEXT</span>

          <strong>
            Three diners. Three decision styles.
          </strong>

          <span>↓</span>
        </div>
      </div>
    </section>
          

      {/* =========================================================
          SCREEN 02 — USER INTERVIEWS
      ========================================================== */}
      <section className="interviews-v2">
        <aside className="interviews-v2-rail">
          <div className="interviews-v2-rail-top">
            <span>02</span>
            <small>IDEATION</small>
          </div>

          <div className="interviews-v2-line" />

          <div className="interviews-v2-rail-bottom">
            <span>02 / 05</span>
            <small>INTERVIEWS</small>
          </div>
        </aside>

        <div className="interviews-v2-content">
          <Reveal className="interviews-v2-header">
            <span className="interviews-v2-kicker">
              USER INTERVIEWS
            </span>

            <h2>
              Three diners.
              <br />
              <span>Three decision styles.</span>
            </h2>

            <p>
              Different restaurant habits gave me three views into what happens
              between receiving a menu and placing an order.
            </p>
          </Reveal>

          <div className="interviews-v2-grid">
            {/* DINER 01 */}

            <article className="interviews-v2-person interviews-v2-person-warm">
              <div className="interviews-v2-person-top">
                <span>DINER 01</span>

                <small>FREQUENT EXPLORER</small>
              </div>

              <div className="interviews-v2-stat">
                <strong>5–6×</strong>

                <span>dines out / week</span>
              </div>

              <div className="interviews-v2-evidence">
                <div>
                  <span>BEHAVIOR</span>

                  <p>
                    Uses reviews, photos, and recommendations to decide between
                    unfamiliar dishes.
                  </p>
                </div>

                <div>
                  <span>FRICTION</span>

                  <p>
                    A highly rated or popular dish can still be a poor match for
                    personal taste.
                  </p>
                </div>
              </div>

              <div className="interviews-v2-signal">
                <span>KEY SIGNAL</span>

                <strong>
                  Popularity ≠ personal taste.
                </strong>
              </div>
            </article>

            {/* DINER 02 */}

            <article className="interviews-v2-person interviews-v2-person-stone">
              <div className="interviews-v2-person-top">
                <span>DINER 02</span>

                <small>ROUTINE DINER</small>
              </div>

              <div className="interviews-v2-stat">
                <strong>~1×</strong>

                <span>new restaurant / week</span>
              </div>

              <div className="interviews-v2-evidence">
                <div>
                  <span>BEHAVIOR</span>

                  <p>
                    Searches reviews and photos when evaluating unfamiliar dishes.
                  </p>
                </div>

                <div>
                  <span>FRICTION</span>

                  <p>
                    Visual information helps explain appearance, but does not fully
                    explain flavor or whether the dish will be enjoyable.
                  </p>
                </div>
              </div>

              <div className="interviews-v2-signal">
                <span>KEY SIGNAL</span>

                <strong>
                  Seeing the dish isn&apos;t enough.
                </strong>
              </div>
            </article>

            {/* DINER 03 */}

            <article className="interviews-v2-person interviews-v2-person-sage">
              <div className="interviews-v2-person-top">
                <span>DINER 03</span>

                <small>ADVENTUROUS DINER</small>
              </div>

              <div className="interviews-v2-stat">
                <strong>3–4×</strong>

                <span>dines out / week</span>
              </div>

              <div className="interviews-v2-evidence">
                <div>
                  <span>BEHAVIOR</span>

                  <p>
                    Looks across the menu, ingredients, and staff recommendations
                    before making a decision.
                  </p>
                </div>

                <div>
                  <span>FRICTION</span>

                  <p>
                    Recommendations need more personal context, especially when
                    preferences or dietary restrictions matter.
                  </p>
                </div>
              </div>

              <div className="interviews-v2-signal">
                <span>KEY SIGNAL</span>

                <strong>
                  Recommendation needs context.
                </strong>
              </div>
            </article>
          </div>

          <div className="interviews-v2-pattern">
            <div className="interviews-v2-pattern-meta">
              <span>PATTERN OBSERVED</span>
              <small>001</small>
            </div>

            <div className="interviews-v2-pattern-main">
              <p>
                All three diners reached
                <span> beyond the menu </span>
                before deciding what to order.
              </p>
            </div>

            <div className="interviews-v2-pattern-note">
              <span>WHY IT MATTERED</span>

              <p>
                The missing information was not simply more restaurant data.
                It was information that could be interpreted in personal context.
              </p>
            </div>
          </div>

          <div className="interviews-v2-next">
            <span>NEXT</span>

            <strong>
              Turn individual answers into patterns.
            </strong>

            <span>↓</span>
          </div>
        </div>
      </section>
            {/* =========================================================
          SCREEN 03 — RESEARCH SYNTHESIS
      ========================================================== */}

      <section className="synthesis-v2">
        <aside className="synthesis-v2-rail">
          <div className="synthesis-v2-rail-top">
            <span>02</span>
            <small>IDEATION</small>
          </div>

          <div className="synthesis-v2-line" />

          <div className="synthesis-v2-rail-bottom">
            <span>03 / 05</span>
            <small>SYNTHESIS</small>
          </div>
        </aside>

        <div className="synthesis-v2-content">
          <Reveal className="synthesis-v2-header">
            <span className="synthesis-v2-kicker">
              RESEARCH SYNTHESIS
            </span>

            <h2>
              The answers were different.
              <br />
              <span>The patterns were not.</span>
            </h2>

            <p>
              I grouped recurring behaviors and friction points from the interviews
              into four product-relevant themes.
            </p>
          </Reveal>

          <div className="synthesis-v2-board">
            <div className="synthesis-v2-board-label">
              <span>RAW SIGNALS</span>
              <small>INTERVIEW EVIDENCE</small>
            </div>

            <div className="synthesis-v2-notes">
              <div className="synthesis-v2-note synthesis-v2-note-a">
                <span>DINER 01</span>
                <p>Checks reviews and photos before choosing.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-b">
                <span>DINER 01</span>
                <p>A popular dish can still be a poor personal match.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-c">
                <span>DINER 02</span>
                <p>Searches unfamiliar dishes before ordering.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-d">
                <span>DINER 02</span>
                <p>Photos help, but do not fully explain flavor.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-e">
                <span>DINER 03</span>
                <p>Uses ingredients and staff context to decide.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-f">
                <span>DINER 03</span>
                <p>Dietary restrictions make uncertainty more consequential.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-g">
                <span>CROSS-INTERVIEW</span>
                <p>Past dining experience influences future choices.</p>
              </div>

              <div className="synthesis-v2-note synthesis-v2-note-h">
                <span>CROSS-INTERVIEW</span>
                <p>All three reach beyond the menu for more context.</p>
              </div>
            </div>

            <div className="synthesis-v2-board-center">
              <span>SYNTHESIS</span>

              <strong>
                Group signals by underlying need.
              </strong>
            </div>
          </div>

          <div className="synthesis-v2-clusters">
            <article className="synthesis-v2-cluster">
              <div className="synthesis-v2-cluster-meta">
                <span>01</span>
                <small>STRONG SIGNAL</small>
              </div>

              <div className="synthesis-v2-cluster-body">
                <span>THEME</span>

                <h3>
                  Personal
                  <br />
                  taste fit
                </h3>

                <p>
                  Generic popularity does not reliably tell a diner whether a dish
                  will match their own preferences.
                </p>
              </div>

              <div className="synthesis-v2-cluster-output">
                <span>PRODUCT IMPLICATION</span>

                <strong>
                  Personalized recommendations
                </strong>
              </div>
            </article>

            <article className="synthesis-v2-cluster">
              <div className="synthesis-v2-cluster-meta">
                <span>02</span>
                <small>VERY STRONG SIGNAL</small>
              </div>

              <div className="synthesis-v2-cluster-body">
                <span>THEME</span>

                <h3>
                  Dish
                  <br />
                  understanding
                </h3>

                <p>
                  Diners search for photos, ingredients, and other context when menu
                  descriptions are not enough.
                </p>
              </div>

              <div className="synthesis-v2-cluster-output">
                <span>PRODUCT IMPLICATION</span>

                <strong>
                  Dish and flavor intelligence
                </strong>
              </div>
            </article>

            <article className="synthesis-v2-cluster synthesis-v2-cluster-sage">
              <div className="synthesis-v2-cluster-meta">
                <span>03</span>
                <small>HIGH CONSEQUENCE</small>
              </div>

              <div className="synthesis-v2-cluster-body">
                <span>THEME</span>

                <h3>
                  Dietary
                  <br />
                  confidence
                </h3>

                <p>
                  When restrictions or allergies matter, incomplete information
                  increases the cost of uncertainty.
                </p>
              </div>

              <div className="synthesis-v2-cluster-output">
                <span>PRODUCT IMPLICATION</span>

                <strong>
                  Restriction-aware analysis
                </strong>
              </div>
            </article>

            <article className="synthesis-v2-cluster synthesis-v2-cluster-muted">
              <div className="synthesis-v2-cluster-meta">
                <span>04</span>
                <small>MODERATE SIGNAL</small>
              </div>

              <div className="synthesis-v2-cluster-body">
                <span>THEME</span>

                <h3>
                  Dining
                  <br />
                  memory
                </h3>

                <p>
                  Previous meals shape future preferences, but that information is
                  rarely available at the moment of ordering.
                </p>
              </div>

              <div className="synthesis-v2-cluster-output">
                <span>PRODUCT IMPLICATION</span>

                <strong>
                  History + Taste DNA
                </strong>
              </div>
            </article>
          </div>

          <div className="synthesis-v2-conclusion">
            <div className="synthesis-v2-conclusion-label">
              <span>CORE INSIGHT</span>
              <small>001</small>
            </div>

            <div className="synthesis-v2-conclusion-main">
              <p>
                Diners already have access to
                <span> popular information.</span>
              </p>

              <strong>
                What they lack is information about what is right for them.
              </strong>
            </div>
          </div>

          <div className="synthesis-v2-next">
            <span>NEXT</span>

            <strong>
              Not every insight should become an MVP feature.
            </strong>

            <span>↓</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SCREEN 04 — PRIORITIZATION
      ========================================================== */}
    <section className="priority-v2">

      <aside className="priority-v2-rail">

        <div className="priority-v2-rail-top">

          <span>02</span>

          <small>IDEATION</small>

        </div>

        <div className="priority-v2-line" />

        <div className="priority-v2-rail-bottom">

          <span>04 / 05</span>

          <small>PRIORITIZATION</small>

        </div>

      </aside>

      <div className="priority-v2-content">

        <Reveal className="priority-v2-header">

          <span className="priority-v2-kicker">

            PRIORITIZATION

          </span>

          <h2>

            Not every insight

            <br />

            <span>belongs in the MVP.</span>

          </h2>

          <p>

            Research surfaced several meaningful problems. The next decision was

            which ones mattered most at the moment of ordering.

          </p>

        </Reveal>

        <div className="priority-v2-framework">

          <div className="priority-v2-framework-label">

            <span>DECISION FRAMEWORK</span>

            <small>DIRECTIONAL</small>

          </div>

          <div className="priority-v2-framework-grid">

            <div>

              <span>01</span>

              <strong>Impact</strong>

              <p>

                How strongly does this problem affect the ordering decision?

              </p>

            </div>

            <div>

              <span>02</span>

              <strong>Urgency</strong>

              <p>

                Does the problem need to be solved while the diner is choosing?

              </p>

            </div>

            <div>

              <span>03</span>

              <strong>Reach</strong>

              <p>

                How broadly did the problem appear across the research?

              </p>

            </div>

          </div>

          <p className="priority-v2-framework-note">

            Scores represent directional product judgment from exploratory research,

            not statistical validation.

          </p>

        </div>

        <div className="priority-v2-table">

          <div className="priority-v2-table-head">

            <span>RESEARCH THEME</span>

            <span>IMPACT</span>

            <span>URGENCY</span>

            <span>REACH</span>

            <span>DECISION</span>

          </div>

          <div className="priority-v2-row priority-v2-row-primary">

            <div className="priority-v2-theme">

              <span>01</span>

              <div>

                <strong>Dish Understanding</strong>

                <p>

                  Diners need more context than the menu often provides.

                </p>

              </div>

            </div>

            <strong className="priority-v2-score">5</strong>

            <strong className="priority-v2-score">5</strong>

            <strong className="priority-v2-score">5</strong>

            <div className="priority-v2-decision">

              <span>CORE</span>

              <strong>Build now</strong>

            </div>

          </div>

          <div className="priority-v2-row priority-v2-row-primary">

            <div className="priority-v2-theme">

              <span>02</span>

              <div>

                <strong>Personal Taste Fit</strong>

                <p>

                  Popular recommendations do not necessarily reflect individual taste.

                </p>

              </div>

            </div>

            <strong className="priority-v2-score">5</strong>

            <strong className="priority-v2-score">4</strong>

            <strong className="priority-v2-score">5</strong>

            <div className="priority-v2-decision">

              <span>CORE</span>

              <strong>Build now</strong>

            </div>

          </div>

          <div className="priority-v2-row priority-v2-row-important">

            <div className="priority-v2-theme">

              <span>03</span>

              <div>

                <strong>Dietary Confidence</strong>

                <p>

                  Restrictions and allergies increase the consequence of uncertainty.

                </p>

              </div>

            </div>

            <strong className="priority-v2-score">5</strong>

            <strong className="priority-v2-score">5</strong>

            <strong className="priority-v2-score">3</strong>

            <div className="priority-v2-decision">

              <span>TRUST</span>

              <strong>Build carefully</strong>

            </div>

          </div>

          <div className="priority-v2-row priority-v2-row-muted">

            <div className="priority-v2-theme">

              <span>04</span>

              <div>

                <strong>Dining Memory</strong>

                <p>

                  Previous meals help personalization, but are less urgent at first use.

                </p>

              </div>

            </div>

            <strong className="priority-v2-score">3</strong>

            <strong className="priority-v2-score">2</strong>

            <strong className="priority-v2-score">3</strong>

            <div className="priority-v2-decision">

              <span>SUPPORTING</span>

              <strong>Keep lightweight</strong>

            </div>

          </div>

        </div>

        <div className="priority-v2-boundary">

          <div className="priority-v2-boundary-label">

            <span>MVP BOUNDARY</span>

            <small>001</small>

          </div>

          <div className="priority-v2-boundary-main">

            <p>

              Prioritize what improves

              <span> decision confidence </span>

              while the diner is actively choosing.

            </p>

          </div>

          <div className="priority-v2-boundary-side">

            <div>

              <span>NOW</span>

              <strong>

                Understand the dish

                <br />

                Personalize the choice

                <br />

                Handle restrictions carefully

              </strong>

            </div>

            <div>

              <span>LATER</span>

              <strong>

                Expand memory,

                <br />

                social, and discovery

              </strong>

            </div>

          </div>

        </div>

        <div className="priority-v2-next">

          <span>NEXT</span>

          <strong>

            Turn the prioritized needs into a product direction.

          </strong>

          <span>↓</span>

        </div>

      </div>

    </section>
          

      {/* =========================================================
          SCREEN 05 — PRODUCT OPPORTUNITY
      ========================================================== */}
      <section className="opportunity-v2">

        <aside className="opportunity-v2-rail">

          <div className="opportunity-v2-rail-top">

            <span>02</span>

            <small>IDEATION</small>

          </div>

          <div className="opportunity-v2-line" />

          <div className="opportunity-v2-rail-bottom">

            <span>05 / 05</span>

            <small>OPPORTUNITY</small>

          </div>

        </aside>

        <div className="opportunity-v2-content">

          <Reveal className="opportunity-v2-header">

            <span className="opportunity-v2-kicker">

              PRODUCT OPPORTUNITY

            </span>

            <h2>

              The market has information.

              <br />

              <span>What it lacks is relevance.</span>

            </h2>

            <p>

              Existing restaurant tools are good at helping diners discover what is

              popular. The opportunity was to interpret the menu through the context

              of the individual diner.

            </p>

          </Reveal>

          <div className="opportunity-v2-shift">

            <div className="opportunity-v2-side opportunity-v2-side-today">

              <div className="opportunity-v2-side-meta">

                <span>01</span>

                <small>TODAY</small>

              </div>

              <div className="opportunity-v2-side-copy">

                <span className="opportunity-v2-side-label">

                  GENERIC INFORMATION

                </span>

                <h3>

                  What is

                  <br />

                  popular?

                </h3>

              </div>

              <div className="opportunity-v2-list">

                <div>

                  <span>01</span>

                  <strong>Ratings</strong>

                </div>

                <div>

                  <span>02</span>

                  <strong>Reviews</strong>

                </div>

                <div>

                  <span>03</span>

                  <strong>Photos</strong>

                </div>

                <div>

                  <span>04</span>

                  <strong>Menu descriptions</strong>

                </div>

              </div>

              <div className="opportunity-v2-side-footer">

                <span>USEFUL FOR</span>

                <strong>Restaurant and dish discovery</strong>

              </div>

            </div>

            <div className="opportunity-v2-transition">

              <span>SHIFT</span>

              <div className="opportunity-v2-transition-line">

                <i />

              </div>

              <strong>→</strong>

              <small>

                FROM POPULARITY

                <br />

                TO PERSONAL FIT

              </small>

            </div>

            <div className="opportunity-v2-side opportunity-v2-side-personal">

              <div className="opportunity-v2-side-meta">

                <span>02</span>

                <small>CHEF&apos;S TABLE</small>

              </div>

              <div className="opportunity-v2-side-copy">

                <span className="opportunity-v2-side-label">

                  PERSONAL RELEVANCE

                </span>

                <h3>

                  What is right

                  <br />

                  <em>for me?</em>

                </h3>

              </div>

              <div className="opportunity-v2-list">

                <div>

                  <span>01</span>

                  <strong>My taste</strong>

                </div>

                <div>

                  <span>02</span>

                  <strong>My restrictions</strong>

                </div>

                <div>

                  <span>03</span>

                  <strong>My dining history</strong>

                </div>

                <div>

                  <span>04</span>

                  <strong>My current context</strong>

                </div>

              </div>

              <div className="opportunity-v2-side-footer">

                <span>DESIGNED FOR</span>

                <strong>Decision confidence at the moment of ordering</strong>

              </div>

            </div>

          </div>

          <div className="opportunity-v2-definition">

            <div className="opportunity-v2-definition-meta">

              <div>

                <span>PRODUCT DIRECTION</span>

                <small>001</small>

              </div>

              <span className="opportunity-v2-definition-status">

                DEFINED

              </span>

            </div>

            <div className="opportunity-v2-definition-main">

              <span>CHEF&apos;S TABLE</span>

              <h3>

                Personalized

                <br />

                menu intelligence.

              </h3>

              <p>

                Help diners understand a dish, evaluate whether it fits their

                preferences and restrictions, and make a more confident ordering

                decision.

              </p>

            </div>

            <div className="opportunity-v2-definition-context">

              <div>

                <span>INPUT</span>

                <strong>

                  Menu

                  <br />

                  Taste

                  <br />

                  Restrictions

                  <br />

                  History

                </strong>

              </div>

              <div className="opportunity-v2-definition-context-arrow">

                →

              </div>

              <div>

                <span>OUTPUT</span>

                <strong>

                  Personal

                  <br />

                  decision

                  <br />

                  guidance

                </strong>

              </div>

            </div>

          </div>

          <div className="opportunity-v2-principle">

            <div className="opportunity-v2-principle-label">

              <span>PRODUCT PRINCIPLE</span>

              <small>01</small>

            </div>

            <p>

              Don&apos;t give the diner

              <span> more information.</span>

              <strong> Give them more relevant information.</strong>

            </p>

          </div>

          <div className="opportunity-v2-next">

            <div className="opportunity-v2-next-chapter">

              <span>03</span>

              <div>

                <small>NEXT CHAPTER</small>

                <strong>DEFINE</strong>

              </div>

            </div>

            <p>

              Turn the opportunity into

              <strong> a focused MVP.</strong>

            </p>

            <span className="opportunity-v2-next-arrow">

              →

            </span>

          </div>

        </div>

      </section>

      {/* =========================================================
    PHASE 03 — DEFINE
    SCREEN 01 — MVP GOAL
    ========================================================= */}

    <section className="define-v2" id="define">
      <aside className="define-v2-rail">
        <div className="define-v2-rail-top">
          <span>03</span>
          <small>DEFINE</small>
        </div>

        <div className="define-v2-line" />

        <div className="define-v2-rail-bottom">
          <span>01 / 04</span>
          <small>MVP GOAL</small>
        </div>
      </aside>

      <div className="define-v2-content">
        <Reveal className="define-v2-header">
          <span className="define-v2-kicker">
            FROM OPPORTUNITY TO PRODUCT
          </span>

          <h2>
            Define the smallest product
            <br />
            <span>that creates meaningful value.</span>
          </h2>

          <p>
            The goal was not to build every possible dining feature.
            It was to solve the highest-priority decision first:
            helping someone understand an unfamiliar menu and choose what fits them.
          </p>
        </Reveal>

        <div className="define-v2-hypothesis">
          <div className="define-v2-hypothesis-meta">
            <span>MVP HYPOTHESIS</span>
            <small>001</small>
          </div>

          <div className="define-v2-hypothesis-main">
            <p>
              Can Chef&apos;s Table help a diner make a
              <span> more confident dish choice </span>
              from an unfamiliar menu?
            </p>
          </div>

          <div className="define-v2-hypothesis-status">
            <span>STATUS</span>
            <strong>TO VALIDATE</strong>
          </div>
        </div>

        <div className="define-v2-state-shift">
          <div className="define-v2-state define-v2-state-before">
            <div className="define-v2-state-meta">
              <span>BEFORE</span>
              <small>UNCERTAINTY</small>
            </div>

            <p>
              “I&apos;m not sure what this is,
              whether I&apos;ll like it,
              or whether it fits me.”
            </p>
          </div>

          <div className="define-v2-state-arrow">
            <span>PRODUCT JOB</span>
            <strong>→</strong>
          </div>

          <div className="define-v2-state define-v2-state-after">
            <div className="define-v2-state-meta">
              <span>AFTER</span>
              <small>CONFIDENCE</small>
            </div>

            <p>
              “I understand my options
              and know which dish is most relevant to me.”
            </p>
          </div>
        </div>

        <div className="define-v2-principle">
          <div className="define-v2-principle-label">
            <span>PRODUCT PRINCIPLE</span>
            <small>001</small>
          </div>

          <p>
            Optimize for
            <span> confidence at the point of ordering,</span>
            <strong> not feature breadth.</strong>
          </p>
        </div>

        <div className="define-v2-constraints">
          <div className="define-v2-constraints-header">
            <span>DEFINITION CONSTRAINTS</span>
            <small>WHAT THE MVP MUST PROTECT</small>
          </div>

          <div className="define-v2-constraints-grid">
            <article>
              <span>01</span>

              <strong>Immediate</strong>

              <p>
                Value has to appear while the diner is actively looking at the menu.
              </p>
            </article>

            <article>
              <span>02</span>

              <strong>Personal</strong>

              <p>
                Recommendations should reflect the diner rather than generic popularity.
              </p>
            </article>

            <article>
              <span>03</span>

              <strong>Understandable</strong>

              <p>
                The product should explain why a recommendation fits instead of only ranking dishes.
              </p>
            </article>

            <article>
              <span>04</span>

              <strong>Trust-aware</strong>

              <p>
                When allergy or ingredient information is uncertain, the product must communicate that uncertainty.
              </p>
            </article>
          </div>
        </div>

        <div className="define-v2-next">
          <span>NEXT</span>

          <strong>
            Translate the MVP goal into concrete user stories.
          </strong>

          <span>↓</span>
        </div>
      </div>
    </section>
    {/* =========================================================
    PHASE 03 — DEFINE
    SCREEN 02 — USER STORIES
    ========================================================= */}
    <section className="stories-v2">
      <aside className="stories-v2-rail">
        <div className="stories-v2-rail-top">
          <span>03</span>
          <small>DEFINE</small>
        </div>

        <div className="stories-v2-line" />

        <div className="stories-v2-rail-bottom">
          <span>02 / 04</span>
          <small>USER STORIES</small>
        </div>
      </aside>

      <div className="stories-v2-content">
        <Reveal className="stories-v2-header">
          <span className="stories-v2-kicker">
            USER STORIES
          </span>

          <h2>
            Turn research needs into
            <br />
            <span>buildable product behavior.</span>
          </h2>

          <p>
            Each user story connects a research need to a concrete product behavior.
            The goal was to define what the experience should enable before deciding
            exactly how the interface should look.
          </p>
        </Reveal>

        <div className="stories-v2-system">
          <div className="stories-v2-system-head">
            <span>USER NEED</span>
            <span>USER STORY</span>
            <span>PRODUCT BEHAVIOR</span>
          </div>

          <article className="stories-v2-row stories-v2-row-core">
            <div className="stories-v2-need">
              <span>01</span>

              <div>
                <small>DISH UNDERSTANDING</small>

                <strong>
                  I need to understand an unfamiliar dish quickly.
                </strong>
              </div>
            </div>

            <div className="stories-v2-story">
              <span>AS A DINER</span>

              <p>
                When I am looking at an unfamiliar menu, I want to understand what a
                dish contains and what it may taste like so that I can decide whether
                it interests me.
              </p>
            </div>

            <div className="stories-v2-behavior">
              <span>PRODUCT SHOULD</span>

              <strong>
                Analyze the menu and explain dishes in clear, decision-relevant language.
              </strong>

              <div className="stories-v2-output">
                <span>OUTPUT</span>
                <p>Dish context / ingredients / flavor profile</p>
              </div>
            </div>
          </article>

          <article className="stories-v2-row stories-v2-row-core">
            <div className="stories-v2-need">
              <span>02</span>

              <div>
                <small>PERSONAL TASTE FIT</small>

                <strong>
                  I need to know which options fit my preferences.
                </strong>
              </div>
            </div>

            <div className="stories-v2-story">
              <span>AS A DINER</span>

              <p>
                When several dishes look appealing, I want recommendations that reflect
                my taste instead of generic popularity so that I can choose more confidently.
              </p>
            </div>

            <div className="stories-v2-behavior">
              <span>PRODUCT SHOULD</span>

              <strong>
                Rank or recommend dishes using personal taste context and explain why
                each suggestion may fit.
              </strong>

              <div className="stories-v2-output">
                <span>OUTPUT</span>
                <p>Personal recommendation / fit rationale</p>
              </div>
            </div>
          </article>

          <article className="stories-v2-row stories-v2-row-trust">
            <div className="stories-v2-need">
              <span>03</span>

              <div>
                <small>DIETARY CONFIDENCE</small>

                <strong>
                  I need to identify potential restriction or allergen concerns.
                </strong>
              </div>
            </div>

            <div className="stories-v2-story">
              <span>AS A DINER</span>

              <p>
                When I have a dietary restriction or allergy, I want the product to
                flag potential concerns and communicate uncertainty so that I know
                what I should verify with restaurant staff.
              </p>
            </div>

            <div className="stories-v2-behavior">
              <span>PRODUCT SHOULD</span>

              <strong>
                Surface potential conflicts without presenting uncertain ingredient
                information as confirmed safe.
              </strong>

              <div className="stories-v2-output stories-v2-output-trust">
                <span>TRUST BEHAVIOR</span>
                <p>Potential risk / uncertainty / staff verification</p>
              </div>
            </div>
          </article>

          <article className="stories-v2-row stories-v2-row-support">
            <div className="stories-v2-need">
              <span>04</span>

              <div>
                <small>DINING MEMORY</small>

                <strong>
                  I need my previous dining choices to improve future recommendations.
                </strong>
              </div>
            </div>

            <div className="stories-v2-story">
              <span>AS A RETURNING DINER</span>

              <p>
                After I eat a dish, I want to record whether I liked it so that future
                recommendations can become more relevant to my preferences.
              </p>
            </div>

            <div className="stories-v2-behavior">
              <span>PRODUCT SHOULD</span>

              <strong>
                Capture lightweight meal feedback and use that history as context for
                future personalization.
              </strong>

              <div className="stories-v2-output">
                <span>OUTPUT</span>
                <p>Rating / dining history / Taste DNA input</p>
              </div>
            </div>
          </article>
        </div>

        <div className="stories-v2-journey">
          <div className="stories-v2-journey-label">
            <span>CORE USER JOURNEY</span>
            <small>001</small>
          </div>

          <div className="stories-v2-journey-flow">
            <div>
              <span>01</span>
              <strong>Scan</strong>
              <small>MENU</small>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <strong>Understand</strong>
              <small>DISHES</small>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <strong>Personalize</strong>
              <small>TASTE + NEEDS</small>
            </div>

            <i>→</i>

            <div>
              <span>04</span>
              <strong>Choose</strong>
              <small>WITH CONFIDENCE</small>
            </div>

            <i>→</i>

            <div>
              <span>05</span>
              <strong>Rate</strong>
              <small>LEARN</small>
            </div>
          </div>
        </div>

        <div className="stories-v2-product-loop">
          <div className="stories-v2-product-loop-label">
            <span>PERSONALIZATION LOOP</span>
            <small>SUPPORTING SYSTEM</small>
          </div>

          <p>
            Eat
            <span> → </span>
            Rate
            <span> → </span>
            Learn
            <span> → </span>
            Taste DNA
            <span> → </span>
            Recommend
            <span> → </span>
            Eat
          </p>
        </div>

        <div className="stories-v2-next">
          <span>NEXT</span>

          <strong>
            Define what must be true for each story to be considered complete.
          </strong>

          <span>↓</span>
        </div>
      </div>
    </section>
      {/* =========================================================
    PHASE 03 — DEFINE
    SCREEN 03 — ACCEPTANCE CRITERIA
    ========================================================= */}
    <section className="criteria-v2">
      <aside className="criteria-v2-rail">
        <div className="criteria-v2-rail-top">
          <span>03</span>
          <small>DEFINE</small>
        </div>

        <div className="criteria-v2-line" />

        <div className="criteria-v2-rail-bottom">
          <span>03 / 04</span>
          <small>ACCEPTANCE</small>
        </div>
      </aside>

      <div className="criteria-v2-content">
        <Reveal className="criteria-v2-header">
          <span className="criteria-v2-kicker">
            ACCEPTANCE CRITERIA
          </span>

          <h2>
            Define what must be true
            <br />
            <span>before a feature is complete.</span>
          </h2>

          <p>
            The user stories defined intent. Acceptance criteria translated that
            intent into observable product behavior that could be implemented,
            tested, and reviewed.
          </p>
        </Reveal>

        <div className="criteria-v2-system">
          <div className="criteria-v2-system-head">
            <span>CAPABILITY</span>
            <span>ACCEPTANCE CRITERIA</span>
            <span>WHY IT MATTERS</span>
          </div>

          <article className="criteria-v2-row">
            <div className="criteria-v2-capability">
              <span>01</span>

              <div>
                <small>MENU INPUT</small>
                <strong>Scan and interpret the menu</strong>
              </div>
            </div>

            <div className="criteria-v2-checks">
              <div>
                <span>✓</span>
                <p>
                  The diner can capture or upload a restaurant menu.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  The system converts the menu into recognizable dish options.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  The diner can move from the menu input to dish-level guidance.
                </p>
              </div>
            </div>

            <div className="criteria-v2-reason">
              <span>PRODUCT VALUE</span>

              <p>
                The experience has to begin with the menu already in front of the diner.
              </p>
            </div>
          </article>

          <article className="criteria-v2-row">
            <div className="criteria-v2-capability">
              <span>02</span>

              <div>
                <small>DISH INTELLIGENCE</small>
                <strong>Explain unfamiliar dishes</strong>
              </div>
            </div>

            <div className="criteria-v2-checks">
              <div>
                <span>✓</span>
                <p>
                  Each supported dish includes decision-relevant context such as
                  ingredients or flavor characteristics.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Explanations are written in language a diner can understand quickly.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Dish information supports comparison rather than reproducing the menu.
                </p>
              </div>
            </div>

            <div className="criteria-v2-reason">
              <span>PRODUCT VALUE</span>

              <p>
                More information only helps if it reduces uncertainty during the decision.
              </p>
            </div>
          </article>

          <article className="criteria-v2-row">
            <div className="criteria-v2-capability">
              <span>03</span>

              <div>
                <small>PERSONALIZATION</small>
                <strong>Recommend with a rationale</strong>
              </div>
            </div>

            <div className="criteria-v2-checks">
              <div>
                <span>✓</span>
                <p>
                  Recommendations can use available taste or preference context.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  The diner can understand why a recommended dish may fit them.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Recommendation rationale is tied to personal context rather than
                  popularity alone.
                </p>
              </div>
            </div>

            <div className="criteria-v2-reason">
              <span>PRODUCT VALUE</span>

              <p>
                Personalization should be explainable enough to build decision confidence.
              </p>
            </div>
          </article>

          <article className="criteria-v2-row criteria-v2-row-trust">
            <div className="criteria-v2-capability">
              <span>04</span>

              <div>
                <small>DIETARY + ALLERGEN TRUST</small>
                <strong>Communicate uncertainty safely</strong>
              </div>
            </div>

            <div className="criteria-v2-checks">
              <div>
                <span>✓</span>
                <p>
                  Potential conflicts with known restrictions are surfaced clearly.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Unknown or incomplete ingredient information is never presented as
                  confirmed safe.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  When confidence is insufficient, the diner is prompted to verify
                  the concern with restaurant staff.
                </p>
              </div>
            </div>

            <div className="criteria-v2-reason">
              <span>TRUST REQUIREMENT</span>

              <p>
                High-consequence uncertainty needs explicit communication, not false certainty.
              </p>
            </div>
          </article>

          <article className="criteria-v2-row criteria-v2-row-support">
            <div className="criteria-v2-capability">
              <span>05</span>

              <div>
                <small>LEARNING LOOP</small>
                <strong>Capture meal feedback</strong>
              </div>
            </div>

            <div className="criteria-v2-checks">
              <div>
                <span>✓</span>
                <p>
                  The diner can record lightweight feedback after a meal.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Previous meal feedback remains available as dining history.
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Stored feedback can become context for future personalization.
                </p>
              </div>
            </div>

            <div className="criteria-v2-reason">
              <span>SUPPORTING VALUE</span>

              <p>
                The product becomes more useful when previous choices inform future ones.
              </p>
            </div>
          </article>
        </div>

        <div className="criteria-v2-trust-rule">
          <div className="criteria-v2-trust-rule-label">
            <span>AI TRUST RULE</span>
            <small>NON-NEGOTIABLE</small>
          </div>

          <div className="criteria-v2-trust-rule-main">
            <span className="criteria-v2-trust-rule-badge">
              UNCERTAINTY ≠ SAFETY
            </span>

            <p>
              If Chef&apos;s Table cannot verify whether a dish contains a relevant
              allergen, it should
              <strong> communicate uncertainty and recommend staff verification</strong>
              — not infer that the dish is safe.
            </p>
          </div>

          <div className="criteria-v2-trust-rule-state">
            <div>
              <span>DO NOT</span>
              <strong>
                “This dish is safe.”
              </strong>
            </div>

            <div>
              <span>DO</span>
              <strong>
                “Ingredient information is incomplete. Please confirm with staff.”
              </strong>
            </div>
          </div>
        </div>

        <div className="criteria-v2-definition">
          <div className="criteria-v2-definition-label">
            <span>DEFINITION OF DONE</span>
            <small>001</small>
          </div>

          <p>
            A feature is not complete because the interface exists.
            <span> It is complete when the intended user behavior is supported,</span>
            <strong> the edge case is handled, and the result can be tested.</strong>
          </p>
        </div>

        <div className="criteria-v2-next">
          <span>NEXT</span>

          <strong>
            Draw the boundary between what belongs in the MVP and what does not.
          </strong>

          <span>↓</span>
        </div>
      </div>
    </section>
    {/* =========================================================
    PHASE 03 — DEFINE
    SCREEN 04 — MVP SCOPE
    ========================================================= */}

    <section className="scope-v2">
      <aside className="scope-v2-rail">
        <div className="scope-v2-rail-top">
          <span>03</span>
          <small>DEFINE</small>
        </div>

        <div className="scope-v2-line" />

        <div className="scope-v2-rail-bottom">
          <span>04 / 04</span>
          <small>MVP SCOPE</small>
        </div>
      </aside>

      <div className="scope-v2-content">
        <Reveal className="scope-v2-header">
          <span className="scope-v2-kicker">
            MVP SCOPE
          </span>

          <h2>
            Define the boundary
            <br />
            <span>before building the product.</span>
          </h2>

          <p>
            The research created more opportunities than the MVP needed.
            I separated the product into core decision features, supporting
            personalization, and ideas that could wait until the core experience
            was validated.
          </p>
        </Reveal>

        <div className="scope-v2-rule">
          <div className="scope-v2-rule-label">
            <span>SCOPE RULE</span>
            <small>001</small>
          </div>

          <div className="scope-v2-rule-main">
            <p>
              If a capability does not materially improve
              <span> confidence at the moment of ordering,</span>
              it does not belong in the core MVP.
            </p>
          </div>
        </div>

        <div className="scope-v2-board">
          <div className="scope-v2-board-head">
            <span>SCOPE</span>
            <span>CAPABILITY</span>
            <span>ROLE IN THE PRODUCT</span>
          </div>

          <article className="scope-v2-row scope-v2-row-now">
            <div className="scope-v2-status">
              <span>NOW</span>
              <small>CORE</small>
            </div>

            <div className="scope-v2-capability">
              <span>01</span>

              <div>
                <strong>Menu scan + dish parsing</strong>

                <p>
                  Turn the physical or digital menu into structured dish options.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY NOW</span>

              <p>
                This is the entry point to the entire ordering experience.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-now">
            <div className="scope-v2-status">
              <span>NOW</span>
              <small>CORE</small>
            </div>

            <div className="scope-v2-capability">
              <span>02</span>

              <div>
                <strong>Dish intelligence</strong>

                <p>
                  Explain unfamiliar dishes using useful ingredient and flavor context.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY NOW</span>

              <p>
                Reduces the uncertainty identified most consistently in research.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-now">
            <div className="scope-v2-status">
              <span>NOW</span>
              <small>CORE</small>
            </div>

            <div className="scope-v2-capability">
              <span>03</span>

              <div>
                <strong>Personalized recommendations</strong>

                <p>
                  Recommend dishes using available taste and preference context.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY NOW</span>

              <p>
                This is the key shift from generic menu information to personal relevance.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-trust">
            <div className="scope-v2-status">
              <span>NOW</span>
              <small>TRUST</small>
            </div>

            <div className="scope-v2-capability">
              <span>04</span>

              <div>
                <strong>Restriction + allergen awareness</strong>

                <p>
                  Surface possible conflicts and clearly communicate uncertainty.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY NOW</span>

              <p>
                Lower reach does not reduce the consequence of getting this wrong.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-supporting">
            <div className="scope-v2-status">
              <span>LIGHTWEIGHT</span>
              <small>SUPPORTING</small>
            </div>

            <div className="scope-v2-capability">
              <span>05</span>

              <div>
                <strong>Meal rating + dining history</strong>

                <p>
                  Let diners record feedback after a meal and retain past choices.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY INCLUDE</span>

              <p>
                Creates the feedback signal needed for future personalization.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-supporting">
            <div className="scope-v2-status">
              <span>LIGHTWEIGHT</span>
              <small>SUPPORTING</small>
            </div>

            <div className="scope-v2-capability">
              <span>06</span>

              <div>
                <strong>Basic Taste DNA</strong>

                <p>
                  Summarize emerging preferences from explicit profile input and meal feedback.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY INCLUDE</span>

              <p>
                Makes the learning loop visible without overbuilding the personalization system.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-later">
            <div className="scope-v2-status">
              <span>LATER</span>
              <small>EXPANSION</small>
            </div>

            <div className="scope-v2-capability">
              <span>07</span>

              <div>
                <strong>Restaurant discovery</strong>

                <p>
                  Help diners find where to eat before they arrive.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY LATER</span>

              <p>
                Existing products already solve this problem well enough for MVP validation.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-later">
            <div className="scope-v2-status">
              <span>LATER</span>
              <small>EXPANSION</small>
            </div>

            <div className="scope-v2-capability">
              <span>08</span>

              <div>
                <strong>Social + food passport</strong>

                <p>
                  Sharing, restaurant collections, dining identity, and community features.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY LATER</span>

              <p>
                Valuable for retention, but not required to test the core ordering proposition.
              </p>
            </div>
          </article>

          <article className="scope-v2-row scope-v2-row-later">
            <div className="scope-v2-status">
              <span>LATER</span>
              <small>BUSINESS MODEL</small>
            </div>

            <div className="scope-v2-capability">
              <span>09</span>

              <div>
                <strong>Premium experience</strong>

                <p>
                  Paid personalization, advanced insights, or expanded dining intelligence.
                </p>
              </div>
            </div>

            <div className="scope-v2-role">
              <span>WHY LATER</span>

              <p>
                Monetization should follow evidence that the core experience creates repeat value.
              </p>
            </div>
          </article>
        </div>

        <div className="scope-v2-map">
          <div className="scope-v2-map-label">
            <span>MVP SYSTEM</span>
            <small>CORE EXPERIENCE</small>
          </div>

          <div className="scope-v2-map-flow">
            <div>
              <span>01</span>
              <strong>MENU</strong>
              <small>INPUT</small>
            </div>

            <i>→</i>

            <div>
              <span>02</span>
              <strong>UNDERSTAND</strong>
              <small>DISH INTELLIGENCE</small>
            </div>

            <i>→</i>

            <div>
              <span>03</span>
              <strong>PERSONALIZE</strong>
              <small>TASTE + RESTRICTIONS</small>
            </div>

            <i>→</i>

            <div>
              <span>04</span>
              <strong>DECIDE</strong>
              <small>RECOMMENDATION</small>
            </div>

            <i>→</i>

            <div>
              <span>05</span>
              <strong>LEARN</strong>
              <small>RATE + HISTORY</small>
            </div>
          </div>
        </div>

        <div className="scope-v2-final">
          <div className="scope-v2-final-label">
            <span>DEFINED MVP</span>
            <small>READY TO BUILD</small>
          </div>

          <div className="scope-v2-final-main">
            <p>
              Scan a menu.
              <br />
              Understand the options.
              <br />
              Find what fits.
              <br />
              <span>Choose with more confidence.</span>
            </p>
          </div>

          <div className="scope-v2-final-meta">
            <span>CORE QUESTION</span>

            <strong>
              Does personalized menu intelligence improve the ordering decision?
            </strong>
          </div>
        </div>

        <a className="scope-v2-next" href="#build">
          <div>
            <span>04</span>

            <div>
              <small>NEXT CHAPTER</small>
              <strong>BUILD</strong>
            </div>
          </div>

          <p>
            Turn the product definition into
            <strong> a working experience.</strong>
          </p>

          <span>&rarr;</span>
        </a>
      </div>
    </section>

    {/* =========================================================
    PHASE 04 — BUILD
    SCREEN 01 — THE INTERFACE
    ========================================================= */}

    <section className="build-v2" id="build">
      <aside className="build-v2-rail">
        <div className="build-v2-rail-top">
          <span>04</span>
          <small>BUILD</small>
        </div>

        <div className="build-v2-line" />

        <div className="build-v2-rail-bottom">
          <span>01 / 03</span>
          <small>INTERFACE</small>
        </div>
      </aside>

      <div className="build-v2-content">
        <Reveal className="build-v2-header">
          <span className="build-v2-kicker">BUILD</span>

          <h2>
            The definition became
            <br />
            <span>a working interface.</span>
          </h2>

          <p>
            I built the MVP myself. Each screen below exists to satisfy a
            specific acceptance criterion from the previous chapter &mdash; not
            to fill out a feature list. Where a criterion is only partially met,
            it is marked as such.
          </p>
        </Reveal>

        <div className="build-v2-status">
          <div className="build-v2-status-label">
            <span>BUILD STATUS</span>
            <small>001</small>
          </div>

          <div className="build-v2-status-grid">
            <div className="build-v2-status-item build-v2-status-done">
              <span>INTERFACE</span>
              <strong>Built</strong>
              <p>Core screens designed and implemented on iOS.</p>
            </div>

            <div className="build-v2-status-item build-v2-status-progress">
              <span>INTELLIGENCE LAYER</span>
              <strong>In progress</strong>
              <p>Menu parsing and recommendation logic under active development.</p>
            </div>

            <div className="build-v2-status-item build-v2-status-next">
              <span>VALIDATION</span>
              <strong>Not started</strong>
              <p>Usability testing begins once the end-to-end flow is stable.</p>
            </div>
          </div>
        </div>

        {/* ---- SCREEN GALLERY ---- */}

        <div className="build-v2-screens">
          <div className="build-v2-screens-head">
            <span>THE MVP</span>
            <small>CRITERION &rarr; SCREEN</small>
          </div>

          <article className="build-v2-screen">
            <PhoneFrame
              src="/chefs-table/screens/home.png"
              alt="Chef's Table home screen listing recommended dishes from a scanned menu"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>01</span>
                <small>MENU INPUT</small>
              </div>

              <h3>Scan the menu, get options back</h3>

              <p>
                The entry point of the whole product. The diner captures the menu
                in front of them and receives structured dish options rather
                than a wall of unfamiliar names.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SATISFIES</span>
                <strong>
                  &ldquo;The system converts the menu into recognizable dish
                  options.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen build-v2-screen-flip">
            <PhoneFrame
              src="/chefs-table/screens/dish-details.png"
              alt="Chef's Table dish detail screen explaining ingredients and flavor profile"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>02</span>
                <small>DISH INTELLIGENCE</small>
              </div>

              <h3>Explain the dish in decision language</h3>

              <p>
                Research showed diners leave the menu to search for photos and
                ingredients. This screen brings that context inline &mdash;
                described in terms of what the dish tastes like, not just what
                it contains.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SATISFIES</span>
                <strong>
                  &ldquo;Explanations are written in language a diner can
                  understand quickly.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen build-v2-screen-trust">
            <PhoneFrame
              src="/chefs-table/screens/allergy-warning.png"
              alt="Chef's Table allergy warning screen flagging a potential allergen conflict"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>03</span>
                <small>DIETARY + ALLERGEN TRUST</small>
              </div>

              <h3>Flag the risk without claiming safety</h3>

              <p>
                The highest-consequence screen in the product. It surfaces a
                possible conflict with the diner&apos;s stated restrictions and
                routes them to staff verification rather than resolving the
                uncertainty on their behalf.
              </p>

              <div className="build-v2-screen-criterion build-v2-screen-criterion-trust">
                <span>ENFORCES</span>
                <strong>
                  &ldquo;Unknown or incomplete ingredient information is never
                  presented as confirmed safe.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen build-v2-screen-flip">
            <PhoneFrame
              src="/chefs-table/screens/taste-dna.png"
              alt="Chef's Table Taste DNA screen summarizing the diner's flavor preferences"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>04</span>
                <small>PERSONALIZATION</small>
              </div>

              <h3>Make the personalization visible</h3>

              <p>
                Taste DNA is the diner&apos;s preference model made legible. It
                exists so a recommendation can be explained &mdash; if the
                product cannot show why a dish fits, the diner has no reason to
                trust the suggestion.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SATISFIES</span>
                <strong>
                  &ldquo;The diner can understand why a recommended dish may fit
                  them.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen">
            <PhoneFrame
              src="/chefs-table/screens/rate-meal.png"
              alt="Chef's Table rate meal screen for recording feedback after eating"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>05</span>
                <small>LEARNING LOOP</small>
              </div>

              <h3>Capture feedback cheaply</h3>

              <p>
                Rating is deliberately lightweight. The goal is a usable signal
                for personalization, not a review platform &mdash; anything
                heavier would not survive the end of a meal.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SATISFIES</span>
                <strong>
                  &ldquo;The diner can record lightweight feedback after a
                  meal.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen build-v2-screen-flip">
            <PhoneFrame
              src="/chefs-table/screens/meal.png"
              alt="Chef's Table dining history screen showing previously eaten meals"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>06</span>
                <small>DINING MEMORY</small>
              </div>

              <h3>Keep the history that feeds the loop</h3>

              <p>
                Past meals remain available as context. This was scoped as
                supporting rather than core &mdash; it earns its place by making
                the personalization better over time, not by being useful on
                first use.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SATISFIES</span>
                <strong>
                  &ldquo;Previous meal feedback remains available as dining
                  history.&rdquo;
                </strong>
              </div>
            </div>
          </article>

          <article className="build-v2-screen">
            <PhoneFrame
              src="/chefs-table/screens/profile.png"
              alt="Chef's Table profile screen for setting dietary restrictions and preferences"
              sizes="(max-width: 900px) 55vw, 250px"
            />

            <div className="build-v2-screen-copy">
              <div className="build-v2-screen-meta">
                <span>07</span>
                <small>PROFILE INPUT</small>
              </div>

              <h3>Collect the context personalization needs</h3>

              <p>
                Restrictions and preferences have to be stated before the
                product can be useful about them. This screen is the cold-start
                answer &mdash; enough explicit input to make the first
                recommendation personal.
              </p>

              <div className="build-v2-screen-criterion">
                <span>SUPPORTS</span>
                <strong>
                  &ldquo;Recommendations can use available taste or preference
                  context.&rdquo;
                </strong>
              </div>
            </div>
          </article>
        </div>

        {/* ---- TRUST RULE IN PRACTICE ---- */}

        <div className="build-v2-trust">
          <div className="build-v2-trust-label">
            <span>TRUST RULE IN PRACTICE</span>
            <small>NON-NEGOTIABLE</small>
          </div>

          <div className="build-v2-trust-main">
            <p>
              The allergen rule defined in Chapter 03 is the one place where the
              product is deliberately
              <span> less confident </span>
              than it could be.
            </p>

            <strong>
              A recommendation engine that overstates certainty about an
              allergen is not a better product. It is a liability.
            </strong>
          </div>
        </div>

        {/* ---- RESERVED DEMO ---- */}

        <div className="build-v2-demo">
          <div className="build-v2-demo-label">
            <span>INTERACTIVE DEMO</span>
            <small>RESERVED</small>
          </div>

          <div className="build-v2-demo-slot">
            <div className="build-v2-demo-slot-inner">
              <strong>Live walkthrough coming here</strong>

              <p>
                A recorded end-to-end demo &mdash; scan, understand,
                personalize, decide, rate &mdash; will replace this panel once
                the intelligence layer is complete.
              </p>
            </div>
          </div>
        </div>

        {/* ---- VALIDATION PLAN ---- */}

        <div className="build-v2-validation">
          <div className="build-v2-validation-label">
            <span>HOW I&apos;LL KNOW IT WORKED</span>
            <small>NEXT</small>
          </div>

          <div className="build-v2-validation-hypothesis">
            <span>THE HYPOTHESIS</span>

            <p>
              Chef&apos;s Table helps a diner make a
              <strong> more confident dish choice </strong>
              from an unfamiliar menu.
            </p>
          </div>

          <div className="build-v2-validation-grid">
            <article>
              <span>01</span>
              <strong>Decision confidence</strong>
              <p>
                Self-reported confidence before and after using the product on a
                menu the diner has not seen before.
              </p>
            </article>

            <article>
              <span>02</span>
              <strong>Time to decide</strong>
              <p>
                How long the choice takes with the product versus the diner&apos;s
                current habit of leaving the menu to search.
              </p>
            </article>

            <article>
              <span>03</span>
              <strong>Recommendation acceptance</strong>
              <p>
                Whether the diner orders a recommended dish &mdash; and whether
                they rate it positively afterwards.
              </p>
            </article>

            <article>
              <span>04</span>
              <strong>Trust behavior</strong>
              <p>
                Whether diners with restrictions act on the verification prompt
                rather than treating a flag as an all-clear.
              </p>
            </article>
          </div>
        </div>

        {/* ---- REFLECTION ---- */}

        <div className="build-v2-reflection">
          <div className="build-v2-reflection-label">
            <span>WHAT I&apos;D DO DIFFERENTLY</span>
            <small>001</small>
          </div>

          <div className="build-v2-reflection-list">
            <article>
              <span>01</span>

              <div>
                <strong>Three interviews set a direction, not a conclusion</strong>

                <p>
                  The sample was small enough that I treated the scores as
                  directional judgment rather than evidence. Before committing
                  further, I would widen the research &mdash; particularly among
                  diners with restrictions, where reach was lowest but
                  consequence was highest.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>

              <div>
                <strong>I would test the trust rule earlier</strong>

                <p>
                  The allergen behavior is the riskiest part of the product and
                  the last thing I built. Communicating uncertainty well is a
                  design problem, and I should have prototyped that language
                  before the rest of the interface.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>

              <div>
                <strong>Cold start deserved more scope</strong>

                <p>
                  Personalization is the core promise, but a first-time diner has
                  no history. I scoped Taste DNA as lightweight; in hindsight the
                  first-session experience is where the product either earns
                  trust or loses it.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="build-v2-close">
          <p>
            Scan a menu. Understand the options. Find what fits.
            <span> Choose with more confidence.</span>
          </p>

          <Link href="/" className="build-v2-close-link">
            Back to all work
            <i aria-hidden="true">&rarr;</i>
          </Link>
        </div>
      </div>
    </section>
    </main>
  );
}