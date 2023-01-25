import Link from "next/link";

import Linkedin from "@/components/Linkedin";
import Twitter from "@/components/Twitter";

const siteTitle = process.env.SITE_TITLE;

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/creativenewham/",
    icon: () => <Twitter />,
  },
  {
    name: "Linkedin",
    href: "https://linkedin.com/",
    icon: () => <Linkedin />,
  },
];

export default function Footer() {
  return (
    <footer className="container--wide mt-auto pt-20 pb-5">
      <div className="md:flex md:justify-between">
        <div className="flex md:justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-cn-orange cursor-pointer"
            >
              <a target="_blank" rel="noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-base">
            Copyright {new Date().getFullYear()} {siteTitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
