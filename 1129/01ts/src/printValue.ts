import { Ivaluable } from "./Ivaluable";
//제네릭 타입의 제약 요건 !
export const printValueT = <Q,T extends Ivaluable<Q>>(o:T) => console.log(o.value)
export {Ivaluable}