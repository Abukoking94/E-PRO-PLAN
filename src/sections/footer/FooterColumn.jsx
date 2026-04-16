export default function FooterColumn({ title, links = [] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <div className="mt-4 space-y-3">
        {links.map((link, index) => (
          <a key={link.href + link.label} className="block text-sm text-slate-300 transition hover:text-cyan-200" href={link.href}>
            <span className="text-slate-500">{`0${index + 1}`}</span>{' '}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
