"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const MODULES = [
  {
    group: "Health & Safety",
    detail:
      "Training certificates and gap analysis, occupational medicals, PPE stock and issue with e-sign, SHE committee elections and meetings, rule-based risk assessments, hazardous chemicals with SDS, and emergency drill logs.",
  },
  {
    group: "Compliance",
    detail:
      "SA legal registers, a 277-item HSE audit checklist, formal legal appointments (Section 16, SHE reps and more), daily/weekly/monthly inspections with NCRs, and full incident investigation with cost analysis.",
  },
  {
    group: "Site Safety",
    detail:
      "Toolbox talks with attendee signatures, induction training, visitor check-in, and permit to work for hot work, height, confined space, and related high-risk tasks.",
  },
  {
    group: "Contractors & Docs",
    detail:
      "Contractor safety-file portal with token uploads and scored compliance, plus a structured document library for procedures, certificates, and company files.",
  },
];

const PILLARS = [
  {
    title: "One system, every site",
    text: "Replace scattered spreadsheets and paper packs with one live register your teams actually use.",
  },
  {
    title: "Built for SA HSE",
    text: "OHSA-aligned appointments, SHE structures, legal registers, and audit evidence ready for inspection.",
  },
  {
    title: "Close the loop",
    text: "Capture work, collect signatures, export branded PDFs, and keep reminders moving until it is done.",
  },
];

const STEPS = [
  {
    title: "Register your company",
    text: "Create a secure company space, invite users, and control which modules each person can open.",
  },
  {
    title: "Run the day-to-day",
    text: "Log inspections, incidents, PPE issues, visitors, permits, and appointments from one dashboard.",
  },
  {
    title: "Prove compliance",
    text: "Send WhatsApp signature links, download branded PDFs, and track reviews before they fall overdue.",
  },
];

const POINTS = [
  {
    label: "Multi-company tenancy",
    text: "Each company keeps its own data, branding, and user access.",
  },
  {
    label: "WhatsApp e-signatures",
    text: "Appointments, incidents, PPE issues, and toolbox talks signed remotely.",
  },
  {
    label: "Branded PDF exports",
    text: "Company logo and name on the records auditors and clients expect.",
  },
  {
    label: "Rule-based risk drafts",
    text: "Salus builds assessment drafts from built-in HSE templates — no external AI required.",
  },
  {
    label: "Contractor portal",
    text: "Share a secure upload link and score safety-file completeness across OHS sections.",
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
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
            One platform for South African workplaces to run HSE, close actions,
            and keep evidence in one place.
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
          Salus is the Health &amp; Safety Management System from Delano Solutions
          — designed for multi-site teams that need clear ownership, live records,
          and proof ready when an inspector, client, or insurer asks.
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

      <section className="brochure-section brochure-reveal" id="modules">
        <span className="brochure-section__eyebrow">Inside the platform</span>
        <h2 className="brochure-section__title">Everything your safety file needs</h2>
        <p className="brochure-section__text">
          Sales walkthroughs stay simple: four pillars cover the full system without
          drowning people in menu items.
        </p>
        <div className="brochure-modules">
          {MODULES.map((mod) => (
            <article key={mod.group} className="brochure-module">
              <h3>{mod.group}</h3>
              <p>{mod.detail}</p>
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
      </section>

      <section className="brochure-section brochure-reveal" id="edge">
        <span className="brochure-section__eyebrow">What stands out</span>
        <h2 className="brochure-section__title">Details that win the deal</h2>
        <p className="brochure-section__text">
          The features prospects remember after a short demo — the ones that replace
          email trails and lost paperwork.
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
          so prospects can share it with their SHE committee or management team.
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
