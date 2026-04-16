import { AlertTriangle } from 'lucide-react';

import GlassPanel from '../ui/GlassPanel';

export default function ErrorState({ label = 'Unable to load GitHub activity right now.' }) {
  return (
    <GlassPanel className="flex items-center gap-3 border-amber-300/25 p-5">
      <AlertTriangle className="h-5 w-5 text-amber-300" />
      <p className="text-sm text-slate-300">{label}</p>
    </GlassPanel>
  );
}
