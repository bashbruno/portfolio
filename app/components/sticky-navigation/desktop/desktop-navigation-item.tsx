import { type HTMLMotionProps, motion } from 'motion/react'
import { type ReactNode, useState } from 'react'
import styles from '../navigation.module.css'

const labelVariants = {
  initial: {
    opacity: 0,
    maxWidth: 0,
    x: 5,
  },
  hover: {
    opacity: 1,
    maxWidth: 100,
    x: 0,
  },
}

type Props = HTMLMotionProps<'a'> & {
  label: string
  children: ReactNode
}

export function DesktopNavigationItem({ label, children, ...props }: Props) {
  const [hover, setHover] = useState(false)

  return (
    <motion.a
      {...props}
      className={`${styles.navigationItem} ${styles.desktop}`}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {children}
      <motion.span
        className={styles.label}
        initial="initial"
        animate={hover ? 'hover' : 'initial'}
        variants={labelVariants}
        transition={{
          type: 'spring',
          duration: 1.2,
          bounce: 0.3,
        }}
      >
        {label}
      </motion.span>
    </motion.a>
  )
}
