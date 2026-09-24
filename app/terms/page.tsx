export const metadata = { title: "Terms of Service", description: "Review the terms governing use of ProspectListBuilding websites and services.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-6">
          Last updated: September 2026
        </p>
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <p>
            By using ProspectListBuilding websites and services, you agree to these
            terms. If you do not agree, please do not use our services.
          </p>
          <h2 className="text-lg font-semibold text-white">Services</h2>
          <p>
            We provide B2B lead generation, data enrichment, research, and
            related services as described on our site and in individual order
            confirmations. Deliverables, timelines, and pricing are confirmed
            per order.
          </p>
          <h2 className="text-lg font-semibold text-white">Acceptable use</h2>
          <p>
            You may only use delivered data for lawful business outreach
            consistent with applicable anti-spam and privacy laws (including
            GDPR, CCPA, and CAN-SPAM where relevant). You must honor opt-outs
            and suppressions.
          </p>
          <h2 className="text-lg font-semibold text-white">
            Payment & refunds
          </h2>
          <p>
            Payment terms are stated on quotes and invoices. Refunds or credits
            for quality issues are handled per the replacement policy in your
            order confirmation.
          </p>
          <h2 className="text-lg font-semibold text-white">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, ProspectListBuilding is not
            liable for indirect or consequential damages arising from use of our
            services or data.
          </p>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>Legal inquiries: hello@dreamleadagency.com</p>
        </div>
      </div>
    </div>
  );
}
