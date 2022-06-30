import React from "react";

import { motion } from "framer-motion";

import { container, item } from "@/lib/animations";

type PanelProps = {
  title: string;
  children: React.ReactNode;
};

const Panel = ({ title, children }: PanelProps) => {
  let viewportConfig = { once: true };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="space-y-6 md:space-y-[83px]"
    >
      <motion.h2 variants={item} viewport={viewportConfig}>
        {title}
      </motion.h2>
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
