import { AnimatedText } from '~/components/animated-text'
import { ScrollDownButton } from '~/components/scroll-down-button'
import { StickyNavigation } from '~/components/sticky-navigation'
import { content } from '~/config/content'
import { withLineBreak } from '~/utils'
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.container} aria-describedby="hero-heading">
      <div className={styles.card}>
        <header className={styles.header}>
          <StickyNavigation />
        </header>
        <div className={styles.content}>
          <AnimatedText id="hero-heading" as="h1">
            {content.hero.title}
          </AnimatedText>
          <p>{withLineBreak(content.hero.description)}</p>
        </div>
        <footer className={styles.footer} aria-hidden="true">
          <ScrollDownButton />
        </footer>
      </div>
    </section>
  )
}
