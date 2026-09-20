import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-brand-400 mb-2">404</p>
        <h1 className="text-xl font-semibold text-white mb-2">Page not found</h1>
        <p className="text-slate-400 text-sm mb-6">The page you're looking for doesn't exist or was moved.</p>
        <Link href="/" className="inline-flex px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-brand-600 rounded-xl">
          Go home
        </Link>
      </div>
    </div>
  );
}
