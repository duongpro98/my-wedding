import { oneOfType, arrayOf, node, func /* number, shape, string */ } from 'prop-types';

export const ChildrenPropTypes = oneOfType([arrayOf(node), node, func]).isRequired;
