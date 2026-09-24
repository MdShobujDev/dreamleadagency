import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Target, TrendingUp, Users } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn how ProspectListBuilding helps B2B sales teams identify, research, and prioritize the right prospects.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Precision over volume", desc: "A list is useful only when it matches a clear market, buying role, and sales motion." },
  { icon: Shield, title: "Responsible by design", desc: "We document the brief, handle data carefully, and encourage relevant, transparent outreach." },
  { icon: Users, title: "A practical partnership", desc: "Clear communication, samples when useful, and a revision process that turns feedback into better work." },
  { icon: TrendingUp, title: "Built for action", desc: "Every delivery is structured around the next job: research, CRM routing, campaign prep, or account review." },
];

const commitments = ["A defined ICP and exclusions before production", "Human review for relevance—not blind database exports", "Clear fields, formats, and acceptance criteria", "A transparent note when data is unavailable or uncertain"];

export default function AboutPage() {
  return <main className="py-12 md:py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-20 items-center mb-20"><div><p className="text-brand-400 text-xs font-semibold uppercase tracking-[.18em] mb-4">About ProspectListBuilding</p><h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">Research that gives sales teams a stronger next move.</h1><p className="text-slate-300 text-lg leading-relaxed">ProspectListBuilding helps B2B teams turn an ideal-customer profile into useful market intelligence, prospect data, and operating support. We exist because sales teams deserve more than a large, stale spreadsheet—they need enough context to choose who to contact and why.</p></div><div className="glass rounded-2xl p-7 md:p-8"><p className="text-sm font-semibold text-white mb-5">Our working commitments</p><ul className="space-y-4">{commitments.map(item => <li key={item} className="flex gap-3 text-sm text-slate-300"><CheckCircle2 className="w-5 h-5 shrink-0 text-brand-400" />{item}</li>)}</ul></div></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">{values.map(({ icon: Icon, title, desc }) => <div key={title} className="glass rounded-2xl p-6"><div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-brand-400" /></div><h2 className="font-semibold text-white mb-2">{title}</h2><p className="text-sm leading-relaxed text-slate-400">{desc}</p></div>)}</div>
    <section className="rounded-2xl border border-slate-800 bg-slate-900/75 p-7 md:p-10"><div className="grid md:grid-cols-3 gap-8"><div><p className="text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">How we work</p><h2 className="text-2xl font-bold text-white">A simple, visible delivery process.</h2></div><div className="md:col-span-2 grid sm:grid-cols-3 gap-6 text-sm">{[["01", "Brief", "Define accounts, people, markets, exclusions, and what success looks like."], ["02", "Build & QA", "Research, enrich, normalize, and review records against the agreed criteria."], ["03", "Deliver & learn", "Hand off a usable file, document the work, and use feedback to improve the next batch."]].map(([number, title, copy]) => <div key={number}><p className="text-brand-400 font-mono text-xs mb-3">{number}</p><h3 className="font-semibold text-white mb-2">{title}</h3><p className="leading-relaxed text-slate-400">{copy}</p></div>)}</div></div>
      <div className="mt-8 pt-7 border-t border-slate-800 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"><p className="text-slate-400 text-sm">Bring us your market, offer, and workflow. We&apos;ll help shape the right brief.</p><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 hover:text-brand-300">Start a conversation <ArrowRight className="w-4 h-4" /></Link></div>
    </section>
  </div></main>;
}
