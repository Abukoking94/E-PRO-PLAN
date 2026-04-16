import { TriangleAlert } from 'lucide-react';

import GlassPanel from '../../components/ui/GlassPanel';
import { formatRelativeDate } from '../../features/github/utils/formatters';

export default function IssueStream({ issues = [] }) {
  return (
    <GlassPanel className="relative overflow-hidden border border-amber-300/10 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.08),transparent_24%),linear-gradient(180deg,rgba(15,23,42,0.92),rgba(2,6,23,0.84))] p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Issue Stream</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Surface active backlog pressure without breaking the futuristic product narrative.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Open Issues</p>
          <p className="mt-2 text-2xl font-semibold text-white">{issues.length}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {issues.map((issue) => (
          <a
            key={issue.id}
            className="group rounded-[1.5rem] border border-white/6 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,6,23,0.82))] p-4 transition duration-300 hover:-translate-y-1 hover:border-amber-300/18"
            href={issue.html_url}
            rel="noreferrer"
            target="_blank"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl border border-amber-300/10 bg-amber-400/10 p-2 text-amber-200">
                <TriangleAlert className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Issue #{issue.number}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Updated {formatRelativeDate(issue.updated_at)}
                </p>
              </div>
            </div>
            <p className="line-clamp-2 text-sm font-medium leading-6 text-white">{issue.title}</p>
          </a>
        ))}
      </div>
    </GlassPanel>
  );
}
