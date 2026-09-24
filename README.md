# ProspectListBuilding — Premium B2B Lead Generation Website

Modern Next.js 15 application for a B2B lead generation agency. Completely redesigned UI (dark slate + emerald), fully responsive, optimized, with Nodemailer-powered form and order emails (admin notification + user confirmation).

## Features (same as original product)

- Homepage: Hero, why us, services preview, testimonials, FAQ, CTA
- About, Portfolio, Contact (message + book-a-call forms)
- Multi-step Order form with validation
- Service detail pages (Lead Generation, Data Enrichment, Ecommerce Leads, Influencer Leads, Web Research, Virtual Assistant)
- Privacy, Terms, Thank-you, 404
- API routes: `/api/contact`, `/api/book-call`, `/api/order`
- Nodemailer: admin gets submission details; user gets confirmation email
- Honeypot spam protection on forms
- SEO metadata, responsive mobile-first UI

## Tech

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Framer Motion
- Lucide icons
- Zod + Nodemailer
- Sonner toasts

## Setup

```bash
cd b2b-leadgen
npm install
cp .env.example .env
# Edit .env with your SMTP credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Email

Configure Gmail (or any SMTP) in `.env`. For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833).

When a user submits Contact, Book-a-call, or Order:

1. Admin receives a notification at `NOTIFICATION_EMAIL`
2. User receives a confirmation email at the address they provided

If SMTP is not configured, forms still succeed but emails are skipped (logged to console).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

## Design

- Dark slate background with emerald (`brand`) accents
- Glass cards, soft glow on primary CTAs
- Sticky glass header, mobile drawer nav
- Different layout and color system from the original blue/cyan light theme
