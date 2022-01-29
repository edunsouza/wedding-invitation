export const deviceWidths = {
  XS: 350,
  SM: 600,
  MD: 900,
  LG: 1200,
  XL: 1536,
};

export const isMobile = () => window.outerWidth < deviceWidths.SM;