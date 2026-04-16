import SectionShell from '../../components/layout/SectionShell';
import GlassPanel from '../../components/ui/GlassPanel';
import { collaboration } from '../../content/landingCopy';

import ApprovalFlowDiagram from './ApprovalFlowDiagram';
import CommentThreadPreview from './CommentThreadPreview';
import TeamLaneBoard from './TeamLaneBoard';
import WorkloadMatrix from './WorkloadMatrix';

export default function CollaborationSection() {
  return (
    <SectionShell
      id="collaboration"
      eyebrow="Team Collaboration"
      title="Make the platform feel built for organizations, not solo task management."
      description="Use lanes, approvals, and threaded updates to show that the product understands how work moves across teams."
    >
      <div className="space-y-6">
        <GlassPanel className="p-5 md:p-6">
          <div className="grid gap-4 xl:gap-5 lg:grid-cols-[1.16fr_0.84fr]">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Organization Layer</p>
              <p className="mt-3 max-w-2xl text-lg font-medium leading-8 text-white">
                This section makes the platform feel built for real teams: shared lanes, threaded decisions, approval checkpoints, and visible workload pressure.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
              {[
                { label: 'Squads', value: collaboration.lanes.length },
                { label: 'Comments', value: collaboration.comments.length },
                { label: 'Checkpoints', value: collaboration.approvals.length },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 md:p-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>

        <div className="grid gap-6 xl:gap-7 xl:grid-cols-[1.12fr_0.88fr]">
          <TeamLaneBoard lanes={collaboration.lanes} />

          <div className="grid gap-6">
            <CommentThreadPreview comments={collaboration.comments} />
            <ApprovalFlowDiagram approvals={collaboration.approvals} />
            <WorkloadMatrix lanes={collaboration.lanes} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
