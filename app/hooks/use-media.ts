import { useCallback, useEffect, useState } from 'react'

export function useMedia(
  query: string,
  defaultState: boolean = false,
): boolean {
  const [matches, setMatches] = useState<boolean>(defaultState)

  const handleChange = useCallback((event: MediaQueryListEvent) => {
    setMatches(event.matches)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query, handleChange])

  return matches
}

export function useIsMobile() {
  return useMedia('(max-width: 768px)')
}
