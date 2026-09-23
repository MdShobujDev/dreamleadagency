import Link from "next/link";
import { ArrowRight, Check, Compass, DatabaseZap, Workflow } from "lucide-react";

const motions = [
  { icon: Compass, title: "New market entry", text: "Map the right accounts, roles, and buying context before your team starts outreach.", points: ["ICP and segment definition", "Account universe research"] },
  { icon: DatabaseZap, title: "Data that reps trust", text: "Refresh incomplete records and organize every field around how your CRM and campaigns work.", points: ["Contact and company enrichment", "Clear field coverage"] },
  { icon: Workflow, title: "Repeatable GTM operations", text: "Create a research-to-delivery rhythm that keeps the next best accounts in front of your team.", points: ["Prioritization framework", "Ongoing delivery cadence"] },
];

export default function RevenueReadiness() {
  return <section className="py-20 md:py-28"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10"><div className="max-w-2xl"><p className="text-brand-400 text-xs uppercase tracking-[0.18em] font-semibold mb-3">More than a contact list</p><h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Give every growth motion a better starting point.</h2></div><p className="max-w-md text-slate-400 leading-relaxed">The best next step depends on your bottleneck. Start with the service that gives your team the clearest path to action.</p></div>
    <div className="grid md:grid-cols-3 gap-5">{motions.map(({ icon: Icon, title, text, points }) => <div key={title} className="glass glass-hover rounded-2xl p-6"><div className="w-11 h-11 rounded-xl bg-brand-500/15 flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-brand-400" /></div><h3 className="text-lg font-semibold text-white mb-2">{title}</h3><p className="text-sm text-slate-400 leading-relaxed mb-5">{text}</p><ul className="space-y-2">{points.map(point => <li key={point} className="flex items-center gap-2 text-xs text-slate-300"><Check className="w-4 h-4 text-brand-400" />{point}</li>)}</ul></div>)}</div>
    <div className="mt-8 flex flex-wrap gap-4 items-center"><Link href="/services/lead-generation" className="text-sm text-brand-400 font-semibold inline-flex items-center gap-2 hover:text-brand-300">Explore all services <ArrowRight className="w-4 h-4" /></Link><span className="text-xs text-slate-500">Not sure where to start? Send us your current workflow and target market.</span></div>
  </div></section>;
}
