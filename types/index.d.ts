import { ReactNode } from 'react'

export interface ChildProps {
  children: ReactNode
}

export interface IAuthor {
  id: string
  name: string
  bio: string
  image: { url: string }
  blogs: IBlog[]
}

export interface ITagAndCategory {
  label: string
  slug: string
  blogs: IBlog[]
}

export interface IBlog {
  title: string
  slug: string
  description: string
  createdAt: Date
  content: { html: string }
  image: { url: string }
  author: IAuthor
  tag: ITagAndCategory
  category: ITagAndCategory
}

export interface IArchivedBlog {
  year: string
  blogs: IBlog[]
}
