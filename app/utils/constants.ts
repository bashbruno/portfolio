import { Briefcase, CircleUserRound, type LucideIcon, Mail } from 'lucide-react'

export type AppNavigation = {
  href: string
  label: string
  Icon: LucideIcon
}

export const APP_NAVIGATION: Array<AppNavigation> = [
  {
    href: '#',
    label: 'Me',
    Icon: CircleUserRound,
  },
  {
    href: '#',
    label: 'Work',
    Icon: Briefcase,
  },
  {
    href: '#',
    label: 'Contact',
    Icon: Mail,
  },
]
