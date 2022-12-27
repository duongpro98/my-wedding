import { css } from 'styled-components';

export const hideOnPrint = () => css`
  @media print {
    display: none;
  }
`;

export const showOnPrint = () => css`
  @media print {
    display: block;
  }
`;

export const iconColorOnPrint = () => css`
  @media print {
    fill: black;
  }
`;
