export default function RepoHealthBadge({ label, detail }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/8 px-3 py-1 text-xs uppercase tracking-[0.16em] text-emerald-200">
      <span className="status-dot" />
      {label}
      {detail ? <span className="text-emerald-100/80">{detail}</span> : null}
    </span>
  );
}
