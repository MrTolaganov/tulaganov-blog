import { IBlog, ITagAndCategory } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export async function getTags() {
  const query = gql`
    query MyQuery {
      tags {
        label
        slug
        blogs {
          id
        }
      }
    }
  `
  const { tags } = await request<{ tags: ITagAndCategory[] }>(graphqlAPI, query)
  return tags
}

export async function getBlogsByTag(slug: string) {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
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
  const { tag } = await request<{ tag: { label: string; blogs: IBlog[] } }>(graphqlAPI, query, {
    slug,
  })
  return tag
}
