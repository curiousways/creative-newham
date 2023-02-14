import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { StructuredText } from "react-datocms";
import { Image } from "react-datocms";
import { NextSeo } from "next-seo";

import { request } from "@/lib/datocms";
import { SINGLE_POST_QUERY } from "@/lib/queries";
import { FullPost } from "@/lib/types";

import Panel from "@/components/panel/Panel";

type ReturnData = {
  post: FullPost;
};

const SinglePost: NextPage<ReturnData> = ({ post }) => {
  return (
    <>
      <NextSeo
        title={`${post.title} - Creative Newham`}
        description={post.summary}
        openGraph={{
          description: post.summary,
          images: [
            {
              url: post.featuredImage.url as string,
              width: 1200,
              height: 630,
              alt: post.featuredImage.responsiveImage.alt as string,
            },
          ],
        }}
      />
      <main className="container">
        <Panel title={post.title}>
          <div className="space-y-2">
            <Image
              className="w-full rounded-3xl object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
              data={post.featuredImage.responsiveImage}
            />
            {post.featuredImage.title && (
              <p className="text-xs">{post.featuredImage.title}</p>
            )}
          </div>
        </Panel>

        <div className="xl:ml-[224px] mt-10">
          <div className="cn-text">
            <StructuredText
              data={post.body}
              renderBlock={({ record }) => {
                switch (record.__typename) {
                  case "InlineImageRecord":
                    return (
                      <div className="my-8 space-y-2">
                        <Image
                          // @ts-ignore
                          data={record?.image.responsiveImage}
                          className="w-full rounded-3xl object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
                        />
                        {
                          // @ts-ignore
                          record?.image.title && (
                            <p className="text-xs">
                              {
                                // @ts-ignore
                                record?.image.title
                              }
                            </p>
                          )
                        }
                      </div>
                    );
                  default:
                    return null;
                }
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<ReturnData> = async ({
  params,
  preview = false,
}) => {
  // get single news posts by slug
  const data = await request({
    query: SINGLE_POST_QUERY,
    variables: { slug: params?.slug },
  });

  return {
    props: {
      post: data.post,
    },
    revalidate: 3600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // get all news posts by slug
  const data = await request({
    query: `{ allPosts { slug } }`,
    variables: { limit: 50 },
  });

  return {
    paths: data.allPosts.map((post: { slug: string }) => `/news/${post.slug}`),
    fallback: "blocking",
  };
};

export default SinglePost;
