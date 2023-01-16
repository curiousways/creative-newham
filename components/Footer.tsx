import Instagram from "@/components/Instagram";
import Twitter from "@/components/Twitter";

const siteTitle = process.env.SITE_TITLE;

const social = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/creativenewham/',
    icon: () => (
      <Twitter />
    ),
  },  
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/creativenewham/',
    icon: () => (
      <Instagram />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="container--wide mt-auto pt-20 pb-5">
      <div className="md:flex md:justify-between">
        <div className="flex md:justify-center space-x-6 md:order-2">
          {social.map((item) => (
            <a key={item.name} href={item.href} target="_blank" className="text-white hover:text-cn-orange">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="text-base">
            Copyright {new Date().getFullYear()} {siteTitle}
          </p>
        </div>
      </div>
    </footer>
  )
}
