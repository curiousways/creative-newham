import React from 'react';
import Link from "next/link";
import { FunctionComponent } from 'react';

interface SocialLinkProps {
  icon: FunctionComponent;
  url: string;
  handle: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ icon: Icon, url, handle, children }) => {
  return (
    <div>
      <h3 className="text-cn-orange text-2xl">{children}</h3>
      <Link href={url} passHref>
        <a
          className="flex space-x-2 items-center hover:text-cn-orange transition-colors duration-300 text-white no-underline"
          target="_blank"
          rel="noreferrer"
        >
          <Icon />
          <span>{handle}</span>
        </a>
      </Link>
    </div>
  );
}

export default SocialLink;
