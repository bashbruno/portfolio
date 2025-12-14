import { HomePage } from '~/screens/home'

export function meta() {
  return [
    { title: 'Bruno Santos - Software Engineer' },
    { name: 'description', content: 'Welcome to my portfolio!' },
  ]
}

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
