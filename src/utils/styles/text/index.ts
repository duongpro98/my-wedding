import mq from "../mq";
import theme, { IFontSetting } from '../../../containers/Theme/theme';
import {spacing} from "../../props";
// import { ITheme } from '_containers/Theme/theme';

function headingStyle(settings: IFontSetting) {
  return `
    font-size: ${settings.fontSize.sm}px;
    line-height: ${settings.lineHeight.sm}px;
    font-weight: ${settings.fontWeight || 'bold'};
    font-family: ${settings.fontFamily};
    ${spacing({ theme, my: 0 })}
  
    ${mq('md')} {
      font-size: ${settings.fontSize.md}px;
      line-height: ${settings.lineHeight.md}px;
    }
  `;
}

function bodyStyle(settings: IFontSetting) {
  return `
    font-size: ${settings.fontSize.sm}px;
    line-height: ${settings.lineHeight.sm}px;
    font-weight: ${settings.fontWeight || 'normal'};
    ${settings.textTransform ? 'text-transform: ' + settings.textTransform + ';' : ''}
    font-family: ${settings.fontFamily};
    margin: 16px 0;

    ${mq('md')} {
      font-size: ${settings.fontSize.md}px;
      line-height: ${settings.lineHeight.md}px;
    }
  `;
}

export const pageTitle = () => `${headingStyle(theme.fonts.headings.title)}`;
export const heading_xxxl = () => `${headingStyle(theme.fonts.headings.xxxl)}`;
export const heading_xxl = () => `${headingStyle(theme.fonts.headings.xxl)}`;
export const heading_xl = () => `${headingStyle(theme.fonts.headings.xl)}`;
export const heading_l = () => `${headingStyle(theme.fonts.headings.l)}`;
export const heading_m = () => `${headingStyle(theme.fonts.headings.m)}`;
export const heading_s = () => `${headingStyle(theme.fonts.headings.s)}`;
export const heading_xs = () => `${headingStyle(theme.fonts.headings.xs)}`;
export const text_l = () => `${bodyStyle(theme.fonts.text.l)}`;
export const text_m = () => `${bodyStyle(theme.fonts.text.m)}`;
export const text_s = () => `${bodyStyle(theme.fonts.text.s)}`;
export const text_xs = () => `${bodyStyle(theme.fonts.text.xs)}`;
export const text_xscap = () => `${bodyStyle(theme.fonts.text.xscap)}`;
