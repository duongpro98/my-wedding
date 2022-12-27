export const imagePlaceholderSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXd3uHqnaHGAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';

export const imageGreyPlaceholderSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8e+/hfwAI2QOd3K1FCAAAAABJRU5ErkJggg==';

export const imageTransparentPlaceholderSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const imageFit = `
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

export const imageFitCover = `
  ${imageFit}
  object-fit: cover;
  font-family: 'object-fit: cover';
`;

export const imageFitContain = `
  ${imageFit}
  object-fit: contain;
  font-family: 'object-fit: contain';
`;
