import { css } from 'styled-components';
import {spacing} from "../../props";

import color from "../color";
enum BackgroundColors {
  White = 'white',
  Grey = 'grey',
  'Light beige' = 'beige'
}

const sectionThemeColors = {
  [BackgroundColors.White]: color('all.white'),
  [BackgroundColors.Grey]: color('all.deepBlueTint07'),
  [BackgroundColors['Light beige']]: color('all.light')
};

export const handleSectionTheme = (sectionTheme) => css`
  background-color: ${sectionThemeColors[sectionTheme]};

  /* swallow padding if section follows another of same colour */
  .${sectionTheme} + & {
    padding-top: 0 !important;
  }
`;

export default ({ theme, sectionTheme = 'white' }) => css`
  ${spacing({ theme, py: 7 })}
  ${handleSectionTheme(sectionTheme)};
`;
