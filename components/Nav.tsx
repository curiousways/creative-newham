import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Logo from "../public/assets/images/logo.svg";

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container pt-[25px] pb-[35px] sm:py-[84px] relative"
    >
      <Link href="/" passHref>
        <a className="cursor-pointer max-w-[571px]" aria-label="Brand logo">
          <Image src={Logo} />
        </a>
      </Link>
    </motion.div>
  );
};

export default Nav;
