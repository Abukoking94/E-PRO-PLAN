import { brand, footer } from '../../content/landingCopy';

import FooterColumn from './FooterColumn';

export default function SiteFooter() {
  return (
    <footer className="section-shell pt-0">
      <div className="section-divider mb-8" />
      <div className="grid gap-8 pb-6 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">{brand.name}</p>
          <h3 className="mt-4 max-w-xl text-3xl font-semibold text-white">
            A futuristic execution platform concept designed to feel like real organizational software.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            React, Vite, Tailwind CSS, and live GitHub delivery signals come together here to create a portfolio project with product-grade structure, motion, and systems thinking.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {footer.columns.map((column) => (
            <FooterColumn key={column.title} title={column.title} links={column.links} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 border-t border-slate-800/80 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>Frontend-only product concept powered by a real public GitHub API layer and a locked scalable architecture.</p>
        <a className="transition hover:text-cyan-200" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
