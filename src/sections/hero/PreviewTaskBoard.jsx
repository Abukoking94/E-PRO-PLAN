const laneTones = [
  {
    border: 'border-cyan-300/20',
    badge: 'bg-cyan-300/10 text-cyan-200 border-cyan-300/20',
    dot: 'bg-cyan-300',
    accent: 'text-cyan-200',
    track: 'from-cyan-300/35 to-cyan-300/5',
  },
  {
    border: 'border-blue-300/20',
    badge: 'bg-blue-300/10 text-blue-200 border-blue-300/20',
    dot: 'bg-blue-300',
    accent: 'text-blue-200',
    track: 'from-blue-300/30 to-blue-300/5',
  },
  {
    border: 'border-teal-300/20',
    badge: 'bg-teal-300/10 text-teal-200 border-teal-300/20',
    dot: 'bg-teal-300',
    accent: 'text-teal-200',
    track: 'from-teal-300/30 to-teal-300/5',
  },
];

export default function PreviewTaskBoard({ columns = [] }) {
  return (
    <div className="grid gap-3">
      {columns.map((column, index) => (
        <div
          key={column.title}
          className={`min-w-0 rounded-[1.75rem] border bg-slate-950/75 p-4 md:p-5 ${laneTones[index % laneTones.length].border}`.trim()}
        >
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-full ${laneTones[index % laneTones.length].dot}`.trim()} />
                <span
                  className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.18em] ${laneTones[index % laneTones.length].badge}`.trim()}
                >
                  Lane 0{index + 1}
                </span>
              </div>
              <p className="break-words text-sm font-semibold uppercase tracking-[0.18em] text-white [overflow-wrap:anywhere]">
                {column.title}
              </p>
            </div>
            <span
              className={`shrink-0 whitespace-nowrap text-xs font-medium ${laneTones[index % laneTones.length].accent}`.trim()}
            >
              {column.items.length} items
            </span>
          </div>

          <div className={`mb-4 h-[3px] rounded-full bg-gradient-to-r ${laneTones[index % laneTones.length].track}`.trim()} />

          <div className="grid gap-3">
            {column.items.map((item, itemIndex) => (
              <div
                key={`${column.title}-${item}`}
                className="min-w-0 rounded-[1.35rem] border border-slate-800 bg-slate-900/80 p-3.5 sm:p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-500" />
                  <div className="min-w-0">
                    <p className="break-words text-sm leading-6 text-slate-200 [overflow-wrap:anywhere]">
                      {item}
                    </p>
                    <p className="mt-1 break-words text-[11px] uppercase tracking-[0.16em] text-slate-500 [overflow-wrap:anywhere]">
                      {itemIndex === 0
                        ? 'Priority signal'
                        : itemIndex === 1
                          ? 'Active checkpoint'
                          : 'Execution note'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
