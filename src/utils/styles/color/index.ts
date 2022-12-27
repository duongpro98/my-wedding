import {warnInDev} from "../../helpers/dev";

const getColor = (colors: any, colorKey: string) => {
  const colorArgs = colorKey.split('.');
  const firstKey = colorArgs.shift();

  const color = colorArgs.reduce((acc, curr) => {
    return acc[curr];
  }, colors[firstKey]);

  return color;
};

export default (colorKey: string) => ({ theme: { colors } }) => {
  let color = getColor(colors, colorKey);

  // If we don't have a color yet, search all colors outside of the theme
  if (typeof color === 'undefined') {
    color = getColor(colors, `all.${colorKey}`);
  }

  // Still no color, thrown warning
  if (typeof color === 'undefined') {
    warnInDev(`The color ('${colorKey}') that you tried to access doesn't exists.`);
  }

  return color;
};
