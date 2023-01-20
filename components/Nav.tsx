import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Logo from "../public/assets/images/logo.svg";

const navItems = [
  {
    name: 'About',
    href: '/about/',
  },
  {
    name: 'Supporters',
    href: '/supporters/',
  },  
  {
    name: 'News',
    href: '/news/',
  },  
  {
    name: 'Contact',
    href: '/contact/',
  },    
]

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container--wide pt-[25px] pb-[35px] sm:py-[84px] relative xl:flex justify-between items-end"
    >
      <div>
        <Link href="/" passHref>
          <a className="cursor-pointer max-w-[571px]" aria-label="Brand logo">
            <Image src={Logo} alt="Brand logo" />
          </a>
        </Link>
      </div>

      <div>
        <ul className="flex space-x-5 mt-2 sm:mt-5 xl:mt-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-white text-sm sm:text-lg hover:text-cn-orange">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>


    </motion.div>
  );
};

export default Nav;
