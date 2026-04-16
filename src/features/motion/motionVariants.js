const ease = [0.22, 1, 0.36, 1];

export const navReveal = {
  initial: { opacity: 0, y: -18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease },
  },
};

export const heroReveal = {
  initial: { opacity: 0, y: 30, scale: 0.985 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.72, ease },
  },
};

export const sectionRevealLeft = {
  initial: { opacity: 0, x: -28, y: 24 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

export const sectionRevealRight = {
  initial: { opacity: 0, x: 28, y: 24 },
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.62, ease },
  },
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const softScale = {
  initial: { opacity: 0, scale: 0.96 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.52, ease },
  },
};
