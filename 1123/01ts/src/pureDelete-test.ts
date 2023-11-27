import { pureDelete } from "./pureDelete";

const mixedArray: (string[] | { name: string })[] = [
  [],

  { name: "jack" },
  ["description"],
];

const objectOnly: object[] = pureDelete(mixedArray, (val) =>
  Array.isArray(val)
);

console.log(mixedArray, objectOnly);
