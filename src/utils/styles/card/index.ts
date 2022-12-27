import { css } from 'styled-components';
import {spacing} from "../../props";

const card = ({ theme }) => `
  background-color: ${theme.colors.background.primary};
  border-radius: ${theme.card.borderRadius}px;
`;

export const linkCard = ({ theme }) => css`
  ${card({ theme })}
  border: ${theme.card.border};
  box-shadow: ${theme.card.boxShadow};
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: ${theme.card.boxShadowHover};
  }
`;

export const plainCard = ({ theme }) => css`
  ${card({ theme })}
  border: ${theme.card.border};
`;

export const plainCardGroup = ({ theme }) => css`
  ${spacing({ theme, p: 3 })};
  border-bottom: ${theme.card.border};
  &:last-child {
    border-bottom: none;
  }
`;

export const restrictCardTitle = `
  /*  Start with fallback for browsers that don't support -webkit-line-clamp */
  position: relative;
  height: 4.6em;
  overflow: hidden;

  &:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    height: 4.5rem;
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0px,
      rgb(255, 255, 255) 70%,
      rgb(255, 255, 255) 100%
    );
  }

  @supports (-webkit-line-clamp: 3) {
    height: auto;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    &:after {
      display: none;
    }
  }
`;
