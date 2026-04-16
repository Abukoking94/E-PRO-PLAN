export default function BarsMiniChart({ values = [42, 58, 37, 76, 52] }) {
  return (
    <div className="flex h-20 items-end gap-2">
      {values.map((value, index) => (
        <div
          key={`${value}-${index}`}
          className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-400/40 to-blue-400/80"
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}
