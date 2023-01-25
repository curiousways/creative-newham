import React from "react";

import { motion } from "framer-motion";

import { container, item } from "../../lib/animations";
import { classNames } from "@/utils/index";

type PanelProps = {
  title: string;
  children: React.ReactNode;
  location?: "heading" | "body";
};

const Panel = ({ title, children, location = "heading" }: PanelProps) => {
  let viewportConfig = { once: true };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={classNames(
        "space-y-6 md:space-y-[83px]",
        location === "body" ? "mt-20" : ""
      )}
    >
      {location === "heading" && (
        <motion.h1
          className="text-cn-orange text-4xl md:text-5xl"
          variants={item}
          viewport={viewportConfig}
        >
          {title}
        </motion.h1>
      )}
      {location === "body" && (
        <motion.h2
          className="text-cn-orange text-4xl md:text-5xl"
          variants={item}
          viewport={viewportConfig}
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        variants={item}
        viewport={viewportConfig}
        className="space-y-8 max-w-[646px] xl:ml-[224px]"
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Panel;
