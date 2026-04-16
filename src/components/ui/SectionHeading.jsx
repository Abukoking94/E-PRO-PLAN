export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <div className={`mb-8 flex max-w-3xl flex-col gap-4 md:mb-10 ${alignment}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <div className="space-y-4">
        {title ? (
          <h2 className="max-w-4xl text-xl font-semibold leading-tight text-white sm:text-2xl md:text-5xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
