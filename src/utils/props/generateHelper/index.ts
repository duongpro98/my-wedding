import {isPlainValue, isObject} from "../types";
import mq, { getZeroMediaQuery, getBreakpointKeys } from '../../styles/mq';
import { IPropList } from '../types';

export interface IHelperOptions {
  getValue?: (value: any, property: string, theme: any) => any;
  applyValue?: (
    SUPPORTED_PROPS: IPropList,
    theme: any,
    property: string,
    value?: any,
    breakpoint?: string
  ) => string[];
  getCssString?: (css: string | string[], breakpoint?: string) => string;
}
/**
 * get media query properties
 * @param value component props
 * @returns Array.<string> property keys that match breakpoints
 */
const getMediaQueries = (theme: any, value: any): string[] => {
  if (!isObject(value)) {
    return [];
  }
  return getBreakpointKeys(value);
};

const defaultGetValue = (props: any, property: string, theme?: any) => {
  return props ? props[property] : undefined;
};

// default implementation for applying prop/value to get css
const defaultApplyValue = (
  SUPPORTED_PROPS: IPropList,
  theme: any,
  property: string,
  value?: any,
  breakpoint?: string,
  config?: any
): string[] => {
  return SUPPORTED_PROPS[property].map((prop) => `${prop}: ${value};`);
};

// default implementation for wrapping css partials with media queries
export const defaultGetCssString = (css: string | string[], breakpoint?: string): string => {
  // might get array of css partials, convert to string
  if (Array.isArray(css)) {
    css = css.join(' ');
  }

  return !breakpoint || breakpoint === getZeroMediaQuery() ? css : `${mq(breakpoint)} { ${css} }`;
};

const defaultOptions = {
  getValue: defaultGetValue,
  applyValue: defaultApplyValue,
  getCssString: defaultGetCssString
};

export default (
  SUPPORTED_PROPS: IPropList,
  { theme, config = undefined, ...rest },
  options?: IHelperOptions
) =>
  Object.keys(rest)
    .filter((key) => Object.keys(SUPPORTED_PROPS).indexOf(key) > -1)
    .reduce((prev, property) => {
      const { getValue, applyValue, getCssString } = { ...defaultOptions, ...options };

      const value = getValue(rest, property, theme);

      // case 1. simple value to applied without media queries

      if (isPlainValue(value)) {
        let css: string[] = applyValue(SUPPORTED_PROPS, theme, property, value, undefined, config);
        return prev.concat(getCssString(css, undefined));
      }

      // case 2. value is object containing values keyed by media queries

      const mediaQueries: string[] = getMediaQueries(theme, value);
      return prev.concat(
        ...mediaQueries.map((breakpoint) => {
          let css: string[] = applyValue(
            SUPPORTED_PROPS,
            theme,
            property,
            value[breakpoint],
            breakpoint,
            config
          );
          return getCssString(css, breakpoint);
        })
      );
    }, [])
    .join(' ');
