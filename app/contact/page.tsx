"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const profiles = [
  { label: "Facebook", href: "https://www.facebook.com/ronibabu985404" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roni-babu" },
  { label: "Fiverr", href: "https://www.fiverr.com/prospectinglead?public_mode=true" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0157524d23800d3aea" },
];

export default function ContactPage() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    website: "",
  });
  const [book, setBook] = useState({
    name: "",
    email: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
    website: "",
  });
  const [cStatus, setCStatus] = useState<"idle" | "loading" | "success">(
    "idle",
  );
  const [bStatus, setBStatus] = useState<"idle" | "loading" | "success">(
    "idle",
  );

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    setCStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error();
      setCStatus("success");
      setContact({
        name: "",
        email: "",
        company: "",
        message: "",
        website: "",
      });
      toast.success("Message sent! Check your inbox for confirmation.");
    } catch {
      setCStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  }

  async function submitBook(e: React.FormEvent) {
    e.preventDefault();
    setBStatus("loading");
    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      if (!res.ok) throw new Error();
      setBStatus("success");
      setBook({
        name: "",
        email: "",
        company: "",
        preferredDate: "",
        preferredTime: "",
        notes: "",
        website: "",
      });
      toast.success("Call request sent! Confirmation email on the way.");
    } catch {
      setBStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 text-sm";

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get in touch
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto">Tell us about your target market, ideal customer profile, and lead research needs. We will get back to you within one business day.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Mail, label: "Email", value: "prospectlistbuilding1@gmail.com", href: "mailto:prospectlistbuilding1@gmail.com" },
            { icon: Phone, label: "Mobile", value: "01568811848", href: "tel:+8801568811848" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/8801568811848", external: true },
            { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm CT" },
          ].map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-500/15 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500">{item.label}</p>
                {item.href ? (
                  <a href={item.href} {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm font-medium text-white hover:text-brand-300">{item.value}</a>
                ) : (
                  <p className="text-sm font-medium text-white">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="-mt-8 mb-12 text-center">
          <p className="mb-3 text-sm text-slate-400">Connect or view our profiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {profiles.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-brand-500 hover:text-brand-300">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
              <Send className="w-5 h-5 text-brand-400" /> Send a message
            </h2>
            <p className="text-sm text-slate-400 mb-6">We'll reply by email.</p>
            {cStatus === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-brand-400 mb-3" />
                <p className="font-medium text-white">Message sent!</p>
                <p className="text-sm text-slate-400 mt-1">
                  Check your inbox for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={submitContact} className="space-y-4">
                <input
                  type="text"
                  name="website"
                  value={contact.website}
                  onChange={(e) =>
                    setContact({ ...contact, website: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      required
                      className={inputClass}
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className={inputClass}
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Company
                  </label>
                  <input
                    className={inputClass}
                    value={contact.company}
                    onChange={(e) =>
                      setContact({ ...contact, company: e.target.value })
                    }
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className={inputClass + " resize-none"}
                    value={contact.message}
                    onChange={(e) =>
                      setContact({ ...contact, message: e.target.value })
                    }
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={cStatus === "loading"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold hover:from-brand-400 hover:to-brand-500 disabled:opacity-60 transition-all"
                >
                  {cStatus === "loading" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Book a call */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl font-semibold text-white mb-1 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-brand-400" /> Book a call
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Tell us when works for you.
            </p>
            {bStatus === "success" ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="w-12 h-12 text-brand-400 mb-3" />
                <p className="font-medium text-white">Request received!</p>
                <p className="text-sm text-slate-400 mt-1">
                  We'll confirm the time by email.
                </p>
              </div>
            ) : (
              <form onSubmit={submitBook} className="space-y-4">
                <input
                  type="text"
                  name="website"
                  value={book.website}
                  onChange={(e) =>
                    setBook({ ...book, website: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Name *
                    </label>
                    <input
                      required
                      className={inputClass}
                      value={book.name}
                      onChange={(e) =>
                        setBook({ ...book, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className={inputClass}
                      value={book.email}
                      onChange={(e) =>
                        setBook({ ...book, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Company
                  </label>
                  <input
                    className={inputClass}
                    value={book.company}
                    onChange={(e) =>
                      setBook({ ...book, company: e.target.value })
                    }
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Preferred date
                    </label>
                    <input
                      type="date"
                      className={inputClass}
                      value={book.preferredDate}
                      onChange={(e) =>
                        setBook({ ...book, preferredDate: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Preferred time
                    </label>
                    <input
                      className={inputClass}
                      value={book.preferredTime}
                      onChange={(e) =>
                        setBook({ ...book, preferredTime: e.target.value })
                      }
                      placeholder="e.g. 2–4pm CT"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    className={inputClass + " resize-none"}
                    value={book.notes}
                    onChange={(e) =>
                      setBook({ ...book, notes: e.target.value })
                    }
                    placeholder="Anything we should know?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={bStatus === "loading"}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold hover:from-brand-400 hover:to-brand-500 disabled:opacity-60 transition-all"
                >
                  {bStatus === "loading" ? "Submitting…" : "Request call"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
