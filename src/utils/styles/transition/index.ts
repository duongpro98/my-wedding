import theme from '../../../containers/Theme/theme';

export default (
  properties: string | string[] = 'all',
  speed = 'default',
  delay = 'none',
  ease = theme.motion.ease
) => {
  let propertiesToMap = [];

  if (typeof properties === 'string') {
    propertiesToMap.push(properties);
  } else {
    propertiesToMap = properties;
  }

  return propertiesToMap
    .map((prop) => {
      return `${prop} ${ease} ${theme.motion.timing[speed]} ${theme.motion.timing[delay]}`;
    })
    .join(', ');
};
