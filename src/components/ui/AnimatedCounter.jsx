import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value = 0, suffix = '' }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 30;
    const target = Number(value) || 0;

    const tick = () => {
      frame += 1;
      const next = Math.round((target * frame) / totalFrames);
      setDisplay(next);

      if (frame < totalFrames) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <span>{display}{suffix}</span>;
}
