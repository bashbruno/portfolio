import { Slot } from '@radix-ui/react-slot'
import { type PropsWithChildren, useReducer } from 'react'
import { useIsMobile } from '~/hooks/use-media'

/**
 * @description Wrapper component to ensure consistent visual feedback for touch events
 **/
export function Pressable({ children }: PropsWithChildren) {
  const [pressed, togglePressed] = useReducer((v) => !v, false)
  const isMobile = useIsMobile()

  return (
    <Slot
      onPointerDown={() => !isMobile && togglePressed()}
      onPointerUp={() => !isMobile && togglePressed()}
      onPointerLeave={() => !isMobile && pressed && togglePressed()}
      onTouchStart={togglePressed}
      onTouchEnd={togglePressed}
      style={{
        opacity: pressed ? 0.6 : 1,
      }}
    >
      {children}
    </Slot>
  )
}
