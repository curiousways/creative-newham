import type { NextPage, GetStaticProps } from "next";

import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import { item } from "@/lib/animations";
import { request } from "@/lib/datocms";
import { NEWSPAGE_QUERY } from "@/lib/queries";
import { Post } from "@/lib/types";

import Panel from "@/components/panel/Panel";
import NewsPost from "@/components/newsPost/NewsPost";

type ReturnData = {
  posts: Post[];
};

const News: NextPage<ReturnData> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="News - Creative Newham"
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
                <a href="https://twitter.com/creativenewham/">Twitter</a>{" "}
                and <a href="https://www.linkedin.com/in/creative-newham-751331264">Linkedin</a>.
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
