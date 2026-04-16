export default function PreviewTimeline({ items = [] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.label}>
          <div className="mb-2 flex items-start justify-between gap-3 text-sm text-slate-300">
            <span className="min-w-0 pr-3 leading-6">{item.label}</span>
            <span className="shrink-0 text-xs text-slate-500">0{index + 1}</span>
          </div>
          <div className="metric-bar">
            <span style={{ width: `${item.progress}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
