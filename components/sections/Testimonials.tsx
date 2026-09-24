"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

const outcomes = [
  {
    title: "Accounts that fit your ICP",
    text: "Research target companies against your industry, geography, size, and other qualification criteria.",
    label: "Account research",
  },
  {
    title: "Relevant buyer contacts",
    text: "Identify decision makers and useful business contact details for the roles involved in your sale.",
    label: "Contact discovery",
  },
  {
    title: "Data ready for your workflow",
    text: "Organize and enrich records with the fields your team needs for review, prioritization, and outreach.",
    label: "Enrichment and delivery",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Prospect research built around your sales process
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Start with a clear brief and get organized research focused on the
            companies and people your team wants to reach.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((outcome, i) => (
            <motion.article
              key={outcome.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <BadgeCheck className="w-6 h-6 text-brand-400 mb-5" />
              <p className="text-xs uppercase tracking-wider text-brand-300 mb-2">
                {outcome.label}
              </p>
              <h3 className="font-semibold text-white mb-3">{outcome.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {outcome.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
