"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Database,
  ShoppingCart,
  Users,
  Globe,
  Headphones,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    href: "/services/lead-generation",
    icon: Search,
    title: "Lead Generation",
    desc: "Targeted B2B contact lists built to your ICP.",
  },
  {
    href: "/services/data-enrichment",
    icon: Database,
    title: "Data Enrichment",
    desc: "Fill gaps and verify existing CRM records.",
  },
  {
    href: "/services/ecommerce-leads",
    icon: ShoppingCart,
    title: "Ecommerce Leads",
    desc: "Store owners, buyers, and marketplace sellers.",
  },
  {
    href: "/services/influencer-leads",
    icon: Users,
    title: "Influencer Leads",
    desc: "Creators and micro-influencers by niche & reach.",
  },
  {
    href: "/services/web-research",
    icon: Globe,
    title: "Web Research",
    desc: "Custom research projects and competitor intel.",
  },
  {
    href: "/services/virtual-assistant",
    icon: Headphones,
    title: "Virtual Assistant",
    desc: "Dedicated support for outreach & data tasks.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Services that scale with you
            </h2>
            <p className="text-slate-400 max-w-lg">
              From one-off lists to ongoing enrichment — pick what you need.
            </p>
          </div>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300"
          >
            Get a custom quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={s.href}
                className="block h-full glass glass-hover rounded-2xl p-6 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center mb-4 group-hover:bg-brand-500/25 transition-colors">
                  <s.icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-brand-300 transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
