import GlassPanel from '../../components/ui/GlassPanel';
import { formatRelativeDate } from '../../features/github/utils/formatters';

export default function CommitStrip({ commits = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Commit Strip</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Tight, high-frequency updates that make the product story feel connected to current engineering motion.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Recent Commits</p>
          <p className="mt-2 text-2xl font-semibold text-white">{commits.length}</p>
        </div>
      </div>

      <div className="grid gap-3">
        {commits.map((commit) => (
          <a
            key={commit.sha}
            className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
            href={commit.html_url}
            rel="noreferrer"
            target="_blank"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="max-w-[75%] text-sm font-medium leading-6 text-white">
                {commit.commit.message.split('\n')[0]}
              </p>
              <span className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                {formatRelativeDate(commit.commit.author?.date)}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-slate-500">
              <span>{commit.sha.slice(0, 7)}</span>
              <span>{commit.commit.author?.name || 'Unknown author'}</span>
            </div>
          </a>
        ))}
      </div>
    </GlassPanel>
  );
}
