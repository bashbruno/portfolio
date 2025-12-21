import { Briefcase, CircleUserRound, Mail } from 'lucide-react'
import { type HTMLMotionProps, LayoutGroup, motion } from 'motion/react'
import { type ReactNode, useState } from 'react'
import styles from './sticky-navigation.module.css'

export function StickyNavigation() {
  return (
    <motion.nav
      className={styles.container}
      transition={{
        type: 'spring',
        duration: 0.7,
        bounce: 0.3,
      }}
      whileHover={{
        scale: 1.15,
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
