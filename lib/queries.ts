import { responsiveImageFragment } from "@/lib/fragments";

export const NEWSPAGE_QUERY = `{
  allPosts {
    id
    title
    _status
    slug
    summary
    featuredImage {
      responsiveImage {
        ...responsiveImageFragment
      }
    }
  }
} 
${responsiveImageFragment}
`;

export const SINGLE_POST_QUERY = `
  query SinglePostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      summary
      featuredImage {
        url
        responsiveImage {
          ...responsiveImageFragment
        }
      }
      body {
        value
        blocks {
          id
          __typename
          ... on InlineImageRecord {
            id
            image { 
              url 
              title 
              responsiveImage {
               ...responsiveImageFragment
              }
            }
          }
        }
      }
    }
  }
  ${responsiveImageFragment}
`;
