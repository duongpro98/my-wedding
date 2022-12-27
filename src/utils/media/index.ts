import { warnInDev } from '../helpers/dev';

export const convertSrcJss = (src, width = null) => {
  if (!src) {
    return '';
  }

  let pattern = /^(.*\/-\/)media(\/[^?]*)?.*$/gim;
  let matches = pattern.exec(src);

  if (matches && matches.length > 2) {
    return `${matches[1]}jssmedia${matches[2]}`;
  }

  return src;
};

export const createSrcSet = (src, widths) => {
  let jssSrc = convertSrcJss(src);
  if (!jssSrc) {
    warnInDev(`Could not get jssSrc for ${src}`);
    return '';
  }
  return widths.map((width) => `${jssSrc}?mw=${width} ${width}w`).join(', ');
};
