import Image from 'next/image'

export default function Home() {
  return (
    <>
      Home Page
      <div className='absolute -z-10 inset-0'>
        <Image
          src='/home.jpg'
          alt='car factory'
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}
