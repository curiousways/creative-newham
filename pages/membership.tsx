import type { NextPage } from "next";

import Link from "next/link";

import { motion } from "framer-motion";

import { container, item } from "@/lib/animations";

import Instagram from "@/components/Instagram";
import Button from "@/components/Button";
import Panel from "@/components/Panel";

import { supporters } from "../data/data";

const Membership: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">

      <div className="space-y-20">

      <Panel title="Membership">
        <p>
          To become a member and receive our quarterly newsletter, we ask that you are: 
        </p>
        <ul className="list-disc ml-10 space-y-4">
          <li>a creative, community, educational, social or voluntary organisation based (or working) in Newham</li>
          <li>interested in the improvement of cultural mobility in all its forms in Newham</li>
        </ul>

    
     
 

  
        </Panel>        


      </div>
    </main>
  );
};

export default Membership;
