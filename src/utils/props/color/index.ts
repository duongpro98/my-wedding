import { IPropList } from '../';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  color: ['color'],
  backgroundColor: ['background-color'],
  opacity: ['opacity']
};

const getValue = (propValue, property, { colors }) => {
  if (property === 'opacity') {
    return propValue;
  }

  const colorArgs = propValue.split('.');
  const firstKey = colorArgs.shift();

  const color = colorArgs.reduce((acc, curr) => acc[curr], colors[firstKey]);

  return typeof color === 'undefined' ? propValue : color;
};

export default (props: any) => generateHelper(SUPPORTED_PROPS, props, { getValue });
