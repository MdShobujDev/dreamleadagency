export const metadata = { title: "Privacy Policy", description: "Read the ProspectListBuilding privacy policy and learn how submitted personal information is handled.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-sm">
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-400 mb-4">Last updated: September 2026</p>
        <div className="space-y-6 text-slate-300 text-sm leading-relaxed">
          <p>
            ProspectListBuilding ("we", "us") respects your privacy. This policy
            describes how we collect, use, and protect information when you use
            our website and services.
          </p>
          <h2 className="text-lg font-semibold text-white">
            Information we collect
          </h2>
          <p>
            When you submit forms (contact, book-a-call, or order), we collect
            name, email, company, and any details you provide about your
            project. We also collect standard server logs (IP, user agent) for
            security and diagnostics.
          </p>
          <h2 className="text-lg font-semibold text-white">
            How we use information
          </h2>
          <p>
            We use form data to respond to inquiries, process orders, send
            confirmation emails, and improve our services. We do not sell
            personal data.
          </p>
          <h2 className="text-lg font-semibold text-white">Data sharing</h2>
          <p>
            We may use trusted processors (email delivery, hosting) under
            appropriate agreements. Lead data delivered to clients is handled
            according to the order terms and applicable law.
          </p>
          <h2 className="text-lg font-semibold text-white">Your rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct,
            or delete personal data we hold. Contact prospectlistbuilding1@gmail.com
            to exercise these rights.
          </p>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <p>Questions about this policy: <a href="mailto:prospectlistbuilding1@gmail.com" className="text-brand-400 hover:text-brand-300">prospectlistbuilding1@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
