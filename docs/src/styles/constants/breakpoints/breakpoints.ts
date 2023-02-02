export const breakpoints = {
  desktop: 1024,
  tablet: 768,
  mobile: 320
};

export const breakpointMediaQueries = {
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  mobile: `screen and (min-width: ${breakpoints.mobile}px)`
};
