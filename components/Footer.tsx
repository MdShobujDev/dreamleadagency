import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services/lead-generation", label: "Lead Generation" },
    { href: "/services/data-enrichment", label: "Data Enrichment" },
    { href: "/services/ecommerce-leads", label: "Ecommerce Leads" },
    { href: "/services/influencer-leads", label: "Influencer Leads" },
    { href: "/services/web-research", label: "Web Research" },
    { href: "/services/virtual-assistant", label: "Virtual Assistant" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
  Support: [
    { href: "/contact", label: "Get Help" },
    { href: "/order", label: "Place Order" },
    { href: "/#faq", label: "FAQ" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <BrandMark className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                Prospect<span className="text-brand-400">ListBuilding</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Premium B2B lead generation and data enrichment. High-intent
              prospects, verified contacts, and research that actually converts.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                hello@dreamleadagency.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                +1 (555) 987-6543
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                Austin, TX
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ProspectListBuilding. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
