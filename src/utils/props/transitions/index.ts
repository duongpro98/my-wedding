import { IPropList } from '../';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  transition: ['transition']
};

const getValue = (propValue, property, { motion }) => {
  const timing = propValue === true ? motion.timing.default : motion.timing[propValue];

  return `${timing} ${motion.ease}`;
};

export default (props) => generateHelper(SUPPORTED_PROPS, props, { getValue });
