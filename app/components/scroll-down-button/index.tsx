import { ChevronDown } from 'lucide-react'
import { motion, useAnimate, useInView } from 'motion/react'
import { useEffect } from 'react'
import styles from './scroll-down-button.module.css'

export function ScrollDownButton() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { y: 25 },
        {
          repeat: Infinity,
          repeatType: 'reverse',
          type: 'spring',
          duration: 1.7,
          bounce: 0.7,
        },
      )
    }
  }, [isInView, scope.current, animate])

  return (
    <motion.button
      ref={scope}
      type="button"
      className={styles.btn}
      aria-label="Scroll to content"
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      }
    >
      <ChevronDown aria-hidden="true" strokeWidth={4} />
    </motion.button>
  )
}
