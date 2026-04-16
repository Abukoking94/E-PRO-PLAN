import GlassPanel from '../../components/ui/GlassPanel';
import BarsMiniChart from '../../components/charts/BarsMiniChart';

export default function TeamLoadBars({ values = [], contributors = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Team Load Shape</p>
          <p className="mt-2 text-sm leading-7 text-slate-400">
            Contributor distribution shown as a lightweight workload contour for the landing page narrative.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right">
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Visible Contributors</p>
          <p className="mt-2 text-2xl font-semibold text-white">{contributors.length}</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        <BarsMiniChart values={values} />
        <div className="grid gap-3">
          {contributors.slice(0, 4).map((contributor) => (
            <div
              key={contributor.id}
              className="flex items-center justify-between gap-4 rounded-[1.25rem] border border-slate-800 bg-slate-950/70 px-4 py-3"
            >
              <div>
                <p className="text-sm font-medium text-white">{contributor.login}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  Public contribution signal
                </p>
              </div>
              <p className="text-sm font-semibold text-cyan-100">{contributor.contributions}</p>
            </div>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
