import { IBlog, ITagAndCategory } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export async function getCategories() {
  const query = gql`
    query MyQuery {
      categories {
        label
        slug
        blogs {
          id
        }
      }
    }
  `
  const { categories } = await request<{ categories: ITagAndCategory[] }>(graphqlAPI, query)
  return categories
}

export async function getBlogsByCategory(slug: string) {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        label
        blogs {
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
    }
  `
  const { category } = await request<{ category: { label: string; blogs: IBlog[] } }>(
    graphqlAPI,
    query,
    { slug }
  )
  return category
}
