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
    desc: "Set criteria for industry, company size, buyer role, technology, and geography based on your ideal customer profile.",
  },
  {
    icon: Database,
    title: "Verified & Enriched",
    desc: "Add company details and contact fields your team needs to review, segment, and prioritize prospects.",
  },
  {
    icon: Clock,
    title: "Clear Project Scope",
    desc: "Agree on targeting criteria, required fields, and delivery format before research begins.",
  },
  {
    icon: Shield,
    title: "Research Transparency",
    desc: "Set clear sourcing requirements, exclusions, and review expectations for each project.",
  },
  {
    icon: Users,
    title: "Decision-Maker Focus",
    desc: "Focus research on the job titles and buying roles relevant to your product and target accounts.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    desc: "Receive structured delivery files with agreed fields and notes to help your team review the research.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            B2B prospect research that fits your sales process
          </h2>
          <p className="text-slate-400">
            Built for teams that need a clear, relevant starting point for targeted outbound.
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
