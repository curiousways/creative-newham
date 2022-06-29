import Link from "next/link";

import Logo from "./Logo";

const Nav = () => {
  return (
    <div className="container py-[84px]">
      <Link href="/" passHref>
        <a className="cursor-pointer" aria-label="Brand logo">
          <Logo />
        </a>
      </Link>
    </div>
  );
};

export default Nav;
