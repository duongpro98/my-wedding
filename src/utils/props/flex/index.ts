import { IPropList } from '../';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  alignSelf: ['align-self'],
  alignItems: ['align-items'],
  alignContent: ['align-content'],
  justifyContent: ['justify-content'],
  order: ['order'],
  flexDirection: ['flex-direction'],
  flexWrap: ['flex-wrap'],
  flex: ['flex'],
  flexGrow: ['flex-grow'],
  flexShrink: ['flex-shrink']
};

// Helper to ensure auto sizing works on IE11
const getValue = (props, property) => {
  const propValue = props ? props[property] : undefined;

  if (property === 'flex' && Number(propValue) === 1) {
    return '1 0 auto';
  }

  return propValue;
};

export default (props) => generateHelper(SUPPORTED_PROPS, props, { getValue });
