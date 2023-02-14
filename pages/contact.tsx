import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Twitter from "@/components/Twitter";
import Linkedin from "@/components/Linkedin";
import Email from "@/components/Email";
import Panel from "@/components/panel/Panel";
import SocialLink from "@/components/SocialLink";
import FeaturedImg from "../public/assets/images/featured_img_contact.jpg";

const Contact: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Contact - Creative Newham"
        description="Contact Creative Newham"
        openGraph={{
          description: "Contact Creative Newham",
        }}
      />

      <main className="container">

        <Panel title="Contact">

          <Image 
            className="cn-image rounded-3xl" 
            src={FeaturedImg} alt="Creative Newham logo" 
          />

          <SocialLink
            icon={Email}
            handle="vicki@rosettaarts.org"
            url="mailto:vicki@rosettaarts.org"
          >
            Email
          </SocialLink>
          <SocialLink
            icon={Linkedin}
            handle="Creative Newham"
            url="https://www.linkedin.com/in/creative-newham-751331264"
          >
            Linkedin
          </SocialLink>
          <SocialLink
            icon={Twitter}
            handle="@creativenewham"
            url="https://www.twitter.com/creativenewham"
          >
            Twitter
          </SocialLink>
        </Panel>
      </main>
    </>
  );
};

export default Contact;
