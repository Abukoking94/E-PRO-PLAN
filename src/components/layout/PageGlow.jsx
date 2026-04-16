import { motion, useReducedMotion } from 'framer-motion';

export default function PageGlow() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <div className="aurora-shell">
        <div className="aurora-band aurora-band-cyan animate-aurora-sway" />
        <div className="aurora-band aurora-band-blue animate-aurora-sway-delayed" />
        <div className="aurora-band aurora-band-teal animate-aurora-sway-soft" />
      </div>
      <div className="signal-rings signal-rings-left animate-spin-slow" />
      <div className="signal-rings signal-rings-right animate-spin-slow-reverse" />
      <div className="beam-column beam-column-left animate-beam-rise" />
      <div className="beam-column beam-column-right animate-beam-rise-delayed" />
      <div className="hero-orb hero-orb-cyan animate-glow-drift" />
      <div className="hero-orb hero-orb-blue animate-glow-drift-delayed" />
      <div className="hero-orb hero-orb-teal animate-float-soft" />
      <div className="ambient-beam ambient-beam-left" />
      <div className="ambient-beam ambient-beam-right" />
      <motion.div
        className="signal-node signal-node-top"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, -14, 0],
                opacity: [0.35, 0.8, 0.35],
                scale: [1, 1.08, 1],
              }
        }
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="signal-node signal-node-bottom"
        animate={
          prefersReducedMotion
            ? undefined
            : {
                y: [0, 12, 0],
                opacity: [0.3, 0.72, 0.3],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </>
  );
}
