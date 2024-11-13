import { IArchivedBlog, IBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export async function getBlogs() {
  const query = gql`
    query MyQuery {
      blogs(where: { archived: false }) {
        title
        slug
        description
        image {
          url
        }
        content {
          html
        }
        author {
          name
          bio
          image {
            url
          }
        }
        category {
          label
          slug
        }
        tag {
          label
          slug
        }
        createdAt
      }
    }
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
  return blogs
}

export async function getDetailedBlog(slug: string) {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        title
        slug
        description
        image {
          url
        }
        content {
          html
        }
        author {
          id
          name
          image {
            url
          }
          bio
        }
        createdAt
        tag {
          label
          slug
        }
        category {
          label
          slug
        }
      }
    }
  `
  const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, { slug })
  return blog
}

export async function getSearchBlogs(title: string) {
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: { title_contains: $title }) {
        title
        slug
        description
        createdAt
        image {
          url
        }
        author {
          bio
          name
          image {
            url
          }
        }
        category {
          label
          slug
        }
        tag {
          label
          slug
        }
      }
    }
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, { title })
  return blogs
}

export async function getArchivedBlogs() {
  const query = gql`
    query MyQuery {
      blogs(where: { archived: true }) {
        title
        slug
        createdAt
      }
    }
  `
  const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query)
  const filteredBlogs = blogs.reduce((acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
    const year = blog.createdAt.toString().substring(0, 4)
    if (!acc[year]) {
      acc[year] = { year, blogs: [] }
    }
    acc[year].blogs.push(blog)
    return acc
  }, {})
  const results: IArchivedBlog[] = Object.values(filteredBlogs)
  return results
}
