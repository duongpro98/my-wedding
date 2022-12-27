import { css } from 'styled-components';

export const aspect = (width, height) => css`
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-top: ${(100 * height) / width}%;
  }
`;
