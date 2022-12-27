import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import {
  buttonReset,
  buttonColors,
  buttonSize,
  safeFocusRemoval,
  text_m,
  focusOutline,
  mq
} from '../../utils/styles';
import {ChildrenPropTypes} from "../../types";
import theme from './theme';

export * from './theme';

const GlobalStyles = createGlobalStyle`

${normalize}

html {
  box-sizing: border-box;
  height: 100%;
  overflow:auto;
  overflow-x: hidden;
}

* {
  &,
  &:before,
  &:after {
    box-sizing: inherit;
  }
}        

body {
  max-width: 100%;
  min-height: 100%; 
  ${text_m}
  position: relative;
  margin: 0;
  color: ${theme.colors.element.primary};
  min-width: 300px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &.menu-active {
    height: 100%;
  }
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

img,
picture,
svg {
  vertical-align: middle;
  border-style: none;
  height: auto;
  max-width: 100%;
}

img {

  &.lazyload,
  &.lazyloading  {
    opacity: 0;
  }

  &.lazyloaded {
   
    ${mq('md')} {
      transition: opacity 0.4s linear; 
    }

    opacity: 1;
  }
}

.button-primary {
  ${buttonReset()}
  ${buttonSize(theme.buttons.default)}
  ${buttonColors(theme.colors.button.primary)}
}

.button-outline {
  ${buttonReset()}
  ${buttonSize(theme.buttons.default)}
  ${buttonColors(theme.colors.button.outline)}
}

.button-slim {
  ${buttonSize(theme.buttons.slim)}
}

a:focus {
  ${safeFocusRemoval}
  ${focusOutline({ theme })}
}
.hide-on-print{
  @media print {
    display:none;
  }
}
@media print {
  * {
      background: transparent !important;
      color: black !important; // Black prints faster: h5bp.com/s
      color-adjust: economy;
      box-shadow: none !important;
      text-shadow: none !important;
      &::after {
        box-shadow: none !important;
      }
    }


    // Prevent page breaks in the middle of a blockquote or preformatted text block
    pre,
    blockquote {
      border: 1px solid black;
      page-break-inside: avoid;
    }

    tr,
    img {   
      page-break-before: auto; /* 'always,' 'avoid,' 'left,' 'inherit,' or 'right' */
      page-break-after: auto; /* 'always,' 'avoid,' 'left,' 'inherit,' or 'right' */
      page-break-inside: avoid; /* or 'auto' */
     }
    img { max-width: 100% !important; }

    @page { margin: 0.5cm; }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    // Avoid page breaks after a heading
    p,
    h2,
    h3 { page-break-after: avoid; }
  
  }
`;

export default function Theme({ children }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: ChildrenPropTypes
};

//  global spacing styles TODO incorporate scale for breakpoints?
// ${generateSpacingStyles('m', ['margin'])}
// ${generateSpacingStyles('mx', ['margin-left', 'margin-right'])}
// ${generateSpacingStyles('my', ['margin-top', 'margin-bottom'])}
// ${generateSpacingStyles('mt', ['margin-top'])}
// ${generateSpacingStyles('mb', ['margin-bottom'])}
// ${generateSpacingStyles('ml', ['margin-left'])}
// ${generateSpacingStyles('mr', ['margin-right'])}
// ${generateSpacingStyles('p', ['padding'])}
// ${generateSpacingStyles('px', ['padding-left', 'padding-right'])}
// ${generateSpacingStyles('py', ['padding-top', 'padding-bottom'])}
// ${generateSpacingStyles('pt', ['padding-top'])}
// ${generateSpacingStyles('pb', ['padding-bottom'])}
// ${generateSpacingStyles('pl', ['padding-left'])}
// ${generateSpacingStyles('pr', ['padding-right'])}
