import GlassPanel from '../../components/ui/GlassPanel';

export default function HeroPreviewShell({ children, className = '' }) {
  return (
    <GlassPanel
      className={`panel-strong relative grid gap-5 overflow-hidden border border-cyan-300/12 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.07),transparent_34%),linear-gradient(180deg,rgba(2,6,23,0.78),rgba(2,6,23,0.58))] p-4 md:p-6 ${className}`.trim()}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />
      <div className="pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full border border-cyan-300/12" />
      <div className="pointer-events-none absolute -left-12 bottom-8 h-24 w-24 rounded-full border border-blue-300/12" />
      <div className="flex flex-col items-start justify-between gap-3 rounded-[1.3rem] border border-cyan-300/14 bg-slate-950/55 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:flex-row sm:items-center sm:gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Preview Surface</p>
          <p className="mt-1 text-sm font-medium text-white">Command Center View</p>
        </div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
          <span className="status-dot" />
          Live narrative shell
        </div>
      </div>
      {children}
    </GlassPanel>
  );
}
