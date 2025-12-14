import { MotionConfig, motion } from 'motion/react'
import type { ElementType, HTMLAttributes } from 'react'
import styles from './animated-text.module.css'

const SPACE_CHARACTER = '\u00A0'

type Props = {
  as?: ElementType
} & HTMLAttributes<HTMLHeadingElement>

export function AnimatedText({ as, children, ...props }: Props) {
  const Component = as || 'h1'

  if (typeof children !== 'string') return null

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        duration: 0.6,
        bounce: 0.6,
      }}
    >
      <motion.span
        whileHover={{
          scale: 1.1,
        }}
      >
        <Component {...props} className={styles.text} aria-label={children}>
          {children.split('').map((str, idx) => {
            return (
              <motion.span
                // biome-ignore lint/suspicious/noArrayIndexKey: index is stable on a string since it will not be mutated
                key={`${str}-${idx}`}
                initial={{ y: 0 }}
                whileHover={{
                  y: -10,
                  color: 'var(--accent-blue)',
                }}
              >
                {str === ' ' ? SPACE_CHARACTER : str}
              </motion.span>
            )
          })}
        </Component>
      </motion.span>
    </MotionConfig>
  )
}
