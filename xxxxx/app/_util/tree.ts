import { TreeNode } from '../_types/tree-node'
import { identity } from './identity'

type Transform2Tree<T> = T & {
  children: Transform2Tree<T>[]
}

export const treeMap =
  <T extends TreeNode, K extends Record<string, any>>(tree?: T) =>
  (mapFunc?: (node: T) => K): T | Transform2Tree<K> =>
    tree &&
    ((mapFunc && {
      ...mapFunc(tree),
      children: tree.children?.map((i: T) => treeMap(i)(mapFunc) as Transform2Tree<K>),
    }) ??
      tree)

export const treeFilter =
  <T extends TreeNode>(tree?: T) =>
  (filterFunc?: (node: T) => boolean): T =>
    tree &&
    ((filterFunc &&
      filterFunc(tree) && {
        ...tree,
        children: tree.children?.map((i) => treeFilter(i)(filterFunc)).filter(identity),
      }) ??
      tree)
