const multiply = (result: number, val: number): number => result * val;

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers
  .filter((val) => val % 2 != 0)
  .map((val) => val * val)
  .reduce(multiply, 1);
  let result = Math.round(Math.sqrt(tempResult))
console.log(result);

//sqrt 해당 값에 제곱근
