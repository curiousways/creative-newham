import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Panel from "@/components/Panel";

const About: NextPage = () => {
  let viewportConfig = { once: true };

  return (
    <main className="container">

      <motion.div
        initial="hidden"
        animate="visible"
        variants={item} className="space-y-20"
      >

        <Panel title="Our story">
          <div className="cn-text">
            <p>
              Creative Newham came into being in 2018, as a result of Arts Council England’s Creative People & Places opportunity, which Newham partners seized with enthusiasm across the borough. Through the process of developing this bid, lead organisation Rosetta Arts (who has a 29-year history of delivering community arts in Newham) brought together over 80 individuals representing over 60 organisations, all sharing a commitment to empowering borough residents to realise their full cultural and creative potential. In September 2019, Creative Newham was formalised and since then, the alliance has grown to XXX member organisations.
            </p>
            <h3>Why Creative Newham?</h3>
            <p>
              Despite a dramatic and positive growth in prosperity as Newham moved from the <Link href="http://newhamdata.wpengine.com/wp-content/uploads/2017/06/Demography-Bulletin-October-2015-IMD.pdf" passHref><a target="_blank" rel="noreferrer">2nd to the 25th most deprived borough in Britain between 2010 and 2015</a></Link>, Newham residents are still amongst some of the most disadvantaged in the UK.
            </p>
            <p>
              Cultural investment in the borough is amongst the lowest in London and as a consequence Newham has the second lowest level of cultural engagement of all the London boroughs at 36.6% (the lowest, Barking & Dagenham, is already an established Creative People & Places place).
            </p>  
            <p>
              There is, however:
            </p>            
            <ul>
              <li>a rich and diverse network of ‘under the radar’ cultural activity organised by artist groups, faith-based organisations and community groups</li>
              <li>a successful history of small-scale entrepreneurship with a large number of independent shops and services catering for the local community</li>
              <li>a positive view of the borough’s ethnic and cultural diversity amongst residents; 9 in 10 agree that ‘people from different backgrounds get on well in my local area’ and the proportion of residents with friends entirely from their own ethnic background is just 9% (Understanding Newham 2019)</li>
            </ul>
            <p>
              Our vision for Creative Newham is a borough where everyone can benefit from creative opportunities – as makers, producers, leaders, audiences and participants – whatever their background or circumstances.              
            </p>
            <p>
              Over the next 10 years we hope to contribute to  a Newham where homegrown creative talent is recognised and rewarded both within and beyond the borough; where residents respect and value different cultures and are proud of their neighbourhood; and where people have the confidence and the opportunity to lead and enjoy a wide range of creative activities.              
            </p>
            <h3>Make-up of Creative Newham</h3>
            <p>
              Creative Newham’s steering group is Chaired by Sanaz Amidi, Chief Executive of Rosetta Arts, which meets quarterly and consists of representative from nine local community and creative organisations: Certain Blacks, Caramel Rock, Newham New Deal Partnership, Rosetta Arts, University College London, London Borough of Newham, the Royal Docks and Foundation for Future London. Its wider alliance is a more informal network of 80+ organisations that are interested in or share the Creative Newham vision.              
            </p>
          </div>
        </Panel>

        <Panel title="What we do">
          <div className="cn-text">
            <p>
              We work to make Newham's creative vision real for everyone in the
              borough. We’ll make sure that cultural activities involve us all and
              will help secure continuing support for Newham’s creative future.
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
              consists of representatives from eight local organisations:
              Certain Blacks, Caramel Rock, Newham New Deal Partnership, Rosetta
              Arts, University College London, London Borough of Newham, Royal
              Docks Team and Foundation for Future London.
            </p>

          </div>
        </Panel>   
        
      </motion.div>
    </main>
  );
};

export default About;
