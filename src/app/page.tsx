import Hero from '@/components/hero'
import imgData from 'public/home.jpg'

export default function Home() {
  return (

    <Hero
      imgData={imgData}
      imgAlt='car factory'
      title='Professional Cloud Hosting'
    />

  )
}
