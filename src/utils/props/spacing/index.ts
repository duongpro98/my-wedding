import { IPropList } from '../';
import {warnInDev} from "../../helpers/dev";
import mq, { getZeroMediaQuery, getBreakpointKeys } from '../../styles/mq';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  margin: ['margin'],
  m: ['margin'],
  marginX: ['margin-left', 'margin-right'],
  mx: ['margin-left', 'margin-right'],
  marginY: ['margin-top', 'margin-bottom'],
  my: ['margin-top', 'margin-bottom'],
  marginTop: ['margin-top'],
  mt: ['margin-top'],
  marginBottom: ['margin-bottom'],
  mb: ['margin-bottom'],
  marginLeft: ['margin-left'],
  ml: ['margin-left'],
  marginRight: ['margin-right'],
  mr: ['margin-right'],
  padding: ['padding'],
  p: ['padding'],
  paddingX: ['padding-left', 'padding-right'],
  px: ['padding-left', 'padding-right'],
  paddingY: ['padding-top', 'padding-bottom'],
  py: ['padding-top', 'padding-bottom'],
  paddingTop: ['padding-top'],
  pt: ['padding-top'],
  paddingBottom: ['padding-bottom'],
  pb: ['padding-bottom'],
  paddingLeft: ['padding-left'],
  pl: ['padding-left'],
  paddingRight: ['padding-right'],
  pr: ['padding-right']
};

const invalidValue = (theme: any, breakpoint: string, value: any): string => {
  if (
    theme &&
    theme.responsiveSpacing &&
    theme.responsiveSpacing[breakpoint] &&
    theme.responsiveSpacing[breakpoint].hasOwnProperty(value)
  ) {
    return undefined;
  }

  return `could not find spacing for value (${value}) at breakpoint '${breakpoint}'`;
};

/*
 * @private
 */
export const applyValue = (
  SUPPORTED_PROPS: IPropList,
  theme: any,
  property: string,
  value: string | number,
  breakpoint?: string,
  config?: any
) => {
  if (typeof value !== 'string' && typeof value !== 'number') {
    warnInDev(`invalid spacing of type (${typeof value}) ignored for (${property})`);
    return [];
  }

  // // dont process non numeric values - just apply
  if (isNaN(Number(value))) {
    return SUPPORTED_PROPS[property].map((prop) => `${prop}: ${value};`);
  }

  // early exit for 0
  if (Number(value) === 0) {
    return SUPPORTED_PROPS[property].map((prop) => `${prop}: 0;`);
  }

  // breakpoint is undefined value is plain value
  // eg { margin: 2 } as opposed to { margin: { xs: 1, md : 2} }
  // we handle it specially here by auto applying breakpoint as per
  // responsive spacing values defined in the theme

  const factor = config?.factor || 1;

  let sign = 1;

  const negativeMatch = /^-(\d+)$/.exec(String(value));
  // check for negative value
  if (negativeMatch) {
    sign = -1;
    value = negativeMatch[1];
  }

  if (breakpoint === undefined) {
    // get breakpoints defined by theme
    let mediaQueries = getBreakpointKeys(theme.responsiveSpacing);

    return mediaQueries.map((breakpoint) => {
      let invalid = invalidValue(theme, breakpoint, value);

      if (invalid) {
        // throwInDev(invalid);
        warnInDev(invalid);
        return '';
      }

      let val = factor * sign * Number(theme.responsiveSpacing[breakpoint][value]);

      // convert to css to string so we can wrap in mq
      let css: string = SUPPORTED_PROPS[property].map((prop) => `${prop}: ${val}px;`).join(' ');

      return !breakpoint || breakpoint === getZeroMediaQuery()
        ? css
        : `${mq(breakpoint)} { ${css} }`;
    });
  }

  // if we this far, a breakpoint was specified
  // in props e.g. { margin: { xs: 1, md : 2} }
  const allBreakpointKeys = getBreakpointKeys();
  const spacingBreakpointKeys = getBreakpointKeys(theme.responsiveSpacing);

  // make sure breakpoint is valid and in responsive spacing table
  // if possible fall back to earlier breakpoint's value
  const breakpointIndex = allBreakpointKeys.indexOf(breakpoint);
  const spacingBPIndex = spacingBreakpointKeys.indexOf(breakpoint);

  if (breakpointIndex === -1) {
    return [];
  } else {
    if (spacingBPIndex === -1) {
      // breakpoint is valid, but not in responsive spacing table, fall back to next closest
      let index = breakpointIndex;
      let fallbackBreakpoint;
      while (index > -1) {
        index--;
        fallbackBreakpoint = allBreakpointKeys[index];
        if (spacingBreakpointKeys.indexOf(fallbackBreakpoint) > -1) {
          break;
        }
      }

      // warnInDev(
      //   `breakpoint '${breakpoint}' is not defined in spacing. Will use closest previous breakpoint '${fallbackBreakpoint}' in applying '${property}' of (${value})`
      // );

      // replace requested breakpoint with fallback
      breakpoint = fallbackBreakpoint;
    }
  }

  let invalid = invalidValue(theme, breakpoint, value);

  if (invalid) {
    // throwInDev(invalid);
    warnInDev(invalid);
    return [];
  }

  return SUPPORTED_PROPS[property].map(
    (prop) => `${prop}: ${theme.responsiveSpacing[breakpoint][value]}px;`
  );
};

/*
 * spacing helper generates spacing styles for components
 *
 * Basic usage:
 *
 * using component properties:
 *
 * <MyComp mt={3} mb={4}/>
 *
 * OR styled components interpolation:
 *
 * const styles = css`${spacing({ theme, mt: 3, mb : 4 })}`
 *
 * @see SUPPORTED_PROPERTIES for valid properties and aliases.
 *
 * margin-top: 16px; @media (min-width: 768px) { margin-top: 24px; }
 * margin-bottom: 16px; @media (min-width: 768px) { margin-bottom: 32px; }
 *
 * Spacing helper uses settings under 'spacing' key in theme:
 * @see src/containers/Theme/theme
 *
 * Plain values such as mt:2 will retrieve and apply spacing as per the breakpoints set out
 * in theme's spacing table
 *
 * Note the zero breakpoint ('xs') will be used as the base style (i.e. not wrapped in media query)
 *
 * Custom values can be used by adding 'px' to value.
 *
 * Custom values can be provided under breakpoint keys:
 *
 * Important: If specifying breakpoints in properties, you must
 * supply the lowest breakpoint ('xs') to ensure base styles are created.
 *
 * <MyComp mt={xs: '10px', sm: '20px' } />
 *
 * generates:
 * margin-top: 10px; @media (min-width: 576px) { margin-top: 20px; }
 *
 */
export default (props: any) => generateHelper(SUPPORTED_PROPS, props, { applyValue });
