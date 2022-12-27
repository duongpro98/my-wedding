import { IPropList } from '../';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  display: ['display'],
  width: ['width'],
  w: ['width'],
  minWidth: ['min-width'],
  maxWidth: ['max-width'],
  height: ['height'],
  h: ['height'],
  minHeight: ['min-height'],
  maxHeight: ['max-height']
};

export default (props) => generateHelper(SUPPORTED_PROPS, props);
