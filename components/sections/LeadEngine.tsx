"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Crosshair,
  Database,
  Mail,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Crosshair,
    title: "Define your ICP",
    description: "We turn your best customers into a precise targeting brief.",
  },
  {
    number: "02",
    icon: Database,
    title: "Build & verify",
    description: "Our researchers source, enrich, and validate every record.",
  },
  {
    number: "03",
    icon: Mail,
    title: "Launch outreach",
    description:
      "Your team gets a clean, campaign-ready list built to convert.",
  },
];

const accounts = [
  {
    company: "Northstar AI",
    role: "VP of Revenue",
    fit: "98% fit",
    color: "bg-amber-400",
  },
  {
    company: "Vertex Cloud",
    role: "Head of Sales",
    fit: "96% fit",
    color: "bg-sky-400",
  },
  {
    company: "Morrow Systems",
    role: "Founder & CEO",
    fit: "94% fit",
    color: "bg-rose-400",
  },
];

export default function LeadEngine() {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/35 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              <Sparkles className="h-4 w-4" />
              The DreamLeadAgency method
            </div>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-[1.08]">
              Turn a sharp ICP into a full pipeline.
            </h2>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-slate-400 lg:justify-self-end">
            Great outbound starts long before the first email. We combine human
            research and clean data so your reps spend their time in
            conversations, not spreadsheets.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className="group relative border-t border-slate-700/80 pt-5"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-brand-400">
                  {step.number}
                </span>
                <step.icon className="h-5 w-5 text-slate-500 transition-colors group-hover:text-brand-300" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/75 p-5 shadow-2xl shadow-black/20 md:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
        >
          <div>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Building2 className="h-5 w-5" />
            </div>
            <p className="mb-2 text-sm font-medium text-brand-300">
              Your next best accounts
            </p>
            <h3 className="mb-3 text-2xl font-bold text-white">
              A prospect list your SDRs will actually use.
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Every delivery includes the context behind the contact, not just a
              name and an email address.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <BadgeCheck className="h-4 w-4 text-brand-400" />
              Verified against multiple sources
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 md:p-4">
            <div className="mb-3 flex items-center justify-between border-b border-slate-800 px-2 pb-3">
              <span className="text-xs font-medium text-slate-400">
                ICP match report
              </span>
              <span className="flex items-center gap-1.5 text-xs text-brand-300">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                Live sample
              </span>
            </div>
            <div className="space-y-2">
              {accounts.map((account) => (
                <div
                  key={account.company}
                  className="flex items-center gap-3 rounded-lg border border-slate-800/80 bg-slate-950/70 p-3"
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${account.color} text-xs font-bold text-slate-950`}
                  >
                    {account.company.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {account.company}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {account.role}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-xs font-medium text-brand-300">
                    {account.fit}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-slate-600" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
