import GlassPanel from '../../components/ui/GlassPanel';

const laneStates = ['Planning', 'Execution', 'Review'];

export default function TeamLaneBoard({ lanes = [] }) {
  return (
    <GlassPanel className="p-6">
      <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Team Lanes</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Cross-functional Execution Grid</h3>
        </div>
        <p className="text-sm text-slate-400">Multi-team coordination</p>
      </div>

      <div className="grid gap-3">
        {lanes.map((lane, index) => (
          <div key={lane} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-white">{lane}</p>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-500">Lane 0{index + 1}</span>
            </div>
            <div className="grid gap-2 md:grid-cols-3">
              {laneStates.map((state, stateIndex) => (
                <div
                  key={lane + state}
                  className="rounded-[1.25rem] border border-slate-800 bg-slate-900/70 px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-300">{state}</span>
                    <span className={`status-dot ${stateIndex === 2 ? 'opacity-60' : ''}`.trim()} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
