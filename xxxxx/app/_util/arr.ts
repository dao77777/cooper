/* eslint-disable */
export const arrIntersect = <T, K>(
  a1: T[] | undefined,
  a2: K[] | undefined,
  cmp?: (a1Item: T) => (a2Item: K) => boolean,
) => {
  cmp = cmp ?? ((i: T) => (j: K) => (i as any) === j)

  return a1?.filter((i) => a2?.find((j) => cmp(i)(j)) !== undefined)
}

export const arrTreeIntersect = <T, K extends { children: K[] }>(
  arr?: T[],
  tree?: K[],
  cmp?: (a: T) => (b: K) => boolean
) => {
  cmp = cmp ?? ((i: T) => (j: K) => (i as any) === (j as any).id)

  return arr?.filter((i) => {
    const dfs = (tree: K[]): boolean => {
      if (tree.length === 0) return false
      return tree.find((j) => cmp(i)(j)) !== undefined
        ? true
        : tree.map((item) => dfs(item.children)).some((j) => j)
    }
    return tree && dfs(tree)
  })
}

export const arrSubtract = <T, K>(
  a1: T[] | undefined,
  a2: K[] | undefined,
  cmp?: (a1Item: T) => (a2Item: K) => boolean,
) => {
  cmp = cmp ?? ((i: T) => (j: K) => (i as any) === j)
  return a1?.filter((i) => a2?.find((j) => cmp(i)(j)) === undefined)
}

export const arrContain = <T, K>(
  a1: T[] | undefined,
  a2: K[] | undefined,
  cmp?: (a1Item: T) => (a2Item: K) => boolean,
) => {
  cmp = cmp ?? ((i: T) => (j: K) => (i as any) === j)

  return a2.every((i) => a1.find((j) => cmp(j)(i)) !== undefined)
}

export const arrEqual = <T, K>(
  a1: T[] | undefined,
  a2: K[] | undefined,
  cmp?: (a1Item: T) => (a2Item: K) => boolean,
) => {
  cmp = cmp ?? ((i: T) => (j: K) => (i as any) === j)

  if (a1?.length !== a2?.length) {
    return false
  }

  return arrContain(a1, a2, cmp) && arrContain(a2, a1, (i: K) => (j: T) => cmp(j)(i))
}
