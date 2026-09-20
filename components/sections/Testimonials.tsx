"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We cut our cost-per-meeting by 40% after switching to DreamLeadAgency lists. The data quality is consistently high.",
    name: "Sarah Chen",
    role: "VP Sales, CloudScale",
  },
  {
    quote:
      "Their enrichment fixed thousands of incomplete CRM records in under a week. Our SDRs actually trust the data now.",
    name: "Marcus Reid",
    role: "RevOps Lead, NexaPay",
  },
  {
    quote:
      "Fast, transparent, and no fluff. We got influencer contacts that matched our exact niche and engagement criteria.",
    name: "Priya Patel",
    role: "Growth Manager, BrandLab",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What our clients say
          </h2>
          <p className="text-slate-400">
            Results from teams that rely on DreamLeadAgency.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-brand-400 text-brand-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
