import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import { item } from "@/lib/animations";
import { request } from "@/lib/datocms";
import { NEWSPAGE_QUERY } from "@/lib/queries";
import { Post } from "@/lib/types";

import Panel from "@/components/panel/Panel";
import NewsPost from "@/components/newsPost/NewsPost";

const posts = [
  {
    title: "Learning & workshops using fashion and textiles",
    href: "/news-item/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    imageUrl:
      "https://pbs.twimg.com/media/FkhEryXWQAgewTx?format=jpg&name=large",
  },
  {
    title: "Christmas Postcard Exhibition launch!",
    href: "/news-item/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    imageUrl:
      "https://pbs.twimg.com/media/FjY9NHjWIAAJEQg?format=jpg&name=medium",
  },
  {
    title: "Open City guides",
    href: "/news-item/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    imageUrl:
      "https://pbs.twimg.com/media/FggHCszWAAIHHvF?format=jpg&name=large",
  },
];

type ReturnData = {
  posts: Post[];
};

const News: NextPage<ReturnData> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="News - News & events for Creative Newham members"
        description="News & events for Creative Newham members"
        openGraph={{
          description: "News & events for Creative Newham members",
        }}
      />
      <main className="container--wide">
        <motion.div initial="hidden" animate="visible" variants={item}>
          <Panel title="News">
            <div className="cn-text">
              <p>
                News &amp; events for Creative Newham members. You can also find
                out what we've been up to on{" "}
                <Link href="https://twitter.com/creativenewham/">Twitter</Link>{" "}
                and <Link href="https://linkedin.com/">Linkedin</Link>.
              </p>
            </div>
          </Panel>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="xl:ml-[224px] mt-10"
        >
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <NewsPost post={post} key={post.id} />
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<ReturnData> = async () => {
  const data = await request({
    query: NEWSPAGE_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: { posts: data.allPosts },
    revalidate: 3600,
  };
};

export default News;
