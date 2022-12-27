import theme, { ILinkColors } from '../../../containers/Theme/theme';
import { css } from 'styled-components';
import { color, cssInlineSvg, mq } from '../../styles';

// TODO future use?
// remove native button styling for buttons as links
export function buttonAsLinkReset() {
  return `
    background: transparent;
    appearance: none;
    border: none;
    padding: 0;
    line-height: inherit;
    color: inherit;
    text-decoration: inherit;

    &:hover {
      color: inherit;
      text-decoration: inherit;
    }
  `;
}

export function linkStyle(settings: ILinkColors) {
  return `
    &:not(.button-primary):not(.button-outline){
      color: ${settings.color};
      position: relative;
      transition: background-color 0.2s linear, color 0.2s linear;
      text-decoration: ${settings.textDecoration};
      
      box-shadow: inset 0 -2px ${settings.border};

      &:visited {
        color: ${settings.colorVisited};
        box-shadow: inset 0 -2px ${settings.borderVisited};

        .no-visited-link & {
          color: inherit;
        }
      }

      &:hover, &:active, &:focus {
        color: ${settings.colorHover};
        background-color: ${settings.backgroundHover};
        cursor: pointer;
        box-shadow: inset 0 -2px ${settings.borderHover};

        path {
          fill: ${settings.colorHover};
        }
      }
      
      /* same styles but keep seperate. not supported by 
         IE11 so will break other hover/focus selectors */
      &:focus-within {
        color: ${settings.colorHover};
        background-color: ${settings.backgroundHover};
        cursor: pointer;
        box-shadow: inset 0 -2px ${settings.borderHover};
      }
    }
  `;
}

export const link = () => `${linkStyle(theme.colors.link.primary)}`;

export const linkReset = () => `
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

export const linkWithoutVisited = ({ theme }) =>
  `${linkStyle(theme.colors.link.primaryWithoutVisited)}`;

export const linkInText = () => {
  return css`
    .default_link {
      border-bottom: 2px solid ${color('all.green')};
      text-decoration: none;
      color: inherit;
      
      &:hover {
        border-color: transparent;
        color: #fff;
        background-color: #2db84b;
        border-radius: 0%;
      }
    }

    .secondary_link {
      text-decoration-line: underline;
      color: ${color('all.deepBlue')};

      &:before {
        display: inline-block;
        content: ' ';
        background-image: ${cssInlineSvg(
          `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7667 5.68334C11.7271 5.58105 11.6676 5.4876 11.5917 5.40834L6.59175 0.408345C6.51405 0.330647 6.42181 0.269013 6.32029 0.226963C6.21877 0.184912 6.10996 0.163269 6.00008 0.163269C5.77816 0.163269 5.56533 0.251426 5.40841 0.408345C5.33072 0.486044 5.26908 0.578286 5.22703 0.679804C5.18498 0.781323 5.16334 0.890129 5.16334 1.00001C5.16334 1.22193 5.25149 1.43476 5.40841 1.59168L8.99175 5.16668H1.00008C0.779068 5.16668 0.567106 5.25448 0.410826 5.41076C0.254546 5.56704 0.166748 5.779 0.166748 6.00001C0.166748 6.22102 0.254546 6.43299 0.410826 6.58927C0.567106 6.74555 0.779068 6.83334 1.00008 6.83334H8.99175L5.40841 10.4083C5.33031 10.4858 5.26831 10.578 5.22601 10.6795C5.1837 10.7811 5.16192 10.89 5.16192 11C5.16192 11.11 5.1837 11.2189 5.22601 11.3205C5.26831 11.422 5.33031 11.5142 5.40841 11.5917C5.48588 11.6698 5.57805 11.7318 5.6796 11.7741C5.78115 11.8164 5.89007 11.8382 6.00008 11.8382C6.11009 11.8382 6.21901 11.8164 6.32056 11.7741C6.42211 11.7318 6.51428 11.6698 6.59175 11.5917L11.5917 6.59168C11.6676 6.51243 11.7271 6.41897 11.7667 6.31668C11.8501 6.11379 11.8501 5.88623 11.7667 5.68334Z" fill="#188838"/>
                </svg>`
        )};
        background-size: 12px;
        height: 12px;
        width: 12px;
      }
    }
  `;
}