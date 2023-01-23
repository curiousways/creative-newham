import { ReactChildren, ReactChild } from "react";

import { useRouter } from "next/router";

type NavLinkProps = { href: string; children: ReactChild | ReactChildren };

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
    <a href={href} onClick={handleClick} className={styles}>
      {children}
    </a>
  );
}

export default NavLink;
