import type { PropsWithChildren } from 'react'
import type { AppNavigation } from '~/utils/constants'
import { DesktopNavigationItem } from '../desktop/desktop-navigation-item'
import { MobileNavigationItem } from '../mobile/mobile-navigation-item'

type Props = Omit<AppNavigation, 'Icon'> & PropsWithChildren

export function NavigationItem(props: Props) {
  return (
    <>
      <DesktopNavigationItem {...props}>{props.children}</DesktopNavigationItem>
      <MobileNavigationItem {...props}>{props.children}</MobileNavigationItem>
    </>
  )
}
