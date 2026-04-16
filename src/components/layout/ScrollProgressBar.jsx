import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = null;

    const updateProgress = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const next = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(Math.max(next, 0), 100));
    };

    const onScroll = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[2px] bg-white/[0.03]">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 shadow-[0_0_18px_rgba(103,232,249,0.55)] transition-[width] duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
