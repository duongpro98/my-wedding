import styled from "styled-components";

import { flex, layout, text, spacing, color } from '../props';
import mq, { getZeroMediaQuery } from '../styles/mq';
import { isPlainValue } from '../props';
import {ITheme} from "../../containers/Theme";

const toPercent = (col: any, colCount: number): string => `${(parseInt(col) / colCount) * 100}%`;

const wrapWithMediaQuery = (breakpoint: string, value: any): string => {
  value = Array.isArray(value) ? value.join('') : value;
  if (breakpoint !== getZeroMediaQuery()) {
    return `
    ${mq(breakpoint)} {
      ${value}
    }
    `;
  }
  return `${value}`;
};

const getColStyles = (col: any, colCount: number): string => {
  if (col === 'auto') {
    return `
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    `;
  }

  return `
    flex: 0 0 ${toPercent(col, colCount)};
    max-width: ${toPercent(col, colCount)};
  `;
};

const columns = (col: any, theme: ITheme) => {
  // 1 grid size all breakpoints
  if (isPlainValue(col)) {
    return getColStyles(col, theme.grid.colCount);
  }

  // At this point cols should be an object;
  // {sm: 4, md: 6}
  return Object.keys(col).map((size) =>
    wrapWithMediaQuery(size, getColStyles(col[size], theme.grid.colCount))
  );
};

const offset = (offset: any, theme: any) => {
  // 1 grid size all breakpoints
  if (isPlainValue(offset)) {
    return `margin-left: ${toPercent(offset, theme.grid.colCount)};`;
  }

  // At this point value should be an object;
  // {sm: 4, md: 6}
  return Object.keys(offset).map((size) =>
    wrapWithMediaQuery(size, `margin-left: ${toPercent(offset[size], theme.grid.colCount)};`)
  );
};

const push = (push: any, theme: any) => {
  // 1 grid size all breakpoints
  if (isPlainValue(push)) {
    return `margin-right: ${toPercent(push, theme.grid.colCount)};`;
  }

  // At this point value should be an object;
  // {sm: 4, md: 6}
  return Object.keys(push).map((size) =>
    wrapWithMediaQuery(size, `margin-right: ${toPercent(push[size], theme.grid.colCount)};`)
  );
};

const order = (order: any) => {
  const propType = typeof order;

  // 1  grid size all breakpoints
  if (propType === 'string' || propType === 'number') {
    return `order: ${order};`;
  }

  // At this point value should be an object;
  // {sm: 4, md: 6}
  return Object.keys(order).map((size) => wrapWithMediaQuery(size, `order: ${order[size]};`));
};

const gutters = ({ config, theme }: any) => {
  const gutters = config && config.gutters ? config.gutters : theme.grid.gutter.directions;

  return Object.keys(theme.grid.gutter.size).map((breakpoint) =>
    wrapWithMediaQuery(
      breakpoint,
      gutters.map((dir: any) => `padding-${dir}: ${theme.grid.gutter.size[breakpoint] / 2}px;`)
    )
  );
};

const borders = ({ config, theme }: any) => {
  const borders = config && config.borders;

  if (!borders) {
    return '';
  }

  const borderColor = config && config.borderColor ? config.borderColor : theme.grid.borderColor;
  const borderWidth = config && config.borderWidth ? config.borderWidth : theme.grid.borderWidth;

  const gutters = config && config.gutters ? config.gutters : theme.grid.gutter.directions;
  const gutterLeft = gutters.indexOf('left') > -1;
  const gutterRight = gutters.indexOf('right') > -1;
  const gutterTop = gutters.indexOf('top') > -1;
  const gutterBottom = gutters.indexOf('bottom') > -1;

  return Object.keys(theme.grid.gutter.size).map((breakpoint) =>
    wrapWithMediaQuery(
      breakpoint,
      `
      :after {
        
        content: '';
        position: absolute;
        top: ${gutterTop ? theme.grid.gutter.size[breakpoint] / 2 : 0}px;
        left: ${gutterLeft ? theme.grid.gutter.size[breakpoint] / 2 : 0}px;
        width: calc(100% - ${gutterLeft ? theme.grid.gutter.size[breakpoint] / 2 : 0}px - ${
        gutterRight ? theme.grid.gutter.size[breakpoint] / 2 : 0
      }px );
        height: calc(100% - ${gutterTop ? theme.grid.gutter.size[breakpoint] / 2 : 0}px - ${
        gutterBottom ? theme.grid.gutter.size[breakpoint] / 2 : 0
      }px );
        pointer-events: none;
        
        ${borders.map((dir: any) => `border-${dir}: ${borderWidth} solid ${borderColor};`).join('')};
    }`
    )
  );
};

// reverse effect of item gutters with negative margins
const rowGutters = ({ config, theme }: any) => {
  const gutters = config && config.gutters ? config.gutters : [];
  return Object.keys(theme.grid.gutter.size).map((breakpoint) =>
    wrapWithMediaQuery(
      breakpoint,
      gutters.map((dir: any) => `margin-${dir}: -${theme.grid.gutter.size[breakpoint] / 2}px;`)
    )
  );
};

const calculateItemConfig = ({ config, theme }: any) => {
  const styles = [];

  if (typeof config.col !== 'undefined') {
    styles.push(columns(config.col, theme));
  }

  if (typeof config.order !== 'undefined') {
    styles.push(order(config.order));
  }

  if (typeof config.offset !== 'undefined') {
    styles.push(offset(config.offset, theme));
  }

  if (typeof config.push !== 'undefined') {
    styles.push(push(config.push, theme));
  }

  return styles;
};

const Container = styled.div<any>`
  width: 100%;
  max-width: ${(props: any) => (props.fluid ? 'none' : `${props.theme.grid.containerMaxWidth}px`)};
  min-width: ${(props: any) => (props.fluid ? 'none' : `${props.theme.grid.containerMinWidth}px`)};
  margin-right: auto;
  margin-left: auto;

  padding-left: ${({ theme }) => theme.grid.margin.xs}px;
  padding-right: ${({ theme }) => theme.grid.margin.xs}px;

  ${mq('lg')} {
    padding-left: ${({ theme }) => theme.grid.margin.lg}px;
    padding-right: ${({ theme }) => theme.grid.margin.lg}px;
  }

  ${mq('xl')} {
    padding-left: 0;
    padding-right: 0;
  }

  ${spacing}
`;

const Row = styled.div<any>`
  display: flex;
  ${flex}
  ${rowGutters}
  ${spacing}
`;

Row.defaultProps = {
  flexWrap: 'wrap'
} as any;

const Item = styled.div<any>`
  position: relative;
  width: 100%;
  ${color}
  ${layout}
  ${flex}
  ${text}
  ${spacing}
  ${gutters}
  ${borders}
  ${calculateItemConfig}
`;

Item.defaultProps = {
  config: {
    gridX: true,
    gridY: true
  }
} as any;

export default {
  Container,
  Row,
  Item
};
