export default function Sparkline({ points = [30, 55, 40, 70, 62, 88] }) {
  const width = 120;
  const height = 42;
  const max = Math.max(...points, 1);
  const step = width / Math.max(points.length - 1, 1);
  const path = points
    .map((point, index) => {
      const x = index * step;
      const y = height - (point / max) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <svg className="h-12 w-full" viewBox={`0 0 ${width} ${height}`} fill="none">
      <path d={path} stroke="url(#sparkline-gradient)" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="sparkline-gradient" x1="0" y1="0" x2={width} y2="0">
          <stop stopColor="#67e8f9" />
          <stop offset="1" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
    </svg>
  );
}
