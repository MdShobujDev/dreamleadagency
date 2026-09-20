import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none" />
          <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to fill your pipeline with better leads?
          </h2>
          <p className="relative text-slate-400 mb-8 max-w-xl mx-auto">
            Tell us your ICP and volume. We'll come back with a clear quote and sample options.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl shadow-glow hover:from-brand-400 hover:to-brand-500 transition-all"
            >
              Place an Order <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-200 border border-slate-600 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
