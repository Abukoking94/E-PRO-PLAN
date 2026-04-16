import SectionHeading from '../ui/SectionHeading';

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
  align = 'left',
}) {
  return (
    <section id={id} className={`section-shell scroll-mt-28 md:scroll-mt-32 ${className}`.trim()}>
      {(eyebrow || title || description) && (
        <SectionHeading
          align={align}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      )}
      {children}
    </section>
  );
}
