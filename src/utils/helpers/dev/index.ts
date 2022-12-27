// true if in dev
export const isDev: boolean = process.env.NODE_ENV === 'development';

const debugInDev = (fn) => (msg: any): void => {
  if (!fn || !isDev || !msg) {
    return;
  }

  if (typeof msg === 'function') {
    fn(msg());
  } else {
    fn(msg);
  }
};

// warn in dev only
export const logInDev = debugInDev(console.log);

// log in dev only
export const warnInDev = debugInDev(console.warn);

// error in dev only
export const errorInDev = debugInDev(console.error);

export function throwInDev(msg: any): void {
  if (!isDev || !msg) {
    return;
  }

  if (typeof msg === 'function') {
    throw new Error(msg());
  } else {
    throw new Error(msg);
  }
}

export default isDev;
