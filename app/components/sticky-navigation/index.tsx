import { motion } from 'motion/react'
import { APP_NAVIGATION } from '~/utils/constants'
import { NavigationItem } from './common/navigation-item'
import {
  NavigationMenuProvider,
  useNavigationMenu,
} from './common/navigation-menu-context'
import { MobileMenuToggle } from './mobile/mobile-menu-toggle'
import styles from './navigation.module.css'

export function StickyNavigation() {
  return (
    <NavigationMenuProvider>
      <NavigationContent />
    </NavigationMenuProvider>
  )
}

function NavigationContent() {
  const { isOpen } = useNavigationMenu()

  return (
    <header className={styles.header}>
      <motion.nav
        className={styles.container}
        initial={{ height: 50 }}
        animate={{ height: isOpen ? 'auto' : 50 }}
        transition={{
          type: 'spring',
          duration: 0.7,
          bounce: 0.3,
        }}
        whileHover={{
          scale: 1.15,
        }}
      >
        <div className={styles.wrapper}>
          <MobileMenuToggle />
          {APP_NAVIGATION.map((i) => (
            <NavigationItem key={i.label} aria-label={i.label} {...i}>
              <i.Icon aria-hidden="true" />
            </NavigationItem>
          ))}
        </div>
      </motion.nav>
    </header>
  )
}
