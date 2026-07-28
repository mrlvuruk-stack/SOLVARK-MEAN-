export const MOTION_TOKENS = {
  duration: {
    instant: 0,
    fast: 0.15, // 150ms - hover, click, micro-interactions
    normal: 0.25, // 250ms - dropdowns, focus rings, card elevation
    medium: 0.4, // 400ms - modals, drawers, toasts
    slow: 0.7, // 700ms - section scroll reveals, layout accordion
    entrance: 1.0, // 1000ms - hero SVG blueprint stroke drawing
  },
  easing: {
    standard: [0.2, 0.0, 0.0, 1.0], // cubic-bezier(0.2, 0, 0, 1) - default functional motion
    decelerate: [0.0, 0.0, 0.2, 1.0], // entrance curve
    accelerate: [0.4, 0.0, 1.0, 1.0], // exit curve
    sharp: [0.4, 0.0, 0.6, 1.0], // system alerts
  },
  spring: {
    gentle: { stiffness: 120, damping: 14, mass: 1 },
    snappy: { stiffness: 220, damping: 18, mass: 0.8 },
    stiff: { stiffness: 400, damping: 28, mass: 0.5 },
  },
  transform: {
    cardHoverY: -4,
    buttonPressY: 1,
    scaleHover: 1.02,
    scaleActive: 0.98,
  },
};
