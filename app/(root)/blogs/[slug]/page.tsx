import { ArrowUpRight, CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import parse from 'html-react-parser'
import Link from 'next/link'
import { getDetailedBlog } from '@/services/blog.service'
import { getReadingTime } from '@/lib/utils'
import { format } from 'date-fns'
import ShareBtns from '../../components/share-btns'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params

  const { title, description, image } = await getDetailedBlog(slug)
  return { title, description, openGraph: { title, description, images: image.url } }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params

  const { slug } = params

  const blog = await getDetailedBlog(slug)

  const { title, description, image, content, author, createdAt } = blog

  return (
    <div className='pt-[15vh] max-w-5xl mx-auto'>
      <h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>{title}</h1>
      <div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
        <div className='flex items-center gap-2'>
          <Image
            src={author.image.url}
            alt={author.name}
            width={30}
            height={30}
            className='object-cover rounded-sm'
          />
          <p>by {author.name}</p>
        </div>
        <Minus />
        <div className='flex items-center gap-2'>
          <Clock className='w-5 h-5' />
          <p>{getReadingTime(content.html)} mins read</p>
        </div>
        <Minus />
        <div className='flex items-center gap-2'>
          <CalendarDays className='w-5 h-5' />
          <p>{format(createdAt, 'MMM dd, yyyy')}</p>
        </div>
      </div>
      <p className='text-muted-foreground mt-12 text-lg'>{description}</p>
      <Image
        src={image.url}
        alt={title}
        width={`1120`}
        height={`595`}
        className='mt-4 rounded-md'
      />
      <div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
        <div className='flex flex-col space-y-3'>
          <div className='sticky top-36'>
            <p className='text-lg uppercase text-muted-foreground'>Share</p>
            <ShareBtns />
          </div>
        </div>
        <div className='flex-1 prose dark:prose-invert'>{parse(content.html)}</div>
      </div>

      <div className='flex mt-6 gap-6 items-center max-md:flex-col'>
        <Image
          src={author.image.url}
          alt={author.name}
          width='155'
          height='155'
          className='rounded-md max-md:self-start'
        />
        <div className='flex-1 flex flex-col space-y-4'>
          <h2 className='text-3xl font-creteRound'>{author.name}</h2>
          <p className='line-clamp-2 text-muted-foreground'>{author.bio}</p>
          <Link
            href={`/author/${author.id}`}
            className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
          >
            <span>See all posts by this author</span>
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  )
}
