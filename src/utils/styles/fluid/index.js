import { css } from 'styled-components';

import mq from "../mq";
import {BREAKPOINTS} from "../mq";

export default (properties = [], { min, max }) =>
  properties.map(
    (cssProp) => css`
      ${cssProp}: ${min}px;

      ${mq('sm')} {
        ${cssProp}: calc(${min}px + ${max - min} * ((100vw - ${
      BREAKPOINTS.sm
    }px) / ${BREAKPOINTS.xl - BREAKPOINTS.sm}));
      }

      ${mq('xl')} {
        ${cssProp}: ${max}px;
      }
    `
  );
