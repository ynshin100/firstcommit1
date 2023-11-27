import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./fillter";
let numbers: number[] = range(1, 101);
// const idodd = (n:number):boolean => n % 2 != 0;
// const evensum = (n:number):boolean => n % 2 == 0;
let result = fold(map(numbers,(value)), (result, value) => result + value, 0);
console.log(result)