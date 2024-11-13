import { IAuthor } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard({id, name, image, blogs }: IAuthor) {
  return (
    <Link
      href={`/author/${id}`}
      className='flex flex-col space-y-2 w-52 text-center'
    >
      <div className='w-full h-52 relative'>
        <Image
          src={image.url}
          alt='chris'
          fill
          className='object-cover rounded-md grayscale hover:grayscale-0 transition-all'
        />
      </div>
      <h2 className='text-2xl font-creteRound'>{name}</h2>
      <p className='text-muted-foreground'>
        <span className='font-bold text-white'>
          {blogs.length < 10 ? `0${blogs.length}` : blogs.length}
        </span>{' '}
        Published posts
      </p>
    </Link>
  )
}
