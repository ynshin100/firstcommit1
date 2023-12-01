import { mergeObjects } from "./mergeObject";




const nameObj = {
  name: "Jack",
};

const ageObj = {
  age: "32",
};

const nameAndAge = mergeObjects(nameObj, ageObj);
