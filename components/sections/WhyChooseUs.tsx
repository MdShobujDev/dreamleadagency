"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Clock,
  Database,
  Shield,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Filter by industry, company size, role, tech stack, and geography so every lead matches your ICP.",
  },
  {
    icon: Database,
    title: "Verified & Enriched",
    desc: "Multi-source validation, email verification, and firmographic enrichment keep data fresh and accurate.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most orders delivered in 3–7 business days. Rush options available when you need leads yesterday.",
  },
  {
    icon: Shield,
    title: "Compliance First",
    desc: "GDPR, CCPA, and CAN-SPAM aligned processes. Transparent sourcing and opt-out handling built in.",
  },
  {
    icon: Users,
    title: "Decision-Maker Focus",
    desc: "We prioritize contacts who actually buy — C-level, VPs, and budget holders in your niche.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "Clear delivery reports, sample previews, and revision windows so you know exactly what you’re getting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why teams switch to ProspectListBuilding
          </h2>
          <p className="text-slate-400">
            Built for sales and marketing teams who need quality over quantity —
            and measurable pipeline impact.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
