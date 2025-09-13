import { useEffect, useMemo, useState } from 'react'

export const useControlledState = <T>(
  [outterState, outterSetState]: [T | undefined, ((value: T) => void) | undefined],
  initialState?: T,
  halfSyncState?: T,
) => {
  const [innerState, setInnerState] = useState(halfSyncState || initialState)
  const isControlled = useMemo(
    () => outterState !== undefined || outterSetState !== undefined,
    [outterState, outterSetState],
  )
  const isHalfSync = useMemo(() => halfSyncState !== undefined, [halfSyncState])

  useEffect(() => {
    if (halfSyncState !== undefined) {
      setInnerState(halfSyncState)
    }
  }, [halfSyncState])

  const rState = useMemo(
    () => (isControlled ? outterState : innerState),
    [isControlled, outterState, innerState],
  )
  const setRState = useMemo(
    () => (isControlled ? outterSetState ?? (() => {}) : setInnerState),
    [isControlled, outterSetState, setInnerState],
  )

  return [rState, setRState, isControlled, isHalfSync] as const
}
