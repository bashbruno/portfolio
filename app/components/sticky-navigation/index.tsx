import { Briefcase, CircleUserRound, Mail } from 'lucide-react'
import {
  AnimatePresence,
  type HTMLMotionProps,
  LayoutGroup,
  motion,
} from 'motion/react'
import { type ComponentProps, type ReactNode, useState } from 'react'
import styles from './sticky-navigation.module.css'

export function StickyNavigation() {
  return (
    <motion.nav
      className={styles.container}
      transition={{
        type: 'spring',
        duration: 0.6,
        bounce: 0.6,
      }}
      whileHover={{
        scale: 1.2,
      }}
    >
      <LayoutGroup>
        <NavigationItem href="#" aria-label="About me" label="About">
          <CircleUserRound aria-hidden="true" />
        </NavigationItem>
        <NavigationItem href="#" aria-label="Work experience" label="Work">
          <Briefcase aria-hidden="true" />
        </NavigationItem>
        <NavigationItem href="#" aria-label="Contact via email" label="Contact">
          <Mail aria-hidden="true" />
        </NavigationItem>
      </LayoutGroup>
    </motion.nav>
  )
}

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

type NavigationItemProps = HTMLMotionProps<'a'> & {
  label: string
  children: ReactNode
}

function NavigationItem({ label, children, ...props }: NavigationItemProps) {
  const [hover, setHover] = useState(false)

  return (
    <motion.a
      {...props}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            layoutId="hover-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.hover}
            transition={{
              type: 'spring',
              bounce: 0.4,
              duration: 0.7,
            }}
          />
        )}
      </AnimatePresence>
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
