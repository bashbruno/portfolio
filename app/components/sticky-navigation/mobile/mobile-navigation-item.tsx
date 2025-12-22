import { type HTMLMotionProps, motion } from 'motion/react'
import { Pressable } from '~/components/pressable'
import { useNavigationMenu } from '../common/navigation-menu-context'
import styles from '../navigation.module.css'

type Props = {
  label: string
} & HTMLMotionProps<'a'>

export function MobileNavigationItem({ label, ...props }: Props) {
  const { isOpen } = useNavigationMenu()

  return (
    <Pressable>
      <motion.a
        {...props}
        className={`${styles.navigationItem} ${styles.mobile}`}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -50,
        }}
        transition={{
          duration: 0.1,
        }}
      >
        <span className={styles.label}>{label}</span>
      </motion.a>
    </Pressable>
  )
}
