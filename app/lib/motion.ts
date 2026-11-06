export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const viewport = { once: true, margin: "-80px" } as const;
