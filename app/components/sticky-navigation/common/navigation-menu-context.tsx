import {
  createContext,
  type PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react'
import { assert } from '~/utils/assert'

type TNavigationMenuContext = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  toggleOpen: () => void
}

const NavigationContext = createContext<TNavigationMenuContext | null>(null)

export function NavigationMenuProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen, toggleOpen }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigationMenu() {
  const ctx = useContext(NavigationContext)
  assert(ctx, 'useNavigationMenu must be used within a NavigationMenuProvider')
  return ctx
}
