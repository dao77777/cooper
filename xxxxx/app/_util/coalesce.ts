/* eslint-disable */
export const coalesce = <T, K, M>(a: T, condition: any, b: K, c?: M) => {
  if (typeof condition === 'function') {
    return condition(a) ? b : (c ?? a)
  } else {
    return a === condition ? b : (c ?? a)
  }
}

export const undefinedCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return a === undefined ? b : (c ?? a)
}

export const nullCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return a === null ? b : (c ?? a)
}

export const emptyCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return (a === null || a === undefined) ? b : (c ?? a)
}

export const noneUndefinedCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return a !== undefined ? b : (c ?? a)
}

export const noneNullCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return a !== null ? b : (c ?? a)
}

export const noneEmptyCoalesce = <T, K, M>(a: T, b: K, c?: M) => {
  return (a !== null && a !== undefined) ? b : (c ?? a)
}