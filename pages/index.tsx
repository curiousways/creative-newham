import type { NextPage } from "next";

import Link from "next/link";

import { motion } from "framer-motion";

import { container, item } from "@/lib/animations";

import Instagram from "@/components/Instagram";
import Button from "@/components/Button";
import Panel from "@/components/Panel";

const Home: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">
      <div className="space-y-20">
        <Panel title="What We Do">
          <p>
            Creative Newham is an independent alliance of around 70 arts,
            cultural, educational, social and voluntary organisations committed
            to growing and strengthening cultural mobility in all its forms in
            Newham. Our aim is to provide a strong and connected creative vision
            for the borough whereby everyone can benefit from creative
            opportunities - as makers, producers, leaders, audiences and
            participants - whatever their background or circumstances.
          </p>
          <p>
            We work to make Newham's creative vision real for everyone in the
            borough. We’ll make sure that cultural activities involve us all and
            will help secure continuing support for Newham’s creative future.
          </p>
          <div className="space-y-2">
            <h3>Advocacy & lobbying</h3>
            <p>
              We come together to respond strategically to issues and policies
              which affect our work, informing and influencing policy-making.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Connection</h3>
            <p>
              We enable partners and agencies looking to work in Newham to
              engage with our extensive pan-borough creative network quickly to
              identify opportunities and collaborate.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Collaboration & co-creation</h3>
            <p>
              We collaborate on projects we can’t do alone or those that would
              be better served with a more joined-up approach.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Networking</h3>
            <p>
              We meet annually at the Creative Newham Social event and at
              smaller project-based events.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Fundraising</h3>
            <p>
              We identify funding opportunities and participate in joint funding
              bids to attract funding and strategic interest or investment in
              Newham. For example, Creative Newham assembled support for
              Creative People and Places, securing significant funds for three
              years.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Skills & employment</h3>
            <p>
              We identify opportunities to improve training and employment
              opportunities for young people and adults, running programmes such
              as the Creative Newham{" "}
              <Link href="">Cultural Producers programme.</Link>
            </p>
          </div>
          <div className="space-y-2">
            <h3>Steering Group</h3>
            <p>
              Creative Newham is supported by a steering group which meets
              quarterly and is co-ordinated by Rosetta Arts. Chaired by Sanaz
              Amidi, Chief Executive of Rosetta Arts, the steering group
              consists of representatives from eight local organisations:
              Certain Blacks, Caramel Rock, Newham New Deal Partnership, Rosetta
              Arts, University College London, London Borough of Newham, Royal
              Docks Team and Foundation for Future London.
            </p>
          </div>
          <div className="space-y-2">
            <h3>Our Supporters</h3>
            <ul className="space-y-2">
              <li>
                <Link href="">Foundation for Future London</Link>
              </li>
              <li>
                <Link href="">Royal Docks</Link>
              </li>
              <li>
                <Link href="">London Borough of Newham</Link>
              </li>
              <li>
                <Link href="">Rosetta Arts</Link>
              </li>
            </ul>
          </div>
        </Panel>

        <Panel title="Membership">
          <p>
            We welcome creative / community / educational / social / voluntary
            organisations based (or working) in Newham who have an interest in
            the improvement of cultural mobility in the borough. Membership is
            free.
          </p>
          <p>
            To become a member and receive our quarterly newsletter, please
            click here.
          </p>
          <div className="pt-10">
            <Button text="Become a member" />
          </div>
        </Panel>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-6 md:space-y-[83px]"
        >
          <motion.h2 variants={item} viewport={viewportConfig}>
            Contact
          </motion.h2>
          <div className="space-y-8 sm:space-y-0 sm:flex sm:space-x-[83px] max-w-[646px] xl:ml-[224px]">
            <motion.div variants={item} viewport={viewportConfig}>
              <p className="text-cn-orange">Vicki Young </p>
              <p>Creative Newham</p>
              <p>Programme Manager</p>
            </motion.div>
            <motion.div
              variants={item}
              viewport={viewportConfig}
              className="self-end"
            >
              <p>
                <Link href="mailto:vicki@rosettaarts.org">
                  <a className="no-underline">vicki@rosettaarts.org</a>
                </Link>
              </p>
              <p className="group">
                <Link href="">
                  <a className="flex space-x-2 items-center group-hover:text-cn-orange transition-colors duration-300 text-white no-underline">
                    <Instagram />
                    <span>@creativenewham</span>
                  </a>
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Home;
