import type { NextPage } from "next";

import Link from "next/link";

import { motion } from "framer-motion";

import { container, item } from "@/lib/animations";

import Instagram from "@/components/Instagram";
import Button from "@/components/Button";
import Panel from "@/components/Panel";

import { supporters } from "../data/data";

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
          className="flex flex-col xl:flex-row xl:space-x-5"
        >
          <div className="flex space-x-5 mb-5 xl:mb-0">
            <div className="flex-1 xl:flex-none">
              <Button text="What we do" link="/about/" />
            </div>
            <div className="flex-1 xl:flex-none">
              <Button text="Members &amp; Supporters" link="http://eepurl.com/h5Tk2b" />
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex-1 xl:flex-none">
              <Button text="Become a member" link="/membership/" />
            </div>
            <div className="flex-1 xl:flex-none">
              <Button text="Member news" link="http://eepurl.com/h5Tk2b" />
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default Home;
