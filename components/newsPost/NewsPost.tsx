import Link from "next/link";

import { Image } from "react-datocms";

import { Post as NewsPost } from "@/lib/types";

type Post = {
  post: NewsPost;
};

const NewsPost = ({ post }: Post) => {
  return (
    <div
      key={post.title}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0">
        <Image
          data={post.featuredImage.responsiveImage}
          priority
          className="w-full rounded-t object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white bg-opacity-10 p-6">
        <div className="flex-1">
          <Link
            href={`/news/${post.slug}`}
            className="mt-2 block hover:text-cn-orange"
          >
            <a className="no-underline">
              <p className="text-2xl leading-tight">{post.title}</p>
              <p className="mt-3 text-base">{post.summary}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6">
          <a className="hover:text-cn-orange" href={`/news/${post.slug}`}>
            View article
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsPost;
