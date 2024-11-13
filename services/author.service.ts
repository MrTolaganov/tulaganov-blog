import { IAuthor } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export async function getAuthors() {
  const query = gql`
    query MyQuery {
      authors {
        name
        bio
        image {
          url
        }
        blogs {
          id
        }
        id
      }
    }
  `
  const { authors } = await request<{ authors: IAuthor[] }>(graphqlAPI, query)
  return authors
}

export async function getAuthorById(id: string) {
  const query = gql`
    query MyQuery($id: ID) {
      author(where: { id: $id }) {
        id
        name
        image {
          url
        }
        bio
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
    }
  `
  const { author } = await request<{ author: IAuthor }>(graphqlAPI, query, { id })
  return author
}
