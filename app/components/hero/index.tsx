import { Briefcase, ChevronDown, CircleUserRound, Mail } from 'lucide-react'
import { content } from '~/config/content'
import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.container} aria-describedby="hero-heading">
      <div className={styles.card}>
        <header className={styles.header}>
          <nav>
            <button type="button" aria-label="About me">
              <CircleUserRound aria-hidden="true" />
            </button>
            <button type="button" aria-label="Work experience">
              <Briefcase aria-hidden="true" />
            </button>
            <button type="button" aria-label="Contact via email">
              <Mail aria-hidden="true" />
            </button>
          </nav>
        </header>
        <div className={styles.content}>
          <h1 id="hero-heading">{content.hero.title}</h1>
          <p>{content.hero.description}</p>
        </div>
        <footer className={styles.footer} aria-hidden="true">
          <button
            type="button"
            aria-label="Scroll to content"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
          >
            <ChevronDown aria-hidden="true" />
          </button>
        </footer>
      </div>
    </section>
  )
}
