import Tag from '../../components/ui/Tag';

export default function HeroCopy({
  eyebrow,
  titleLead,
  titleAccent,
  description,
  chips = [],
  children,
}) {
  return (
    <div className="space-y-8">
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <div className="space-y-5">
        {titleLead || titleAccent ? (
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
            {titleLead}
            {titleAccent ? <span className="gradient-text"> {titleAccent}</span> : null}
          </h1>
        ) : null}
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8 xl:text-xl">
            {description}
          </p>
        ) : null}
      </div>
      {chips.length ? (
        <div className="flex flex-wrap gap-3">
          {chips.map((chip) => (
            <Tag key={chip}>{chip}</Tag>
          ))}
        </div>
      ) : null}
      {children}
    </div>
  );
}
