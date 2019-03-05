type INewable<T> = new (...args: any[]) => T;

const INewable = Symbol.for('INewable');

export { INewable };
