import { isValidLinkObject, getLink } from '.';

describe('utils/data/link/isValidLinkObject', () => {
  it('validates internal link obj', () => {
    expect(isValidLinkObject(validInternalLinkObject)).toBe(true);
  });

  it('validates external link obj', () => {
    expect(isValidLinkObject(validExternalLinkObject)).toBe(true);
  });

  it('invalidates internal link obj', () => {
    expect(isValidLinkObject(invalidInternalLinkObject)).toBe(false);
  });

  it('invalidates null', () => {
    expect(isValidLinkObject(null)).toBe(false);
  });

  it('invalidates variant link obj', () => {
    expect(isValidLinkObject(internalLinkVariant)).toBe(false);
  });

  it('invalidates variant exteranl link obj', () => {
    expect(isValidLinkObject(externalLinkVariant)).toBe(false);
  });
});

describe('utils/data/link/getLink', () => {
  it('returns same valid link obj', () => {
    expect(getLink(validInternalLinkObject)).toEqual({
      queryString: '',
      target: '',
      text: 'Page Banner',
      type: '',
      url: '/page-banner'
    });
  });
  it('returns same valid external link obj', () => {
    expect(getLink(validExternalLinkObject)).toEqual({
      queryString: '',
      target: '_blank',
      text: '',
      type: 'external',
      url: 'http://google.com'
    });
  });
  it('returns link obj for string', () => {
    expect(getLink(internalLinkString)).toEqual({
      url: internalLinkString
    });
  });
  it('returns link obj for external string', () => {
    expect(getLink(externalLinkString)).toEqual({
      url: externalLinkString,
      target: '_blank',
      type: 'external'
    });
  });

  it('handles link object variant', () => {
    expect(getLink(internalLinkVariant)).toEqual({
      url: internalLinkVariant.href,
      target: '',
      type: 'internal'
    });
  });

  it('handles external link object variant', () => {
    expect(getLink(externalLinkVariant)).toEqual({
      url: externalLinkVariant.href,
      target: '_blank',
      type: 'external'
    });
  });

  it('handles invalid link variant', () => {
    expect(getLink(invalidLinkVariant)).toEqual(null);
  });

  it('handles null', () => {
    expect(getLink(null)).toEqual(null);
  });

  it('converts type to lower case', () => {
    expect(getLink(null)).toEqual(null);
  });
});

var validInternalLinkObject = {
  queryString: '',
  target: '',
  text: 'Page Banner',
  type: '',
  url: '/page-banner'
};

var invalidInternalLinkObject = {
  queryString: '',
  target: '',
  text: 'Page Banner',
  type: ''
};

var validExternalLinkObject = {
  queryString: '',
  target: '_blank',
  text: '',
  type: 'External',
  url: 'http://google.com'
};

var internalLinkVariant = {
  anchor: '',
  class: '',
  href: '/focus-page',
  id: '{9CF34EDC-C0C3-4782-B92B-293029F05631}',
  linktype: 'internal',
  querystring: '',
  target: '',
  text: '',
  title: ''
};

var externalLinkVariant = {
  anchor: '',
  href: 'http://google.com',
  linktype: 'external',
  target: '_blank',
  text: 'Google'
};

var invalidLinkVariant = {
  anchor: '',
  linktype: 'external',
  target: '_blank',
  text: 'Google'
};

var internalLinkString = '/page-banner';

var externalLinkString = 'http://google.com';
