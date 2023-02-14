import type { NextPage } from "next";
import Link from "next/link";

import { NextSeo } from "next-seo";

import Image from "next/image";
import ImageLink from "@/components/ImageLink";
import Panel from "@/components/panel/Panel";
import { supporters } from "../data/data";

import WestFieldEastBank from "../public/assets/images/westfield_east_bank_creative_futures_fund.png";
import WestfieldCityStratford from "../public/assets/images/westfield_city_stratford.jpg";
import FoundationForLondon from "../public/assets/images/foundation-for-future-london.png";
import FeaturedImg from "../public/assets/images/featured_img.jpg";

const About: NextPage = () => {
  return (
    <>
      <NextSeo
        title="About - Creative Newham"
        description="About Creative Newham"
        openGraph={{
          description: "About Creative Newham",
        }}
      />

      <main className="container">
        <Panel title="Our story">
          <div className="cn-text">
            <Image 
              className="cn-image rounded-3xl" 
              src={FeaturedImg} alt="Creative Newham logo" 
            />
            <p>
              Creative Newham came into being in 2018, as a result of Arts
              Council England’s Creative People & Places opportunity, which
              Newham partners seized with enthusiasm across the borough. Through the process of developing this bid, lead organisation Rosetta Arts (established in 1993, with a long history of delivering community arts in Newham) brought together over 80 individuals representing over 60
              organisations, all sharing a commitment to empowering borough
              residents to realise their full cultural and creative potential.
              In September 2019, Creative Newham was formalised and since then,
              the alliance has continued to grow.
            </p>
            <h3>Why Creative Newham?</h3>
            <p>
              Despite a dramatic and positive growth in prosperity as Newham
              moved from the{" "}
              <Link
                href="http://newhamdata.wpengine.com/wp-content/uploads/2017/06/Demography-Bulletin-October-2015-IMD.pdf"
                passHref
              >
                <a target="_blank" rel="noreferrer">
                  2nd to the 25th most deprived borough in Britain between 2010
                  and 2015
                </a>
              </Link>
              , Newham residents are still amongst some of the most
              disadvantaged in the UK.
            </p>
            <p>
              Cultural investment in the borough is amongst the lowest in London
              and as a consequence Newham has the second lowest level of
              cultural engagement of all the London boroughs at 36.6% (the
              lowest, Barking & Dagenham, is already an established Creative
              People & Places place).
            </p>
            <p>There is, however:</p>
            <ul>
              <li>
                a rich and diverse network of ‘under the radar’ cultural
                activity organised by artist groups, faith-based organisations
                and community groups
              </li>
              <li>
                a successful history of small-scale entrepreneurship with a
                large number of independent shops and services catering for the
                local community
              </li>
              <li>
                a positive view of the borough’s ethnic and cultural diversity
                amongst residents; 9 in 10 agree that ‘people from different
                backgrounds get on well in my local area’ and the proportion of
                residents with friends entirely from their own ethnic background
                is just 9% (Understanding Newham 2019)
              </li>
            </ul>
            <p>
              Our vision for Creative Newham is a borough where everyone can
              benefit from creative opportunities – as makers, producers,
              leaders, audiences and participants – whatever their background or
              circumstances.
            </p>
            <p>
              Over the next 10 years we hope to contribute to a Newham where
              homegrown creative talent is recognised and rewarded both within
              and beyond the borough; where residents respect and value
              different cultures and are proud of their neighbourhood; and where
              people have the confidence and the opportunity to lead and enjoy a
              wide range of creative activities.
            </p>

            <h3>Our current programmes</h3>
            <p>
              The pilot 
              <Link href="https://rosettaarts.org/projects/creative-newham-cultural-producers-programme-2022-2023/">
                Creative Newham Cultural Producers programme
              </Link>
               provides a comprehensive training programme to local emerging
              producers under the age of 30. It includes a 45-day placement in a
              local cultural organisation, classroom-based theory, 1-1 mentoring
              and regular supervision, with trainees receiving a training
              bursary (London Living Wage). Participating hosts for this cohort
              are: <Link href="https://bowarts.org/">Bow Arts</Link>,{" "} <Link href="https://codydock.org.uk/">Gasworks Dock Partnership (Cody Dock)</Link>,{" "} <Link href="https://www.sustainable-fashion.com/">LCF Centre for Sustainable Fashion</Link>,{" "} <Link href="https://rosettaarts.org/">Rosetta Arts</Link>,{" "} <Link href="https://www.royaldocks.london/">Royal Docks Team</Link>,{" "} <Link href="https://socialconvention.org/">Social Convention</Link>,{" "} <Link href="https://www.stratfordeast.com/">Theatre Royal Stratford East</Link>.
            </p>
            <p>
              The{" "}
              <Link href="https://rosettaarts.org/call-out-join-our-young-creative-newham-board-and-get-your-voice-heard/">
                Creative Newham Youth Board
              </Link>
                have been meeting regularly to have their say in local cultural
              issues and events. Youth Board members aged 13-18 are paid for
              their time and in return gain confidence, new skills, new friends
              and experience in the field.{" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL3kVCQUKqVY5JRucSBrHJHVbg25Sl5mSXu77A2RvMoIulQw/viewform">
                Joining details are here
              </Link>
               .
            </p>

            <h3>Our Steering Group</h3>
            <p>
              Creative Newham is supported by a steering group which meets
              quarterly and is co-ordinated by Rosetta Arts. Chaired by Sanaz
              Amidi, Chief Executive of Rosetta Arts, the steering group
              consists of representatives from nine local organisations:{" "}
              <Link href="https://certainblacks.com/">Certain Blacks</Link>,{" "} <Link href="https://caramelrock.com/">Caramel Rock</Link>,{" "} <Link href="https://future.london/">Foundation for Future London</Link>,{" "} <Link href="https://www.newham.gov.uk/">London Borough of Newham</Link>,{" "} <Link href="https://newhamndp.org.uk/">Newham New Deal Partnership</Link>,{" "} <Link href="https://rosettaarts.org/">Rosetta Arts</Link>,{" "} <Link href="https://www.royaldocks.london/">Royal Docks Team</Link>, {" "} <Link href="https://www.ucl.ac.uk/">University College London</Link>, <Link href="https://www.uel.ac.uk/">University of East London</Link>.
            </p>
          </div>
        </Panel>

        {/* Supporters */}
        <Panel title="Our Supporters" location="body">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            {/* Full */}
            <ImageLink
              link="https://future.london/programme/westfield-east-bank-creative-futures-fund/"
              image={WestFieldEastBank}
              alt="Westfield East Bank Creative Futures Fund"
              wrapperClassName="sm:col-span-6"
            />

            {/* Half */}
            <ImageLink
              link="https://uk.westfield.com/stratfordcity/homepage"
              image={WestfieldCityStratford}
              alt="Westfield City Stratford"
              imgClassName="h-28 w-full"
              wrapperClassName="sm:col-span-3"
            />

            {/* Half */}
            <ImageLink
              link="https://future.london/"
              image={FoundationForLondon}
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
    </>
  );
};

export default About;
