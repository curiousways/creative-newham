import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Twitter from "@/components/Twitter";
import Panel from "@/components/Panel";

const Contact: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">

      <Panel title="Contact">
        <motion.div
          variants={item}
          viewport={viewportConfig}
          className="space-y-10"
        >
          <div>
            <h3 className="text-cn-orange text-2xl">Email</h3>
            <p>
              <Link href="mailto:vicki@rosettaarts.org" passHref>
                <a className="hover:text-cn-orange">vicki@rosettaarts.org</a>
              </Link>
            </p>
          </div>

          <div>
            <h3 className="text-cn-orange text-2xl">Twitter</h3>
            <p className="group">
              <Link href="https://www.instagram.com/creativenewham/" passHref>
                <a
                  className="flex space-x-2 items-center hover:text-cn-orange transition-colors duration-300 text-white no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter />
                  <span>@creativenewham</span>
                </a>
              </Link>
            </p>
          </div>

        </motion.div>
      </Panel>

    </main>
  );
};

export default Contact;
