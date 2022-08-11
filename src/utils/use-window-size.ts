import { useCallback, useState } from 'react'

import { useIsomorphicEffect } from './use-isomorphic-effect'

type WindowSize = {
  width: number
  height: number
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  const handleSize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useIsomorphicEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [handleSize])

  useIsomorphicEffect(() => handleSize(), [])

  return windowSize
}
