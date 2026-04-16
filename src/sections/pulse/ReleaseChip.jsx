import { formatRelativeDate } from '../../features/github/utils/formatters';

export default function ReleaseChip({ tagName, publishedAt }) {
  return (
    <span className="inline-flex rounded-full border border-cyan-300/15 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.16em] text-cyan-200">
      {tagName} {publishedAt ? `· ${formatRelativeDate(publishedAt)}` : ''}
    </span>
  );
}
