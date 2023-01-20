import type { NextPage } from "next";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Button from "@/components/Button";

const Home: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">

      <div className="space-y-20">

        <motion.p
          initial="hidden"
          animate="visible"
          variants={item}
          className="text-xl md:text-2xl"
        >
          Creative Newham is an independent alliance of around 70 arts, cultural, educational, social and voluntary organisations committed to growing and strengthening cultural mobility in all its forms in Newham. Our aim is to provide a strong and connected creative vision for the borough whereby everyone can benefit from creative opportunities - as makers, producers, leaders, audiences and participants - whatever their background or circumstances.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={item}
          className="sm:flex flex-col xl:flex-row xl:space-x-5"
        >
          <div className="sm:flex sm:space-x-5 mb-5 xl:mb-0">
            <div className="flex-1 xl:flex-none mb-5 sm:mb-0">
              <Button text="What we do" link="/about/" />
            </div>
            <div className="flex-1 xl:flex-none">
              <Button text="Supporters" link="/supporters/" />
            </div>
          </div>
          <div className="sm:flex sm:space-x-5">
            <div className="flex-1 xl:flex-none mb-5 sm:mb-0">
              <Button text="Become a member" link="/membership/" />
            </div>
            <div className="flex-1 xl:flex-none">
              <Button text="News" link="/news/" />
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default Home;
