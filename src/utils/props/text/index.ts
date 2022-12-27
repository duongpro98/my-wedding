import { IPropList } from '../';
import generateHelper from '../generateHelper';

const SUPPORTED_PROPS: IPropList = {
  textAlign: ['text-align']
};

export default (props) => generateHelper(SUPPORTED_PROPS, props);
