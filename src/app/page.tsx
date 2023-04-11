import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/paragraph'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plagarism API | Home',
  description: 'Free & open-source Plagarism checking API',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Easily check <br /> for plagarism.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            With our Plagarism API, you can easily determine if there
            is any plagarism between two pieces of information with a free{' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              src='/codex.png'
              alt='codex image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}