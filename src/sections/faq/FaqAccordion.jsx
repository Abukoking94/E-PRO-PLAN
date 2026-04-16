export default function FaqAccordion({ question, answer }) {
  return (
    <details className="group p-6">
      <summary className="cursor-pointer list-none text-lg font-medium text-white">{question}</summary>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">{answer}</p>
    </details>
  );
}
