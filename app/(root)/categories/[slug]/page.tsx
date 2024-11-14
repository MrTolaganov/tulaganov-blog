import BlogCard from '@/components/cards/blog.card'
import { getBlogsByCategory } from '@/services/category.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const {
    slug
  } = params;

  const { label } = await getBlogsByCategory(slug)
  return { title: label }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;

  const {
    slug
  } = params;

  const { label, blogs } = await getBlogsByCategory(slug)

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='relative min-h-[30vh] flex items-center justify-end flex-col'>
        <h2 className='text-center text-4xl section-title font-creteRound mt-2'>
          <span>{label}</span>
        </h2>
        <div className='flex gap-1 items-center mt-4'>
          <Home className='w-4 h-4' />
          <Link href={'/'} className='opacity-90 hover:underline hover:opacity-100'>
            Home
          </Link>
          <Dot />
          <p className='text-muted-foreground'>Categories</p>
        </div>
      </div>
      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
        {blogs.map(blog => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  )
}
