import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Order Received", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">Order received!</h1>
        <p className="text-slate-400 mb-6 leading-relaxed">
          Thanks for placing an order with ProspectListBuilding. We've emailed a
          confirmation to the address you provided. Our team will review your
          requirements and follow up within one business day with pricing and
          timeline.
        </p>
        <div className="glass rounded-xl p-4 mb-8 flex items-center gap-3 text-left">
          <Mail className="w-5 h-5 text-brand-400 shrink-0" />
          <p className="text-sm text-slate-300">
            Check your inbox (and spam folder) for the order confirmation email.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl"
          >
            Back to home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-300 border border-slate-700 rounded-xl hover:bg-slate-800"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
