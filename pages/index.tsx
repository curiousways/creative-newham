import type { NextPage } from "next";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Button from "@/components/Button";
import Panel from "@/components/panel/Panel";
import Link from "next/link";

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
              We identify training and employment opportunities for young people
              and adults, running programmes such as the Creative Newham{" "}
              <Link
                href="https://rosettaarts.org/projects/creative-newham-cultural-producers-programme-2022-2023/ "
                passHref
              >
                <a target="_blank" rel="noreferrer">
                  Cultural Producers programme.
                </a>
              </Link>
            </p>

            <h3>Steering Group</h3>
            <p>
              Creative Newham is supported by a steering group which meets
              quarterly and is co-ordinated by Rosetta Arts. Chaired by Sanaz
              Amidi, Chief Executive of Rosetta Arts, the steering group
              consists of representatives from eight local organisations:{" "}
              <Link href="https://certainblacks.com/">Certain Blacks</Link>,{" "}
              <Link href="https://caramelrock.com/">Caramel Rock</Link>,{" "}
              <Link href="https://www.newham.gov.uk/">Newham</Link>,{" "}
              <Link href="https://newhamndp.org.uk/">New Deal Partnership</Link>
              , <Link href="https://rosettaarts.org/">Rosetta Arts</Link>,{" "}
              <Link href="https://www.ucl.ac.uk/">
                University College London
              </Link>
              ,{" "}
              <Link href="https://www.newham.gov.uk/">
                London Borough of Newham
              </Link>
              ,{" "}
              <Link href="https://www.royaldocks.london/">
                Royal Docks Team
              </Link>{" "}
              and{" "}
              <Link href="https://future.london/">
                Foundation for Future London
              </Link>{" "}
              .
            </p>
          </div>

          <div className="inline-flex">
            <Button text="Join Us" link="/membership/" />
          </div>
        </Panel>
      </div>
    </main>
  );
};

export default Home;
