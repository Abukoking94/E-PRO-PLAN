export default function DonutMiniChart({ value = 72 }) {
  const clamped = Math.max(0, Math.min(value, 100));
  const angle = (clamped / 100) * 360;

  return (
    <div
      className="relative flex h-24 w-24 items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#67e8f9 0deg, #60a5fa ${angle}deg, rgba(15, 23, 42, 0.92) ${angle}deg 360deg)`,
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
        {clamped}%
      </div>
    </div>
  );
}
