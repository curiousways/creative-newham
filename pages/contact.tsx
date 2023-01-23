import type { NextPage } from "next";
import Twitter from "@/components/Twitter";
import Instagram from "@/components/Instagram";
import Email from "@/components/Email";
import Panel from "@/components/panel/Panel";
import SocialLink from "@/components/SocialLink";

const Contact: NextPage = () => {
  return (
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
          icon={Instagram}
          handle="@creativenewham"
          url="https://www.instagram.com/creativenewham/"
        >
          Instagram
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
  );
};

export default Contact;
