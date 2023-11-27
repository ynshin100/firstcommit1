import { range } from "./range";

// let squares: number[] = range(1, 6).map((val: number) => val * val);

// console.log(squares)

//range (숫자,숫자) 앞에 숫자부터 뒤에 숫자전까지
let names: string[] = range(1, 6).map((val, i) => `[${i}] : ${val}`);

console.log(names);
