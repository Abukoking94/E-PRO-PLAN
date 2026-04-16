export default function GlassPanel({ children, className = '' }) {
  return <div className={`panel panel-glass ${className}`.trim()}>{children}</div>;
}
