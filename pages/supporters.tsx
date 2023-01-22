import type { NextPage } from "next";
import Panel from "@/components/Panel";
import { supporters } from "../data/data";
import ImageLink from "@/components/ImageLink";

const MembersSupporters: NextPage = () => {

  return (
    <main className="container--wide">

      <Panel title="Supporters">

        {/* Supporters */}
        <div className="cn-text">
          <h3>Creative Newham supporters</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
          {/* Full */}
          <ImageLink
            link="https://future.london/programme/westfield-east-bank-creative-futures-fund/"
            image="/assets/images/westfield_east_bank_creative_futures_fund.png"
            alt="Westfield East Bank Creative Futures Fund"
            wrapperClassName="sm:col-span-6"
          />
          
          {/* Half */}          
          <ImageLink
            link="https://uk.westfield.com/stratfordcity/homepage"
            image="/assets/images/westfield_city_stratford.jpg"
            alt="Westfield City Stratford"
            imgClassName="h-28 w-full"
            wrapperClassName="sm:col-span-3"
          />

          {/* Half */}
          <ImageLink
            link="https://future.london/"
            image="/assets/images/foundation-for-future-london.png"
            alt="Westfield City Stratford"
            wrapperClassName="sm:col-span-3"
          />              
          
          {/* Thirds */}
          {supporters.map((logo) => (
            <ImageLink
              link={logo.href}
              image={logo.imageUrl}
              alt={logo.title}
              key={logo.title}
              wrapperClassName="sm:col-span-2"
            />
          ))}                             
        </div> 

      </Panel>

    </main>
  );
};

export default MembersSupporters;