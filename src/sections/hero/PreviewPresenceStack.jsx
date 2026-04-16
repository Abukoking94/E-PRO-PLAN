export default function PreviewPresenceStack({ items = [] }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-[1.3rem] border border-slate-800 bg-slate-950/70 px-4 py-3">
      <div className="flex -space-x-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-xs font-medium text-slate-200"
            title={item.name}
          >
            {item.initials}
          </div>
        ))}
      </div>
      <div className="text-right">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Squad Presence</p>
        <p className="mt-1 text-sm text-slate-300">{items.length} operators active</p>
      </div>
    </div>
  );
}
