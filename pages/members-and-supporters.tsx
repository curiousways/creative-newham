import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Panel from "@/components/Panel";
import { members, steeringGroup, supporters } from "../data/data";

const MembersSupporters: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container--wide">

      <Panel title="Members & Supporters">
        <motion.div
          variants={item}
          viewport={viewportConfig}
          className="mb-20"
        >

          {/* Members */}
          <div className="cn-text">
            <h3>Creative Newham Members</h3>
            <ul>
              {members.map(({ name, link }) => (
                <li key={name}>
                  <Link href={link} passHref>
                    <a target="_blank" rel="noreferrer">
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Steering Group */}
        <div className="cn-text">
          <h3>Steering Group</h3>
         </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {steeringGroup.map((logo) => (
            <div
              key={logo.title}
              className="relative flex flex-col items-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 px-6 pt-8 pb-6 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2"
            >
              <div className="flex-shrink-0">
                <img className="h-20" src={logo.imageUrl} alt="" />
              </div>
              <div className="min-w-0 mt-5 flex-1 text-center">
                <a href={logo.href} className="focus:outline-none" target="_blank" rel="noreferrer">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm text-cn-blue">{logo.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supporters */}
        <div className="cn-text">
          <h3>Supporters</h3>
         </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {supporters.map((logo) => (
            <div
              key={logo.title}
              className="relative flex items-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 p-5 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2"
            >
              <div>
                <img className="h-auto w-full" src={logo.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>        

      </Panel>

    </main>
  );
};

export default MembersSupporters;