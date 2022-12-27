import { css } from 'styled-components';
import {aspect} from "../layout";
import mq from '../mq';

/*
 * create a container with fixed aspect ratio
 * using the padding-top aspect ratio trick to create a container
 */

export default (width: number = 100, height: number = 100) => css`
  ${aspect(width, height)}

  display: inline-block;

  svg,
  img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`;

// Encode symbols
function urlEncode(string: any) {
  const encodingMap = [
    [/%/g, '%25'],
    [/</g, '%3C'],
    [/>/g, '%3E'],
    [/ /g, '%20'],
    [/!/g, '%21'],
    [/\*/g, '%2A'],
    [/'/g, '%27'],
    [/"/g, '%22'],
    [/\(/g, '%28'],
    [/\)/g, '%29'],
    [/;/g, '%3B'],
    [/:/g, '%3A'],
    [/@/g, '%40'],
    [/&/g, '%26'],
    [/=/g, '%3D'],
    [/\+/g, '%2B'],
    [/\$/g, '%24'],
    [/,/g, '%2C'],
    [/\//g, '%2F'],
    [/\?/g, '%3F'],
    [/#/g, '%23'],
    [/\[/g, '%5B'],
    [/\]/g, '%5D']
  ];

  for (let i = 0; i < encodingMap.length; i++) {
    const entry = encodingMap[i];
    const search = entry[0];
    const replacement = entry[1];
    string = string.replace(search, replacement);
  }

  return string;
}

// Format the SVG as a URL
export function cssInlineSvg(svgString: string) {
  return `url("data:image/svg+xml,${urlEncode(svgString)}")`;
}

export const cssResponsiveSvg = (
  w: { xs: number; md: number },
  h: { xs: number; md: number }
) => css`
  svg {
    width: ${w.xs}px;
    height: ${h.xs}px;
    ${mq('md')} {
      width: ${w.md}px;
      height: ${h.md}px;
    }
  }
`;
