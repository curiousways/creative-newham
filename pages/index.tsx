import type { NextPage } from "next";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Button from "@/components/Button";
import Panel from "@/components/panel/Panel";
import Link from "next/link";
import Image from "next/image";
import FeaturedImg from "../public/assets/images/featured_img_home.jpg";

const Home: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">
      <div className="space-y-20">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={item}
          className="text-xl md:text-2xl"
        >
          Creative Newham is an independent alliance of arts, cultural,
          educational, social and voluntary organisations committed to growing
          and strengthening cultural mobility in all its forms in Newham. Our
          aim is to provide a strong and connected creative vision for the
          borough whereby everyone can benefit from creative opportunities - as
          makers, producers, leaders, audiences and participants - whatever
          their background or circumstances.
        </motion.p>

        <Panel title="What we do">
          <div className="cn-text">
            <Image
              fill
              className="cn-image cn-image--stylised rounded-3xl"
              src={FeaturedImg}
              alt="Creative Newham logo"
            />

            <p>
              We work to make Newham's creative vision real for everyone in the
              borough. We’ll make sure that cultural activities involve us all
              and will help secure continuing support for Newham’s creative
              future.
            </p>

            <h3>Advocacy & lobbying</h3>
            <p>
              We come together to respond strategically to issues and policies
              which affect our work, informing and influencing policy-making.
            </p>

            <h3>Connection</h3>
            <p>
              We enable partners and agencies looking to work in Newham to
              engage with our extensive pan-borough creative network quickly to
              identify opportunities and work together.
            </p>

            <h3>Collaboration & co-creation</h3>
            <p>
              We collaborate on projects we can’t do alone or those that would
              be better served with a more joined-up approach.
            </p>

            <h3>Networking</h3>
            <p>
              We meet annually at the Creative Newham Social event and at
              smaller project-based events.
            </p>

            <h3>Fundraising</h3>
            <p>
              We identify funding opportunities and participate in joint funding
              bids to attract funding and strategic interest or investment in
              Newham. For example, Creative Newham assembled support for
              Creative People and Places, securing significant funds for three
              years.
            </p>

            <h3>Skills & employment</h3>
            <p>
              We identify opportunities to make a step change in the Newham talent pipeline and create training and employment opportunities for young people and adults, running programmes such as the{" "}
              <Link href="/news/cultural-producers/" passHref>
                <a>
                  Creative Newham Cultural Producers
                </a>
              </Link>{" "}
              programme and the
              <Link href="/news/creative-newham-youth-board/" passHref>
                <a>
                   Creative Newham Youth Board
                </a>
              </Link>{" "}
              which gives young people and young adults the chance to have a say in local cultural issues and gain experience in the field{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdL3kVCQUKqVY5JRucSBrHJHVbg25Sl5mSXu77A2RvMoIulQw/viewform"
                target="_blank" rel="noreferrer"
              >
                  (joining details here).
              </a>
            </p>
          </div>

          <div className="inline-flex">
            <Button text="Join Us" link="/join-us/" />
          </div>
        </Panel>
      </div>
    </main>
  );
};

export default Home;
