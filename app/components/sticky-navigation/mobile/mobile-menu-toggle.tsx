import { Menu, X } from 'lucide-react'
import { Pressable } from '~/components/pressable'
import { useNavigationMenu } from '../common/navigation-menu-context'
import styles from '../navigation.module.css'

export function MobileMenuToggle() {
  const { isOpen, toggleOpen } = useNavigationMenu()

  return (
    <Pressable>
      <button
        type="button"
        className={styles.mobileMenuControl}
        onClick={toggleOpen}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </Pressable>
  )
}
