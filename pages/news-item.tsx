import type { NextPage } from "next";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Panel from "@/components/Panel/Panel";

const NewsItem: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">
      <motion.div initial="hidden" animate="visible" variants={item}>
        <Panel title="News Item Title">
          <h3 className="text-2xl">
            Vivamus tincidunt porta elementum. Mauris iaculis consequat
            bibendum. Nam vel congue neque. Morbi id metus sapien. Nulla
            scelerisque ante dolor, quis efficitur mauris dignissim quis.
          </h3>
          <img
            className="h-96 w-full rounded-3xl object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
            src="https://pbs.twimg.com/media/FkhEryXWQAgewTx?format=jpg&name=large"
            alt=""
          />
        </Panel>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={item}
        className="xl:ml-[224px] mt-10"
      >
        <div className="cn-text">
          <h2>Subtitle</h2>
          <p>
            Aenean est tellus, commodo et magna at, feugiat consectetur lectus.
            Proin est mi, semper a eros a, ultrices convallis purus. Maecenas
            vel ligula pulvinar purus ultrices pretium faucibus sit amet lorem.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. In tincidunt consequat nunc, non congue
            tortor. Quisque non eros quis nibh molestie aliquet ultricies id
            nibh. Donec vulputate tristique nulla ac dignissim. Vivamus
            tristique vitae ante quis tincidunt. Vestibulum maximus leo sit amet
            magna consectetur, sed posuere ante sodales. Nullam leo metus,
            sagittis id semper in, congue quis sem. Phasellus feugiat elit
            ipsum, sed congue odio auctor eget. Sed aliquet eros ut diam
            fringilla placerat. Sed augue metus, placerat quis enim quis, cursus
            hendrerit magna.
          </p>
          <p>
            Aenean est tellus,{" "}
            <a href="#">commodo et magna at, feugiat consectetur lectus.</a>{" "}
            Proin est mi, semper a eros a, ultrices convallis purus. Maecenas
            vel ligula pulvinar purus ultrices pretium faucibus sit amet lorem.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. In tincidunt consequat nunc, non congue
            tortor. Quisque non eros quis nibh molestie aliquet ultricies id
            nibh. Donec vulputate tristique nulla ac dignissim. Vivamus
            tristique vitae ante quis tincidunt. Vestibulum maximus leo sit amet
            magna consectetur, sed posuere ante sodales. Nullam leo metus,
            sagittis id semper in, congue quis sem. Phasellus feugiat elit
            ipsum, sed congue odio auctor eget. Sed aliquet eros ut diam
            fringilla placerat. Sed augue metus, placerat quis enim quis, cursus
            hendrerit magna.
          </p>
          <h2>Subtitle</h2>
          <ul>
            <li>Proin est mi, semper a eros a, ultrices convallis purus.</li>
            <li>Aenean est tellus, commodo et magna at</li>
            <li>Proin est mi, semper a eros a, ultrices convallis purus.</li>
            <li>Aenean est tellus, commodo et magna at</li>
          </ul>
          <p>
            Aenean est tellus,{" "}
            <a href="#">commodo et magna at, feugiat consectetur lectus.</a>{" "}
            Proin est mi, semper a eros a, ultrices convallis purus. Maecenas
            vel ligula pulvinar purus ultrices pretium faucibus sit amet lorem.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. In tincidunt consequat nunc, non congue
            tortor. Quisque non eros quis nibh molestie aliquet ultricies id
            nibh. Donec vulputate tristique nulla ac dignissim. Vivamus
            tristique vitae ante quis tincidunt. Vestibulum maximus leo sit amet
            magna consectetur, sed posuere ante sodales. Nullam leo metus,
            sagittis id semper in, congue quis sem. Phasellus feugiat elit
            ipsum, sed congue odio auctor eget. Sed aliquet eros ut diam
            fringilla placerat. Sed augue metus, placerat quis enim quis, cursus
            hendrerit magna.
          </p>
          <img
            className="h-96 w-full rounded-3xl object-cover mix-blend-screen opacity-70 grayscale bg-cn-orange"
            src="https://pbs.twimg.com/media/FjY9NHjWIAAJEQg?format=jpg&name=medium"
            alt=""
          />
          <p>
            Aenean est tellus,{" "}
            <a href="#">commodo et magna at, feugiat consectetur lectus.</a>{" "}
            Proin est mi, semper a eros a, ultrices convallis purus. Maecenas
            vel ligula pulvinar purus ultrices pretium faucibus sit amet lorem.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. In tincidunt consequat nunc, non congue
            tortor. Quisque non eros quis nibh molestie aliquet ultricies id
            nibh. Donec vulputate tristique nulla ac dignissim. Vivamus
            tristique vitae ante quis tincidunt. Vestibulum maximus leo sit amet
            magna consectetur, sed posuere ante sodales. Nullam leo metus,
            sagittis id semper in, congue quis sem. Phasellus feugiat elit
            ipsum, sed congue odio auctor eget. Sed aliquet eros ut diam
            fringilla placerat. Sed augue metus, placerat quis enim quis, cursus
            hendrerit magna.
          </p>
          <ol>
            <li>Proin est mi, semper a eros a, ultrices convallis purus.</li>
            <li>Aenean est tellus, commodo et magna at</li>
            <li>Proin est mi, semper a eros a, ultrices convallis purus.</li>
            <li>Aenean est tellus, commodo et magna at</li>
          </ol>
        </div>
      </motion.div>
    </main>
  );
};

export default NewsItem;
