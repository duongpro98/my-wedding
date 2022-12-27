import mq from "../mq";
import { css } from 'styled-components';
import { IButtonColors, IButtonSetting } from '../../../containers/Theme/theme';
import { throwInDev } from '../../helpers/dev';

export function buttonReset() {
  return css`
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    appearance: none;
  `;
}

export function buttonColors(settings: IButtonColors) {
  return css`
    background: ${settings.background};
    color: ${settings.color};
    border: 2px solid ${settings.border};
    position: relative;

    &:hover {
      background: ${settings.backgroundHover};
      color: ${settings.colorHover};
      border: 2px solid ${settings.borderHover};
    }

    outline: 0;

    body:not(.safe-focus-removal) &:focus {
      /* psuedo focus outline */
      &:before {
        position: absolute;
        left: -6px;
        top: -6px;
        content: '';
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        border: 2px solid ${({ theme }) => theme.colors.element.focused};
        border-radius: 9999px;
      }
    }
  `;
}

export function buttonSize(settings: IButtonSetting) {
  return css`
    font-size: ${settings.fontSize.sm}px;
    line-height: ${settings.lineHeight.sm}px;
    font-weight: ${settings.fontWeight || 'bold'};
    font-family: ${settings.fontFamily};
    border-radius: 32px;
    padding: ${settings.padding.y}px ${settings.padding.x}px;
    text-align: center;

    ${mq('md')} {
      font-size: ${settings.fontSize.md}px;
      line-height: ${settings.lineHeight.md}px;
    }
  `;
}

export const button = (size = 'default', color = 'primary') => ({ theme }) => {
  if (typeof size !== 'string') {
    // most likely got a theme object. give helpful error
    throwInDev(
      `Invalid button 'size' parameter (${size}). Usage: button([size],[color]) => curried fn. Did you forget to add parenthesis?`
    );
  }

  return css`
  ${buttonReset}
  ${buttonSize(theme.buttons[size])}
  ${buttonColors(theme.colors.button[color])}
`;
};
