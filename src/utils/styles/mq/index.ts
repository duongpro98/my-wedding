export const BREAKPOINTS = {
  xs: 0,
  sm: 599,
  md: 768,
  lg: 1024,
  xl: 1440
};

export const getZeroMediaQuery = (): string => {
  const keys = Object.keys(BREAKPOINTS);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (BREAKPOINTS[key] === 0) {
      return key;
    }
  }
  return undefined;
};

// retrieve breakpoint keys from object that match known breakpoints
export const getBreakpointKeys = (obj?: object) => {
  const breakpoints = Object.keys(BREAKPOINTS);
  if (!obj) {
    return breakpoints;
  }
  return Object.keys(obj).filter((key) => breakpoints.indexOf(key) > -1);
};

const mq = (bp, includeMedia = true): string =>
  `${includeMedia ? '@media ' : ''}(min-width: ${BREAKPOINTS[bp]}px)`;

mq.lessThan = (bp, includeMedia = true): string =>
  `${includeMedia ? '@media ' : ''}(max-width: ${BREAKPOINTS[bp] - 1}px)`;

mq.between = (bpA, bpB, includeMedia = true): string =>
  `${includeMedia ? '@media ' : ''}(min-width: ${BREAKPOINTS[bpA]}px) and (max-width: ${BREAKPOINTS[
    bpB
  ] - 1}px)`;

export default mq;
