import { mergeArray } from "./mergeArray";
const mergeArray1 = mergeArray(["hello"], ["world"]);

console.log(mergeArray1);

const mergeArra2 = mergeArray(
  [1],
  [2],
  [3, 4, 5],
  [4, 5, 6, 7],
  [5, 6, 7, 8],
  [6, 7, 8, 9]
);

console.log(mergeArra2);
