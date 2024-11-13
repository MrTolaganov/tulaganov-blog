import { ITagAndCategory } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'

interface Props extends ITagAndCategory {
  type: 'categories' | 'tags'
}

export default function CategoryTagCard(item: Props) {
  return (
    <Link
      className='bg-secondary p-4 rounded-md shadow-xl flex flex-col items-center justify-center hover:bg-secondary/80 transition-colors dark:shadow-white/10 space-y-2'
      href={`/${item.type}/${item.slug}`}
    >
      {item.type === 'tags' ? <Tags /> : <Layers2 />}
      <h1 className='text-xl font-creteRound'>{item.label}</h1>
      <p>{item.blogs.length} blogs</p>
    </Link>
  )
}
