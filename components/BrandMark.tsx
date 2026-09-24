export default function BrandMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4.5" y="4.5" width="19" height="23" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M9 11h2m4 0h5M9 16h2m4 0h5M9 21h2" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      <circle cx="23" cy="22" r="6" fill="#0f172a" stroke="#34d399" strokeWidth="2.5" />
      <path d="m20.5 22 1.7 1.7 3.4-3.6" stroke="#34d399" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}
