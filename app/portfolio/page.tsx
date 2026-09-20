export const metadata = { title: "Portfolio" };

const cases = [
  {
    title: "SaaS pipeline acceleration",
    industry: "B2B SaaS",
    result: "2,400 verified decision-maker contacts · 31% reply rate on first sequence",
    desc: "Built a multi-geo list of VP Sales and CRO contacts for a mid-market sales engagement platform.",
  },
  {
    title: "Ecommerce seller outreach",
    industry: "Ecommerce",
    result: "1,800 store owners · 22% positive response",
    desc: "Targeted Shopify and Amazon sellers in beauty and home categories for a logistics SaaS.",
  },
  {
    title: "CRM enrichment at scale",
    industry: "Fintech",
    result: "18k records enriched · 94% email match rate",
    desc: "Filled missing titles, emails, and firmographics for an existing CRM export.",
  },
  {
    title: "Influencer discovery",
    industry: "Consumer brand",
    result: "320 micro-influencers · niche + engagement filters",
    desc: "Delivered creator contacts in fitness and wellness with verified emails and follower ranges.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Selected work</h1>
          <p className="text-slate-400">
            Anonymized examples of projects we've delivered. Results vary by industry and list quality requirements.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="glass rounded-2xl p-6 md:p-7">
              <span className="text-xs font-medium text-brand-400 mb-2 block">{c.industry}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{c.desc}</p>
              <p className="text-sm font-medium text-brand-300">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
