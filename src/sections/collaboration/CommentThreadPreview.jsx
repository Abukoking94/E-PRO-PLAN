import GlassPanel from '../../components/ui/GlassPanel';

export default function CommentThreadPreview({ comments = [] }) {
  return (
    <GlassPanel className="p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Threaded Updates</p>
      <div className="mt-4 space-y-3">
        {comments.map((comment, index) => (
          <div
            key={comment}
            className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4"
          >
            <div className="mb-2 flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">
              <span>Thread 0{index + 1}</span>
              <span className="text-cyan-200">Visible</span>
            </div>
            <p className="text-sm leading-7 text-slate-300">{comment}</p>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
}
