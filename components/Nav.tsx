import Link from "next/link";
import Image from "next/image";

import Logo from "../public/assets/images/logo.svg";

const Nav = () => {
  return (
    <div className="container pt-[25px] pb-[35px] sm:py-[84px] relative">
      <Link href="/" passHref>
        <a className="cursor-pointer" aria-label="Brand logo">
          <Image src={Logo} />
        </a>
      </Link>
    </div>
  );
};

export default Nav;
