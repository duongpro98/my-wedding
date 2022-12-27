export { default as createFocusStylesObserver } from './FocusStylesObserver';

export const safeFocusRemoval = `
  .safe-focus-removal & {
    outline: 0
  }
`;

export const focusOutline = ({ theme }) => `
  outline-color: ${theme.colors.element.focused};
  outline-offset: 2px;
  outline-width: 2px;
  outline-style: solid;
}
`;
