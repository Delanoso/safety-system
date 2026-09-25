"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const MODULES = [
  {
    group: "Health & Safety",
    detail:
      "Keep people competent and protected — then prove it when asked.",
    items: [
      "Training certificates with expiry tracking and gap analysis",
      "Occupational medicals with compliance-by-type reporting",
      "PPE stock, size lists, issue register, and e-sign acknowledgements",
      "Safety committee elections, meetings, minutes, and action follow-up",
      "Rule-based risk assessments from built-in HSE templates",
      "Hazardous chemicals register with SDS uploads and PDF export",
      "Emergency drill logging for fire, evacuation, spill, and more",
    ],
  },
  {
    group: "Compliance",
    detail:
      "Turn legal and audit obligations into live registers your team can work from.",
    items: [
      "Legal registers and curated legislation references for your workplace",
      "Full HSE audit checklist (277 items) with status and evidence notes",
      "Formal health & safety appointments with dual electronic signatures",
      "Daily, weekly, and monthly inspections by department",
      "Non-conformance reports linked to inspection findings",
      "Incident, near-miss, and accident investigation with cost analysis",
    ],
  },
  {
    group: "Site Safety",
    detail:
      "Control who is on site and what high-risk work is allowed each day.",
    items: [
      "Toolbox talks with attendee signature links",
      "Induction training records and expiry tracking",
      "Visitor register with host, purpose, and on-site status",
      "Permit to work for hot work, height, confined space, and related tasks",
      "Maintenance schedules for plant, vehicles, and lifting equipment",
    ],
  },
  {
    group: "Contractor Management",
    detail:
      "Bring contractors into the same compliance standard as your own workforce.",
    items: [
      "Contractor safety-file portal with secure upload links",
      "Scored compliance across OHS document sections",
      "Document library for procedures, certificates, and company files",
      "Clear visibility of who is current — and who is not",
    ],
  },
];

const PILLARS = [
  {
    title: "One system, every site",
    text: "Replace scattered spreadsheets, WhatsApp threads, and paper packs with one live register your teams actually use.",
  },
  {
    title: "Built for real HSE work",
    text: "Inspections, incidents, appointments, PPE, permits, and contractors — structured for day-to-day operations, not just storage.",
  },
  {
    title: "Close the loop",
    text: "Capture the work, collect signatures, export branded PDFs, and keep reminders moving until actions are done.",
  },
];

const STEPS = [
  {
    title: "Register your company",
    text: "Create a secure company workspace, invite users, set roles, and control which modules each person can open.",
  },
  {
    title: "Run the day-to-day",
    text: "Log inspections, incidents, PPE issues, visitors, permits, appointments, and contractor files from one dashboard.",
  },
  {
    title: "Prove compliance",
    text: "Send signature links via WhatsApp, download branded PDFs, and track reviews before they fall overdue.",
  },
];

const POINTS = [
  {
    label: "Multi-company tenancy",
    text: "Each company keeps its own data, logo, brand colour, and user access — ideal for groups and consultants.",
  },
  {
    label: "Module-level access control",
    text: "Admins decide exactly which modules each user can open, so site staff only see what they need.",
  },
  {
    label: "WhatsApp e-signatures",
    text: "Appointments, incidents, PPE issues, and toolbox talks signed remotely without chasing email trails.",
  },
  {
    label: "Branded PDF exports",
    text: "Company name and logo on the records auditors, clients, and insurers expect to receive.",
  },
  {
    label: "Rule-based risk drafts",
    text: "Salus builds assessment drafts from built-in HSE templates — fast to start, editable by your team.",
  },
  {
    label: "Contractor portal",
    text: "Share a secure upload link and score safety-file completeness across required OHS sections.",
  },
  {
    label: "Works in any country",
    text: "Configure company structure, appointments, registers, and documents to match your local HSE requirements.",
  },
];

const AUDIENCE = [
  {
    title: "Operations & site managers",
    text: "Run inspections, permits, visitors, and toolbox talks without losing paperwork between shifts.",
  },
  {
    title: "SHE / HSE officers",
    text: "Keep appointments, medicals, training, chemicals, and audit evidence current in one place.",
  },
  {
    title: "Directors & owners",
    text: "See compliance posture across modules — and hand over clean PDFs when clients or inspectors ask.",
  },
];

