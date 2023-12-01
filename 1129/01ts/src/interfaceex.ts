export interface Isquare {
  size: number;
}
export interface IsRectangle {
  width: number;
  hight: number;
}
const square: Isquare = {
  size: 10,
};

const rectgangle = {
  width: 4,
  hight: 5,
};

export type Ishape = IsRectangle | Isquare;

// const calcArea = (shape: Ishape): number => {
//   return 1 + 1;
// };
