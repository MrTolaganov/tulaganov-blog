'use client'

import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { format } from 'date-fns'

interface Props extends IBlog {
  isVertical?: boolean
}

function BlogCard(blog: Props) {
  const { title, slug, description, image, content, author, tag, category, createdAt, isVertical } =
    blog

  return (
    <div
      className={cn('grid gap-4 group', isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2')}
    >
      <Link href={`/blogs/${slug}`} className='relative bg-secondary rounded-md'>
        <Image
          width={650}
          height={335}
          src={image.url}
          alt={title}
          className='px-2 md:px-7 rounded-md group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
        />
      </Link>
      <div className='flex flex-col space-y-4'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <CalendarDays className='w-5 h-5' />
            <p>{format(createdAt, 'MMM dd, yyyy')}</p>
          </div>
          <Minus />
          <div className='flex items-center gap-2'>
            <Clock className='w-5 h-5' />
            <p>{getReadingTime(content.html)} mins read</p>
          </div>
        </div>
        <Link
          href={`/blogs/${slug}`}
          className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors hover:underline'
        >
          {title}
        </Link>
        <p className='text-muted-foreground line-clamp-3'>{description}</p>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <Image
              src={author.image.url}
              alt='author'
              width={30}
              height={30}
              className='object-cover rounded-sm'
            />
            <p>by {author.name}</p>
          </div>
          <Dot />
          <div className='flex items-center gap-x-4'>
            <Link href={`/categories/${category.slug}`}>
              <Badge variant={'secondary'} >
                <Layers2 className='size-3 me-2' />
                {category.label}
              </Badge>
            </Link>
            <Link href={`/tags/${tag.slug}`}>
              <Badge variant={'secondary'}>
                <Tag className='size-3 me-2' />
                {tag.label}
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
