import { responsiveImageFragment } from "@/lib/fragments";

export const NEWSPAGE_QUERY = `{
  allPosts {
    id
    title
    _status
    slug
    summary
    featuredImage {
      responsiveImage(imgixParams: {fit: crop, w: 1024, h: 682}, sizes: "(max-width: 1023px) 88vw, (max-width: 1279px) 45vw, 30vw") {
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
        responsiveImage (imgixParams: {fit: crop, w: 1024, h: 682}) {
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
              responsiveImage (imgixParams: {fit: crop, w: 1024, h: 682}) {
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
