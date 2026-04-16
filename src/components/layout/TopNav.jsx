import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Radar, SunMedium, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import { useTheme } from '../../app/providers';
import { brand } from '../../content/landingCopy';
import { navigation } from '../../content/navigation';
import { navReveal } from '../../features/motion/motionVariants';
import Button from '../ui/Button';

export default function TopNav() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, isLightTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1280px)');
    const handleViewportChange = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    handleViewportChange(mediaQuery);
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => {
      mediaQuery.removeEventListener('change', handleViewportChange);
    };
  }, []);

  return (
    <motion.header
      className="top-nav overflow-hidden"
      id="top"
      variants={navReveal}
      initial={prefersReducedMotion ? false : 'initial'}
      animate={prefersReducedMotion ? undefined : 'animate'}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-6">
        <a className="min-w-0 flex items-center gap-3" href="#top">
          <div className="accent-ring flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950/70">
            <Radar className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-[0.18em] text-slate-200 sm:tracking-[0.22em]">
              {brand.name}
            </p>
            <p className="hidden text-xs text-slate-400 sm:block">{brand.tagline}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-5 text-sm text-slate-300 xl:flex">
          {navigation.map((item) => (
            <a key={item.href} className="transition hover:text-cyan-200" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 text-slate-100 transition hover:border-cyan-300/30 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
            aria-pressed={isLightTheme}
            onClick={toggleTheme}
          >
            {isLightTheme ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] md:inline">
              {theme}
            </span>
          </button>

          <div className="hidden xl:block">
            <Button href="#roadmap" variant="secondary" className="gap-2">
              Live Activity
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 text-slate-100 transition hover:border-cyan-300/30 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="border-t border-slate-800/80 xl:hidden"
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: 'easeOut' }}
          >
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between rounded-[1.1rem] border border-slate-800 bg-slate-950/55 px-4 py-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Theme</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    {isLightTheme ? 'Light mode enabled' : 'Dark mode enabled'}
                  </p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/70 text-slate-100 transition hover:border-cyan-300/30 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
                  aria-pressed={isLightTheme}
                  onClick={toggleTheme}
                >
                  {isLightTheme ? <Moon className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
                </button>
              </div>

              <nav className="grid gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    className="rounded-[1.1rem] border border-slate-800 bg-slate-950/55 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-slate-900/80 hover:text-cyan-200"
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <Button
                href="#roadmap"
                variant="secondary"
                className="w-full gap-2"
                onClick={() => setMenuOpen(false)}
              >
                Live Activity
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
