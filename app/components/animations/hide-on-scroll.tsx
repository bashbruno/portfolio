import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'motion/react'
import { useRef } from 'react'

type Props = {
  onHide?: () => void
} & HTMLMotionProps<'div'>

export function HideOnScroll({ onHide, children, ...props }: Props) {
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const targetY = useMotionValue(0)
  const targetScale = useMotionValue(1)

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = lastScrollY.current

    // always show at top of page
    if (current < 10) {
      targetY.set(0)
      targetScale.set(1)
    }
    // hide when scrolling down
    else if (current > previous) {
      targetY.set(-100)
      targetScale.set(0.8)
      onHide?.()
    }
    // show when scrolling up
    else if (current < previous) {
      targetY.set(0)
      targetScale.set(1)
    }

    lastScrollY.current = current
  })

  const y = useSpring(targetY, {
    stiffness: 300,
    damping: 30,
  })

  const scale = useSpring(targetScale, {
    stiffness: 300,
    damping: 30,
  })

  return (
    <motion.div style={{ y, scale }} {...props}>
      {children}
    </motion.div>
  )
}
