import Link from "next/link";
import Image from "next/image";

import { motion } from "motion/react";

import NavLink from "./NavLink";

import Logo from "../public/assets/images/logo.svg";

const navItems = [
  {
    name: "About",
    href: "/about/",
  },
  {
    name: "News",
    href: "/news/",
  },
  {
    name: "Join Us",
    href: "/join-us/",
  },
  {
    name: "Contact",
    href: "/contact/",
  },
];

const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container--wide pt-[25px] pb-[35px] sm:py-[84px] relative xl:flex justify-between items-end"
    >
      <div>
        <Link
          href="/"
          className="cursor-pointer max-w-[571px] relative"
          aria-label="Creative Newham logo">
          <Image width="571" height="83" src={Logo} alt="Creative Newham logo" />
        </Link>
      </div>
      <div>
        <ul className="flex space-x-5 mt-2 sm:mt-5 xl:mt-0">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink href={item.href}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
};

export default Nav;
