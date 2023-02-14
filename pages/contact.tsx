import type { NextPage } from "next";

import { NextSeo } from "next-seo";

import Twitter from "@/components/Twitter";
import Linkedin from "@/components/Linkedin";
import Email from "@/components/Email";
import Panel from "@/components/panel/Panel";
import SocialLink from "@/components/SocialLink";

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
            url="https://linkedin.com/"
          >
            Linkedin
          </SocialLink>
          <SocialLink
            icon={Twitter}
            handle="@creativenewham"
            url="https://www.twitter.com/creativenewham/"
          >
            Twitter
          </SocialLink>
        </Panel>
      </main>
    </>
  );
};

export default Contact;
