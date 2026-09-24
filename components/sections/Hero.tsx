"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Verified decision-maker contacts",
  "Industry & geo targeting",
  "GDPR & CCPA compliant data",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Built for modern revenue teams
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Your pipeline deserves{" "}
              <span className="bg-gradient-to-r from-brand-400 to-emerald-300 bg-clip-text text-transparent">
                better leads
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
              Stop chasing stale spreadsheets. Get precision-targeted B2B
              prospects, enriched data, and research your sales team can act on
              immediately.
            </p>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-glow hover:shadow-glow-lg hover:from-brand-400 hover:to-brand-500 transition-all"
              >
                Start an Order
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/80 border border-slate-700 rounded-xl hover:bg-slate-700/80 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-sm font-medium text-slate-300">
                    Pipeline signal
                  </span>
                  <p className="mt-1 text-xs text-slate-500">
                    Weekly account intelligence
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-brand-500/20 text-brand-400">
                  Active
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Accounts matched to ICP",
                    value: "2,847",
                    change: "+18%",
                  },
                  {
                    label: "Verified decision-makers",
                    value: "97.2%",
                    change: "+2.1%",
                  },
                  {
                    label: "Ready for outreach",
                    value: "99.4%",
                    change: "On track",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                  >
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">
                        {stat.label}
                      </p>
                      <p className="text-xl font-bold text-white">
                        {stat.value}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-brand-400">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-700/50 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  Teams using ProspectListBuilding this week
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