function useReveal() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = root.querySelectorAll<HTMLElement>(".brochure-reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}

export default function BrochurePage() {
  const rootRef = useReveal();

  return (
    <main ref={rootRef} className="brochure-shell">
      <div className="brochure-bg" aria-hidden />

      <header className="brochure-nav">
        <Link href="/brochure" className="brochure-nav__brand">
          Salus
        </Link>
        <div className="brochure-nav__links">
          <a className="brochure-btn brochure-btn--primary" href="/salus-brochure.pdf" download>
            Download
          </a>
          <Link className="brochure-btn brochure-btn--ghost" href="/">
            Sign in
          </Link>
        </div>
      </header>

      <section className="brochure-hero" aria-label="Salus introduction">
        <div className="brochure-hero__visual" aria-hidden />
        <div className="brochure-hero__copy">
          <h1 className="brochure-brand">Salus</h1>
          <p className="brochure-hero__headline">
            Health &amp; safety that stays audit-ready.
          </p>
          <p className="brochure-hero__lede">
            One platform for workplaces anywhere to run HSE, close actions, and
            keep evidence ready for inspectors, clients, and insurers.
          </p>
          <div className="brochure-hero__ctas">
            <a className="brochure-btn brochure-btn--primary" href="/salus-brochure.pdf" download>
              Download
            </a>
            <Link className="brochure-btn brochure-btn--ghost" href="/signup">
              Register your company
            </Link>
          </div>
        </div>
      </section>

      <section className="brochure-section brochure-reveal" id="why">
        <span className="brochure-section__eyebrow">Why Salus</span>
        <h2 className="brochure-section__title">Built for how HSE actually runs</h2>
        <p className="brochure-section__text">
          Salus is the Health &amp; Safety Management System from Delano Solutions.
          It gives multi-site teams clear ownership, live registers, electronic
          signatures, and branded records — so compliance is something you operate,
          not something you scramble to reconstruct.
        </p>
        <div className="brochure-pillars">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="brochure-pillar">
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brochure-section brochure-reveal" id="who">
        <span className="brochure-section__eyebrow">Who it helps</span>
        <h2 className="brochure-section__title">Made for the people who carry HSE</h2>
        <p className="brochure-section__text">
          From the shop floor to the boardroom — everyone works from the same system
          of record.
        </p>
        <div className="brochure-pillars">
          {AUDIENCE.map((item) => (
            <article key={item.title} className="brochure-pillar">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="brochure-section brochure-reveal" id="modules">
        <span className="brochure-section__eyebrow">Inside the platform</span>
        <h2 className="brochure-section__title">Everything your safety file needs</h2>
        <p className="brochure-section__text">
          Four pillars cover the full system. Each one is module-deep — so a sales
          walkthrough can stay clear while still showing real capability.
        </p>
        <div className="brochure-modules">
          {MODULES.map((mod) => (
            <article key={mod.group} className="brochure-module brochure-module--rich">
              <h3>{mod.group}</h3>
              <div>
                <p>{mod.detail}</p>
                <ul className="brochure-module__list">
                  {mod.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brochure-section brochure-reveal" id="how">
        <span className="brochure-section__eyebrow">How it works</span>
        <h2 className="brochure-section__title">Live in three clear steps</h2>
        <p className="brochure-section__text">
          From first login to day-to-day compliance — without rebuilding your process
          from scratch.
        </p>
        <div className="brochure-steps">
          {STEPS.map((step) => (
            <article key={step.title} className="brochure-step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="brochure-buy">
          <span className="brochure-section__eyebrow">Or buy your own copy</span>
          <h3 className="brochure-buy__title">
            Buy a copy of the system for your own company
          </h3>
          <p className="brochure-buy__text">
            Prefer a dedicated Salus deployment for your organisation? Contact Delano
            Solutions to purchase and set up your own copy.
          </p>
          <p className="brochure-buy__contact">
            <span>Delano Solutions</span>
            <a href="mailto:Erich@delanosolutions.co.za">Erich@delanosolutions.co.za</a>
          </p>
        </div>
      </section>

      <section className="brochure-section brochure-reveal" id="edge">
        <span className="brochure-section__eyebrow">What stands out</span>
        <h2 className="brochure-section__title">Details that win the deal</h2>
        <p className="brochure-section__text">
          The capabilities prospects remember after a short demo — the ones that
          replace email trails, shared drives, and lost paperwork.
        </p>
        <ul className="brochure-points">
          {POINTS.map((point) => (
            <li key={point.label}>
              <span>
                <strong>{point.label}.</strong> {point.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="brochure-close brochure-reveal" id="next">
        <h2>Show Salus. Leave the brochure behind.</h2>
        <p>
          Open this page on any device for a live walkthrough, then download the PDF
          so prospects can share it with their safety committee or management team.
          To buy a dedicated copy for your company, contact Delano Solutions at{" "}
          <a href="mailto:Erich@delanosolutions.co.za" style={{ color: "#b8fff7" }}>
            Erich@delanosolutions.co.za
          </a>
          .
        </p>
        <div className="brochure-hero__ctas">
          <a className="brochure-btn brochure-btn--primary" href="/salus-brochure.pdf" download>
            Download
          </a>
          <Link className="brochure-btn brochure-btn--ghost" href="/">
            Go to login
          </Link>
          <Link className="brochure-btn brochure-btn--teal" href="/signup">
            Start company registration
          </Link>
        </div>
      </section>

      <footer className="brochure-footer">
        <span>Salus · Delano Solutions · Online Safety Solutions</span>
        <span>
          <a href="/salus-brochure.pdf" download>
            salus-brochure.pdf
          </a>
          {" · "}
          <Link href="/">Sign in</Link>
        </span>
      </footer>
    </main>
  );
}
