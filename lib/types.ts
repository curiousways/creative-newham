import { ResponsiveImageType } from "react-datocms/image";

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
  title?: string;
  responsiveImage: ResponsiveImageType;
}
