/* eslint-disable */
export const deepCmp = (object?: any, targetObject?: any) => {
  let arr: Array<any> | undefined
  let targetArr: Array<any> | undefined
  if (Array.isArray(object) && Array.isArray(targetObject)) {
    arr = object
    targetArr = targetObject as Array<any>
  } else if (typeof object === 'object' && object !== null && typeof targetObject === 'object' && targetObject !== null) {
    arr = Object.entries(object)
    targetArr = Object.entries(targetObject)
  }

  if (arr) {
    if (arr.length !== targetArr.length) return true
    return arr.every(i => {
      const idx = targetArr.findIndex(j => deepCmp(i, j))
      if (idx === -1) return false
      targetArr.splice(idx, 1)
      return true
    })
  } else {
    return object === targetObject
  }
}