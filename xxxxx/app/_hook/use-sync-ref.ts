import { useRef } from 'react'

export const useSyncRef = <T>(value: T) => {
  const ref = useRef<T>(value)
  value !== ref.current && (ref.current = value)
  return ref
}
