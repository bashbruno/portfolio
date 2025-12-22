import { Hero } from '~/components/hero'
import { ScaleOnScroll } from '~/components/scale-on-scroll'

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
