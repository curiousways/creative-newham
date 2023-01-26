export interface Post {
  id: string;
  title: string;
  status: string;
  slug: string;
  summary: string;
  featuredImage: FeaturedImage;
}

export interface FullPost extends Post {
  body: {
    blocks: any;
    value: any;
  };
}

export interface FeaturedImage {
  url?: string;
  responsiveImage: ResponsiveImage;
}

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: null;
  title: string;
  base64: string;
}
