import { LoaderCircle } from 'lucide-react';

import GlassPanel from '../ui/GlassPanel';

export default function LoadingState({ label = 'Loading live activity...' }) {
  return (
    <GlassPanel className="flex items-center gap-3 p-5">
      <LoaderCircle className="h-5 w-5 animate-spin text-cyan-300" />
      <p className="text-sm text-slate-300">{label}</p>
    </GlassPanel>
  );
}
