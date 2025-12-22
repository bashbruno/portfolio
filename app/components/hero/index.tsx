import { AnimatedText } from '~/components/animated-text'
import { ScrollDownButton } from '~/components/scroll-down-button'
import { content } from '~/config/content'
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.container} aria-describedby="hero-heading">
      <div className={styles.card}>
        <div className={styles.content}>
          <AnimatedText id="hero-heading" as="h1">
            {content.hero.title}
          </AnimatedText>
          <p>{content.hero.description}</p>
        </div>
        <footer className={styles.footer} aria-hidden="true">
          <ScrollDownButton />
        </footer>
      </div>
    </section>
  )
}
