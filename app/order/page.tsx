"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { n: 1, title: "Basics", desc: "Industry & geo" },
  { n: 2, title: "Targeting", desc: "Roles & tech" },
  { n: 3, title: "Volume", desc: "Size & deadline" },
  { n: 4, title: "Contact", desc: "Your details" },
];

const industries = ["Technology", "Healthcare", "Finance", "E-commerce", "Manufacturing", "Education", "Real Estate", "Marketing", "Consulting", "SaaS", "Other"];
const geographies = ["United States", "Canada", "United Kingdom", "Germany", "France", "Australia", "Netherlands", "Sweden", "Switzerland", "Other"];
const sizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const roles = ["CEO / Founder", "CTO / VP Engineering", "CMO / VP Marketing", "CRO / VP Sales", "CFO", "Head of Operations", "Procurement", "Other"];
const techs = ["Salesforce", "HubSpot", "AWS", "Azure", "Shopify", "SAP", "Oracle", "Slack", "None / Other"];

export default function OrderPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    industry: "",
    geography: [] as string[],
    companySizes: [] as string[],
    roles: [] as string[],
    techFilters: [] as string[],
    volume: 100,
    deadline: "",
    contactName: "",
    contactEmail: "",
    company: "",
    consent: false,
    website: "",
  });

  function toggle(arr: string[], value: string) {
    return arr.includes(value) ? arr.filter((x) => x !== value) : [...arr, value];
  }

  function next() {
    if (step === 1 && !form.industry) return toast.error("Select an industry");
    if (step === 3 && form.volume < 1) return toast.error("Volume must be at least 1");
    if (step === 4) {
      if (!form.contactName || !form.contactEmail) return toast.error("Name and email required");
      if (!form.consent) return toast.error("Please accept the terms");
      submit();
      return;
    }
    setStep((s) => Math.min(4, s + 1));
  }

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      toast.success("Order submitted! Confirmation email sent.");
      router.push("/thank-you");
    } catch {
      toast.error("Failed to submit. Please try again.");
      setLoading(false);
    }
  }

  const chip = (active: boolean) =>
    cn(
      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer",
      active
        ? "bg-brand-500/20 border-brand-500/50 text-brand-300"
        : "bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-600"
    );

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Place an order</h1>
          <p className="text-slate-400 text-sm">Multi-step form · takes about 2 minutes</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s.n} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors",
                    step > s.n
                      ? "bg-brand-500 border-brand-500 text-white"
                      : step === s.n
                      ? "border-brand-500 text-brand-400"
                      : "border-slate-700 text-slate-500"
                  )}
                >
                  {step > s.n ? <Check className="w-4 h-4" /> : s.n}
                </div>
                <span className="hidden sm:block text-[10px] mt-1.5 text-slate-500">{s.title}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={cn("flex-1 h-0.5 mx-2", step > s.n ? "bg-brand-500" : "bg-slate-800")} />
              )}
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Industry *</label>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <button key={ind} type="button" onClick={() => setForm({ ...form, industry: ind })} className={chip(form.industry === ind)}>
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Geography</label>
                <div className="flex flex-wrap gap-2">
                  {geographies.map((g) => (
                    <button key={g} type="button" onClick={() => setForm({ ...form, geography: toggle(form.geography, g) })} className={chip(form.geography.includes(g))}>
                      {g}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Company size</label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((s) => (
                    <button key={s} type="button" onClick={() => setForm({ ...form, companySizes: toggle(form.companySizes, s) })} className={chip(form.companySizes.includes(s))}>
                      {s} employees
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-3">Target roles</label>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <button key={r} type="button" onClick={() => setForm({ ...form, roles: toggle(form.roles, r) })} className={chip(form.roles.includes(r))}>
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Tech filters (optional)</label>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <button key={t} type="button" onClick={() => setForm({ ...form, techFilters: toggle(form.techFilters, t) })} className={chip(form.techFilters.includes(t))}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Volume (number of contacts) *</label>
                <input
                  type="number"
                  min={1}
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Desired deadline</label>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 text-sm"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Your name *</label>
                  <input required value={form.contactName} onChange={(e) => setForm({ ...form, contactName: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Email *</label>
                  <input required type="email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1.5">Company</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} className="mt-1 rounded border-slate-600 text-brand-500 focus:ring-brand-500" />
                <span className="text-xs text-slate-400">
                  I agree to the Terms of Service and Privacy Policy, and consent to being contacted about this order.
                </span>
              </label>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-slate-400 hover:text-white disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
            <button
              type="button"
              onClick={next}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl hover:from-brand-400 hover:to-brand-500 disabled:opacity-60"
            >
              {step === 4 ? (loading ? "Submitting…" : "Submit order") : "Continue"}
              {step < 4 && <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
