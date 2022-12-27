import { cssInlineSvg } from '.';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><title>icon-check</title><path d="M3.43,8.58.23,5.39a.48.48,0,0,1-.14-.34A.5.5,0,0,1,.23,4.7L.94,4a.41.41,0,0,1,.33-.15A.49.49,0,0,1,1.63,4L3.78,6.16l4.6-4.6a.47.47,0,0,1,.35-.15.43.43,0,0,1,.34.15l.71.69a.45.45,0,0,1,.13.35.47.47,0,0,1-.13.34L4.12,8.58a.45.45,0,0,1-.34.15A.45.45,0,0,1,3.43,8.58Z" fill="#e4541b"/></svg>`;

const encoded = `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%3E%3Ctitle%3Eicon-check%3C%2Ftitle%3E%3Cpath%20d%3D%22M3.43%2C8.58.23%2C5.39a.48.48%2C0%2C0%2C1-.14-.34A.5.5%2C0%2C0%2C1%2C.23%2C4.7L.94%2C4a.41.41%2C0%2C0%2C1%2C.33-.15A.49.49%2C0%2C0%2C1%2C1.63%2C4L3.78%2C6.16l4.6-4.6a.47.47%2C0%2C0%2C1%2C.35-.15.43.43%2C0%2C0%2C1%2C.34.15l.71.69a.45.45%2C0%2C0%2C1%2C.13.35.47.47%2C0%2C0%2C1-.13.34L4.12%2C8.58a.45.45%2C0%2C0%2C1-.34.15A.45.45%2C0%2C0%2C1%2C3.43%2C8.58Z%22%20fill%3D%22%23e4541b%22%2F%3E%3C%2Fsvg%3E")`;

describe('cssInlineSvg', () => {
  it('encodes svg into url friendly string', () => {
    expect(cssInlineSvg(svg)).toEqual(encoded);
  });
});
