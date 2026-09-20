import { Shield, Target, TrendingUp, Users } from "lucide-react";

export const metadata = { title: "About Us" };

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Every list is built to a defined ICP — no generic dumps.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Compliant sourcing, transparent methodology, honest reporting.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We succeed when your pipeline does. Long-term clients are the goal.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    desc: "We measure success by meetings booked and revenue influenced.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About DreamLeadAgency
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            DreamLeadAgency was built by sales and data operators who were tired
            of buying low-quality lists. We combine rigorous research,
            multi-source verification, and clear delivery SLAs so your team can
            spend time selling — not cleaning data.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-white mb-4">Our approach</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-white mb-2">1. Brief</p>
              <p>
                You define industry, roles, geo, volume, and any tech or
                firmographic filters.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">2. Build & verify</p>
              <p>
                Our researchers assemble and multi-check contacts against
                deliverability and role accuracy.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">
                3. Deliver & support
              </p>
              <p>
                You receive a clean file plus a short report. Revisions and
                replacements within the agreed window.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
