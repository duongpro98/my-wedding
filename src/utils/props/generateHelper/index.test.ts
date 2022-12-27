import generateHelper, { defaultGetCssString } from './';

// const generateHelper = rewire('./index.ts');
import {BREAKPOINTS} from "../../styles/mq";

const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS);
const BP_KEY_0 = BREAKPOINT_KEYS[0];
const BP_KEY_1 = BREAKPOINT_KEYS[1];
const BP_VAL_0 = BREAKPOINTS[BP_KEY_0];
const BP_VAL_1 = BREAKPOINTS[BP_KEY_1];

const theme = { foo: 'bar' };

const supportedProps = {
  mx: ['margin-left', 'margin-right'],
  my: ['margin-top', 'margin-bottom']
};

describe('utils/props/generateHelper', () => {
  it('basic helper for single property', () => {
    const helper = generateHelper(supportedProps, { theme, mx: '10px' });

    const output = `${helper}`;

    expect(output).toEqual(`${supportedProps.mx[0]}: 10px; ${supportedProps.mx[1]}: 10px;`);
  });

  it('basic helper for multiple properties', () => {
    const helper = generateHelper(supportedProps, { theme, mx: '10px', my: '5px' });

    const output = `${helper}`;

    expect(output).toEqual(
      `${supportedProps.mx[0]}: 10px; ${supportedProps.mx[1]}: 10px; ${supportedProps.my[0]}: 5px; ${supportedProps.my[1]}: 5px;`
    );
  });

  it('it calls optional getValue parameter', () => {
    const getValue = jest.fn();

    const helper = generateHelper(supportedProps, { theme, mx: '10px' }, { getValue });

    expect(getValue).toHaveBeenCalledWith({ mx: '10px' }, 'mx', theme);
  });

  it('it calls optional applyValue parameter', () => {
    const applyValue = jest.fn();

    const helper = generateHelper(
      supportedProps,
      { theme, mx: { [BP_KEY_0]: '10px', [BP_KEY_1]: '20px' } },
      { applyValue }
    );

    expect(applyValue).toHaveBeenNthCalledWith(
      1,
      supportedProps,
      theme,
      'mx',
      '10px',
      BP_KEY_0,
      undefined
    );
    expect(applyValue).toHaveBeenNthCalledWith(
      2,
      supportedProps,
      theme,
      'mx',
      '20px',
      BP_KEY_1,
      undefined
    );
  });

  it('it calls optional getCssString parameter', () => {
    const getCssString = jest.fn();

    const helper = generateHelper(
      supportedProps,
      { theme, mx: { [BP_KEY_0]: '10px', [BP_KEY_1]: '20px' } },
      { getCssString }
    );

    expect(getCssString).toHaveBeenNthCalledWith(
      1,
      [`${supportedProps.mx[0]}: 10px;`, `${supportedProps.mx[1]}: 10px;`],
      BP_KEY_0
    );
    expect(getCssString).toHaveBeenNthCalledWith(
      2,
      [`${supportedProps.mx[0]}: 20px;`, `${supportedProps.mx[1]}: 20px;`],
      BP_KEY_1
    );
  });
});

describe('utils/props/generateHelper.defaultGetCssString', () => {
  it('returns correct output for zero breakpoint', () => {
    const css = defaultGetCssString(['margin-top: 10px;', 'margin-bottom: 10px;'], BP_KEY_0);

    expect(css).toEqual('margin-top: 10px; margin-bottom: 10px;');
  });

  it('returns correct output non-zero breakpoint', () => {
    const css = defaultGetCssString(['margin-top: 10px;', 'margin-bottom: 10px;'], BP_KEY_1);

    expect(css).toEqual(
      `@media (min-width: ${BP_VAL_1}px) { margin-top: 10px; margin-bottom: 10px; }`
    );
  });
});
