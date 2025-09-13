import { deepCmp } from './deep-cmp'

export const filterUnChanged = (object: object) => (cmpObject: object) => {
  return Object.fromEntries(Object.entries(object).filter(([k, v]) => !deepCmp(cmpObject[k], v)))
}
