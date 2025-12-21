import {
  type HTMLMotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import { useRef } from 'react'

export function ScaleOnScroll(props: HTMLMotionProps<'div'>) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const scale = useSpring(scaleRaw, {
    bounce: 0.4,
  })

  return (
    <motion.div
      ref={containerRef}
      {...props}
      style={{ scale: scale, ...props.style }}
    />
  )
}
