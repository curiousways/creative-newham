import type { NextPage } from "next";
import Link from "next/link";

import { motion } from "framer-motion";

import { item } from "@/lib/animations";
import Panel from "@/components/panel/Panel";

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

const News: NextPage = () => {
  let viewportConfig = { once: true };

  return (
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
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white bg-opacity-10 p-6">
                <div className="flex-1">
                  <a
                    href={post.href}
                    className="mt-2 block no-underline hover:text-cn-orange"
                  >
                    <p className="text-2xl leading-tight">{post.title}</p>
                    <p className="mt-3 text-base">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6">
                  <a className="hover:text-cn-orange" href={post.href}>
                    View article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default News;
