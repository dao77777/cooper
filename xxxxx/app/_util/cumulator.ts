export const cumulator =
  <T>(getNum: (cur: T) => number) =>
  (acc: number, cur: T) =>
    acc + getNum(cur)
