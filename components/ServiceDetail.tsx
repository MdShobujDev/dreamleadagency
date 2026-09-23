import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Layers3, ShieldCheck } from "lucide-react";

type ServiceDetailProps = {
  title: string;
  eyebrow: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  fields: string[];
  steps: { title: string; text: string }[];
  outcome: string;
};

export default function ServiceDetail({
  title, eyebrow, description, idealFor, deliverables, fields, steps, outcome,
}: ServiceDetailProps) {
  return (
    <main className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 mb-14 items-end">
          <div className="max-w-3xl">
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">{title}</h1>
            <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
          </div>
          <div className="rounded-2xl border border-brand-500/20 bg-brand-500/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2">Best for</p>
            <p className="text-sm leading-relaxed text-slate-300">{idealFor}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5"><FileCheck2 className="w-5 h-5 text-brand-400" /><h2 className="text-xl font-semibold text-white">What&apos;s included</h2></div>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((item) => <div key={item} className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />{item}</div>)}
              </div>
            </section>
            <section className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5"><Layers3 className="w-5 h-5 text-brand-400" /><h2 className="text-xl font-semibold text-white">Fields tailored to your workflow</h2></div>
              <div className="flex flex-wrap gap-2">{fields.map((field) => <span key={field} className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1.5 text-xs text-slate-300">{field}</span>)}</div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">We agree required fields and exclusions before production. Delivery is formatted for spreadsheet review, CRM import, or your preferred workflow.</p>
            </section>
            <section className="glass rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white mb-6">From brief to usable data</h2>
              <ol className="space-y-5">
                {steps.map((step, index) => <li key={step.title} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-400">{index + 1}</span><div><h3 className="font-medium text-white">{step.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-400">{step.text}</p></div></li>)}
              </ol>
            </section>
            <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 md:p-8">
              <div className="flex gap-3"><ShieldCheck className="w-5 h-5 mt-0.5 text-brand-400 shrink-0" /><div><h2 className="font-semibold text-white mb-2">Quality and responsible outreach</h2><p className="text-sm leading-relaxed text-slate-400">Records are researched against the agreed brief and reviewed before delivery. We recommend that clients use transparent, relevant messaging, honor opt-outs, and apply the privacy and marketing rules that govern their markets. No provider can guarantee campaign results; list quality is one part of a strong outbound system.</p></div></div>
            </section>
          </div>
          <aside>
            <div className="glass rounded-2xl p-6 sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-2">Expected outcome</p>
              <p className="text-sm leading-relaxed text-slate-300 mb-6">{outcome}</p>
              <h2 className="font-semibold text-white mb-2">Ready to scope it?</h2>
              <p className="text-sm text-slate-400 mb-5">Tell us your audience, market, volume, and required fields. We&apos;ll confirm fit before work begins.</p>
              <Link href="/order" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold mb-3">Start an order <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="flex items-center justify-center w-full py-3 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800">Discuss your brief</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
