export interface IPropList {
  [key: string]: string[];
}

export const isPlainValue = (value: any): boolean =>
  typeof value === 'string' || typeof value === 'number';

export const isObject = (value: any) => typeof value === 'object' && value !== null;
