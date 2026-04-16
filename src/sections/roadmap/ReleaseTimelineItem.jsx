import { formatRelativeDate } from '../../features/github/utils/formatters';

const toneClasses = {
  cyan: 'from-cyan-400/35 via-cyan-400/10 to-transparent border-cyan-300/20',
  blue: 'from-blue-400/35 via-blue-400/10 to-transparent border-blue-300/20',
  teal: 'from-teal-400/35 via-teal-400/10 to-transparent border-teal-300/20',
  amber: 'from-amber-400/35 via-amber-400/10 to-transparent border-amber-300/20',
};

export default function ReleaseTimelineItem({
  tagName,
  publishedAt,
  name,
  summary,
  href,
  tone = 'cyan',
}) {
  const toneClass = toneClasses[tone] ?? toneClasses.cyan;

  return (
    <a
      className={`group block rounded-[1.75rem] border bg-gradient-to-br ${toneClass} p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">{tagName}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {formatRelativeDate(publishedAt)}
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">
          Release
        </span>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-100">
        {name || 'Published release snapshot'}
      </p>
      <p className="mt-2 text-sm leading-7 text-slate-400">
        {summary || 'Published release snapshot'}
      </p>
    </a>
  );
}
