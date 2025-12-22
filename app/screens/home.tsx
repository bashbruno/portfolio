import { ScaleOnScroll } from '~/components/animations/scale-on-scroll'
import { Hero } from '~/components/hero'

export function HomePage() {
  return (
    <>
      <ScaleOnScroll>
        <Hero />
      </ScaleOnScroll>
      <div style={{ minHeight: '100vh', background: 'red' }}>toma</div>
    </>
  )
}
