export const range = (from: number, to: number): number[] => 
  from < to ? [from, ...range(from + 1, to)] : [];

  //중괄호가 없으면 표현식문


