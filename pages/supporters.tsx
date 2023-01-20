import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Panel from "@/components/Panel";
import { supporters } from "../data/data";

const MembersSupporters: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container--wide">

      <Panel title="Supporters">

        {/* Supporters */}
        <div className="cn-text">
          <h3>Creative Newham supporters</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          {/* Full */}
          <div className="sm:col-span-6 relative flex items-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 p-10 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2">
            <div>
              <a target="_blank" rel="noreferrer" href="https://future.london/programme/westfield-east-bank-creative-futures-fund/">
                <img className="h-auto w-full" src="/assets/images/westfield_east_bank_creative_futures_fund.png" alt="Westfield East Bank Creative Futures Fund" />
              </a>
            </div>
          </div>
          {/* Half */}
          <div className="sm:col-span-3 relative flex items-center justify-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 p-5 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2">
            <div>
              <a target="_blank" rel="noreferrer" href="https://uk.westfield.com/stratfordcity/homepage">
                <img className="h-28 w-full" src="/assets/images/westfield_city_stratford.jpg" alt="Westfield City Stratford" />
              </a>
            </div>
          </div>
          {/* Half */}
          <div className="sm:col-span-3 relative flex items-center justify-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 p-5 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2">
            <div>
              <a target="_blank" rel="noreferrer" href="https://future.london/">
                <img className="h-auto w-full" src="/assets/images/foundation-for-future-london.png" alt="Foundation for Future London" />
              </a>
            </div>
          </div>   
          {/* Thirds */}
          {supporters.map((logo) => (
            <div
              key={logo.title}
              className="sm:col-span-2 relative flex items-center space-x-3 rounded-lg border-2 border-cn-blue bg-white bg-opacity-90 p-5 shadow-sm focus-within:ring-2 focus-within:ring-cn-orange focus-within:ring-offset-2 hover:border-cn-orange hover:border-2"
            >
              <div>
                <a target="_blank" rel="noreferrer" href={logo.href}>
                  <img className="h-auto w-full" src={logo.imageUrl} alt="" />
                </a>
              </div>
            </div>
          ))}                             
        </div> 

      </Panel>

    </main>
  );
};

export default MembersSupporters;