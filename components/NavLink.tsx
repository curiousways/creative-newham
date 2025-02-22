import { ReactNode } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = { href: string; children: ReactNode};

function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();

  const sharedStyles = `underline-offset-4 text-sm sm:text-lg hover:text-cn-orange`;

  const styles =
    router.asPath === href || router.asPath.includes(href)
      ? `underline text-cn-orange ${sharedStyles}`
      : `text-white no-underline hover:underline ${sharedStyles}`;

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={styles}>
      {children}
    </Link>
  );
}

export default NavLink;
