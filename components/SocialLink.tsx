import React, { ReactNode } from 'react';
import Link from "next/link";
import { FunctionComponent } from 'react';

interface SocialLinkProps {
  icon: FunctionComponent;
  url: string;
  handle: string;
  children: ReactNode;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ 
  icon: 
  Icon, 
  url, 
  handle, 
  children 
}: SocialLinkProps) => {
  return (
    (<div>
      <h3 className="text-cn-orange text-2xl">{children}</h3>
      <Link
        href={url}
        passHref
        className="flex space-x-2 items-center hover:text-cn-orange transition-colors duration-300 text-white no-underline"
        target="_blank"
        rel="noreferrer">
        <Icon />
        <span>{handle}</span>
      </Link>
    </div>)
  );
}

export default SocialLink;
