import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = { title: "Ecommerce Leads" };

const benefits = [
  "Verified contact data",
  "Custom targeting criteria",
  "Fast turnaround options",
  "Clear delivery reports",
  "Revision window included",
];

export default function ServicePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-400 text-sm font-medium mb-2">Service</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ecommerce Leads</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            High-quality ecommerce leads tailored to your ideal customer profile.
            We combine research, verification, and transparent delivery so your team can act fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">What you get</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white mb-4">How it works</h2>
              <ol className="space-y-4 text-sm text-slate-400">
                <li><span className="font-semibold text-white">1. Scope</span> — Share your ICP, volume, and any hard filters.</li>
                <li><span className="font-semibold text-white">2. Build</span> — We research and verify contacts against your criteria.</li>
                <li><span className="font-semibold text-white">3. Deliver</span> — Receive a clean file and summary report on the agreed timeline.</li>
              </ol>
            </div>
          </div>
          <div>
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold text-white mb-2">Ready to start?</h3>
              <p className="text-sm text-slate-400 mb-5">Place an order or book a call to discuss fit and volume.</p>
              <Link href="/order" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold mb-3">
                Place order <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="flex items-center justify-center w-full py-3 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-800">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
