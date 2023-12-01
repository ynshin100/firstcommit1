import { Ivaluable } from "./Ivaluable";

export class value<T> implements Ivaluable<T> {
  constructor(public value: T) {}
}

export { Ivaluable };
