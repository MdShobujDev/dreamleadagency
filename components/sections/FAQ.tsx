"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How do you source and verify leads?",
    a: "We combine public firmographic sources, professional networks, and multi-step email/phone verification. Every contact is checked for deliverability and role accuracy before delivery.",
  },
  {
    q: "What is a typical turnaround time?",
    a: "Standard orders ship in 3–7 business days depending on volume and complexity. Rush delivery (24–48h) is available for many list types.",
  },
  {
    q: "Is the data GDPR / CCPA compliant?",
    a: "Yes. We follow lawful bases for processing, maintain suppression lists, and provide clear documentation of data origin and handling practices.",
  },
  {
    q: "Can I request a sample before ordering?",
    a: "Absolutely. Most services offer a free sample of 10–25 contacts so you can evaluate fit and quality before committing.",
  },
  {
    q: "What happens if data accuracy is below expectations?",
    a: "We offer a replacement or credit policy for verified inaccurate records within the agreed window. Details are in your order confirmation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-900/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Frequently asked questions</h2>
          <p className="text-slate-400">Quick answers about process, quality, and compliance.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full px-5 py-4 text-left"
              >
                <span className="font-medium text-white text-sm pr-4">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 text-slate-400 shrink-0 transition-transform", open === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
