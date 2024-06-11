import type { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Image from "next/image";
import ImageLink from "@/components/ImageLink";
import Panel from "@/components/panel/Panel";
import { supporters } from "../data/data";
import FeaturedImg from "../public/assets/images/featured_img.jpg";
import WestFieldEastBank from "../public/assets/images/westfield_east_bank_creative_futures_fund.png";
import WestfieldCityStratford from "../public/assets/images/westfield_city_stratford.jpg";
import FoundationForLondon from "../public/assets/images/foundation-for-future-london.png";

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
              className="cn-image cn-image--stylised rounded-3xl"
              src={FeaturedImg}
              alt="Creative Newham logo"
            />
            <p>Creative Newham began in 2018, as a result of Arts Council England’s Creative People & Places opportunity, which Newham partners seized with enthusiasm across the borough. Through the process of developing this bid, cultural leader Sanaz Amidi, who was Chief Exec of Rosetta Arts until 2023 (established in 1993, with a long history of delivering community arts in Newham) brought together over 80 individuals representing over 60 organisations, all sharing a commitment to empowering borough residents to realise their full cultural and creative potential. In September 2019, Creative Newham was formalised with Sanaz Amidi as Chair and since then, the alliance has continued to grow.</p>
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
              Cultural investment in the borough is amongst the lowest in London and as a consequence Newham has the second lowest level of cultural engagement of all the London boroughs at 36.6% (the lowest, Barking & Dagenham, is already an established Creative People & Places place).
            </p>
            <p>There is, however:</p>
            <ul>
              <li>
                a rich and diverse network of ‘under the radar’ cultural activity organised by artist groups, faith-based organisations and community groups
              </li>
              <li>
                a successful history of small-scale entrepreneurship with a large number of independent shops and services catering for the local community
              </li>
              <li>
                a positive view of the borough’s ethnic and cultural diversity amongst residents; 9 in 10 agree that ‘people from different backgrounds get on well in my local area’ and the proportion of residents with friends entirely from their own ethnic background is just 9% (Understanding Newham 2019)
              </li>
            </ul>
            <p>
              Our vision for Creative Newham is a borough where everyone can benefit from creative opportunities – as makers, producers, leaders, audiences and participants – whatever their background or circumstances.
            </p>
            <p>
              Over the next 10 years we hope to contribute to a Newham where homegrown creative talent is recognised and rewarded both within and beyond the borough; where residents respect and value different cultures and are proud of their neighbourhood; and where people have the confidence and the opportunity to lead and enjoy a wide range of creative activities.
            </p>

            <h3>Our current programmes</h3>  
            <h4>The Creative Newham Place Partnership programme</h4>       
            <p>
              Following the success of the pilot of our Cultural Producers programme in 2022-23, in November 2023, we received thrilling news of our success in securing funding from Arts Council England's Place-based Partnerships fund to scale up the programme through Newham's Place Partnership programme. This achievement has unlocked support from other major funders like the Royal Docks, NLHF, Foundation for Future London, LLDC, UEL, UCL East and Newham Council. Over the next three years, this funding and support will enable us to deliver two key initiatives:              
            </p>
            <p>
              Firstly, our Cultural Producers training programme will provide residents with access to employment opportunities in the cultural, heritage, and cross-sectoral fields, aligning with Newham's inclusive economy vision, including developments in East Bank and the Royal Docks.
            </p>
            <p>
              Secondly, our Powerful Partnerships strand will strengthen collaboration across sectors, establishing Newham as a beacon of partnership excellence. Through strategic and effective alliance-building, we aim to advocate for the sector's voice both locally and beyond, driving improved cultural mobility in the borough.              
            </p>
            <p>
              This ambitious programme, managed and led by UEL, reflects our vision for a Newham where creative opportunities are accessible to all, regardless of background or circumstance. Over the next decade, we'll address the shortage of local and diverse producers, recognise the multifaceted skills required in the role, and champion the value of creative thinking and activities.              
            </p>
           
            {/* <p>From 2024 onwards, we will be rolling out a programme called ‘Newham’s Place Partnerships’ that is funded by Arts Council England’s Place-based Partnerships fund and other major funders. This is an ambitious Creative Newham programme, of which UEL has been appointed the managing and accountable lead delivery organisation.</p>
            <p>Creative Newham’s 3-year place-based powerful partnerships programme offers </p>
            <p>1. cross-sector <span className="text-cn-orange">Cultural Producers</span> training, giving residents access to cultural, heritage & cross-sectoral employment in Newham’s new inclusive economy including East Bank and Royal Docks.</p>
            <p>2. a <span className="text-cn-orange">Powerful Partnerships</span> strand that will strengthen Newham's partnership working, resulting in a strategic and effective diverse alliance. Acknowledged as a model of best partnership practice and having a strong voice for the sector in Newham and beyond, through continued joined up working of the membership, for the wider benefit of improved cultural mobility in the borough.</p>
            <p>The programme’s vision is for a Newham where everyone can benefit from creative opportunities - as makers, producers, leaders, audiences and participants - whatever their background or circumstances.</p>
            <p>Our 10-year vision responds to:</p>
            <ul>
              <li>the dearth of local producers, and diverse producers in particular</li>
              <li>the multifaceted skills required of a producer</li>
              <li>a growing recognition of the value of creative thinking and creative activities</li>
            </ul> */}
            <p>The programme was piloted in 2022-23 and known as the <a href="https://rosettaarts.org/projects/creative-newham-cultural-producers-programme-2022-2023/">Creative Newham Cultural Producers</a> programme, which provided a comprehensive training programme to local emerging producers under the age of 30. It included a 45-day placement in a local cultural organisation, classroom-based theory, 1-1 mentoring and regular supervision, with trainees receiving a training bursary (London Living Wage). Previous participating hosts for the 2022 cohort were: <a href="https://bowarts.org/">Bow Arts</a>, <a href="https://codydock.org.uk/">Gasworks Dock Partnership</a> (Cody Dock), <a href="https://www.sustainable-fashion.com/">LCF Centre for Sustainable Fashion</a>, <a href="https://rosettaarts.org/">Rosetta Arts</a>, <a href="https://www.royaldocks.london/">Royal Docks Team</a>, <a href="https://socialconvention.org/">Social Convention</a>, <a href="https://www.stratfordeast.com/">Theatre Royal Stratford East</a>.</p>
            {/* <p>There will be on-going opportunities to apply to get involved either as a host, a cultural producer, a delivery agent and/or an attendee. All opportunities for alliance members will be posted on our newsletter, which you can access if you are a member. </p> */}
            <p>
              Crucial to our success is the support and expertise of our member organisations and their leaders. We'll be rolling out various opportunities throughout the programme, so stay tuned for updates by signing up to our member bi-monthly newsletters. To become a member you can <Link href="/join-us/">join us, for free here</Link>.
            </p>               
            <h4>Young Creative Newham Board</h4>
            <p>
              The{" "}
              <Link href="https://rosettaarts.org/call-out-join-our-young-creative-newham-board-and-get-your-voice-heard/">
                Creative Newham Youth Board 
              </Link> were meeting regularly to have their say in local cultural issues and events. Youth Board members aged 13-18 were paid for their time and in return gained confidence, new skills, new friends and experience in the field. We are looking for new members to join the new cohort of CN Youth Board members. {" "}
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL3kVCQUKqVY5JRucSBrHJHVbg25Sl5mSXu77A2RvMoIulQw/viewform">
                Joining details are here
              </Link>
              .
            </p>
            {/* <p>
              Following the success of the pilot of our Cultural Producers programme in 2022-23, in November 2023, we received thrilling news of our success in securing funding from Arts Council England's Place-based Partnerships fund to scale up the programme through Newham's Place Partnership programme. This achievement has unlocked support from other major funders like the Royal Docks, NLHF, Foundation for Future London, LLDC, UEL, UCL East and Newham Council. Over the next three years, this funding and support will enable us to deliver two key initiatives:              
            </p>
            <p>
              Firstly, our Cultural Producers training programme will provide residents with access to employment opportunities in the cultural, heritage, and cross-sectoral fields, aligning with Newham's inclusive economy vision, including developments in East Bank and the Royal Docks.
            </p>
            <p>
              Secondly, our Powerful Partnerships strand will strengthen collaboration across sectors, establishing Newham as a beacon of partnership excellence. Through strategic and effective alliance-building, we aim to advocate for the sector's voice both locally and beyond, driving improved cultural mobility in the borough.              
            </p>
            <p>
              This ambitious programme, managed and led by UEL, reflects our vision for a Newham where creative opportunities are accessible to all, regardless of background or circumstance. Over the next decade, we'll address the shortage of local and diverse producers, recognise the multifaceted skills required in the role, and champion the value of creative thinking and activities.              
            </p>
            <p>
              Crucial to our success is the support and expertise of our member organisations and their leaders. We'll be rolling out various opportunities throughout the programme, so stay tuned for updates by signing up to our member bi-monthly newsletters. To become a member you can <Link href="/join-us/">join us, for free here</Link>.
            </p> */}

          </div>
        </Panel>

        <Panel title="Our Steering Group" location="body">
          <div className="cn-text">
            <p>
            Creative Newham is supported by a steering group which meets quarterly and is coordinated by the University of East London. Chaired by Sanaz Amidi, the steering group consists of representatives from eleven local organisations: {" "}
              <Link href="https://certainblacks.com/">Certain Blacks</Link>,{" "}
              <Link href="https://caramelrock.com/">Caramel Rock</Link>,{" "}
              <Link href="https://future.london/">
                Foundation for Future London
              </Link>
              ,{" "}
              <Link href="https://www.newham.gov.uk/">
                London Borough of Newham
              </Link>
              ,{" "}
              <Link href="https://newhamndp.org.uk/">
                Newham New Deal Partnership
              </Link>
              ,{" "}
              <Link href="https://www.royaldocks.london/">
                Royal Docks Team
              </Link>
              ,{" "}
              <Link href="https://www.ucl.ac.uk/">
                University College London
              </Link>
              ,{" "}
              <Link href="https://www.uel.ac.uk/">
                University of East London
              </Link>
              ,{" "}
              <Link href="https://www.queenelizabetholympicpark.co.uk/east-bank/">
                East Bank
              </Link>
              ,{" "}
              <Link href="https://www.queenelizabetholympicpark.co.uk/legacy-corporation">
                London Legacy Development Corporation
              </Link>    
              ,{" "}              
              <Link href="https://www.creativeschools.london/our-story-of-change/">
                Creative Schools              
              </Link>
              ,{" "}   
              <Link href="https://www.creativeschools.london/elcea/">
                East London Cultural Education Alliance
              </Link>
              .
            </p>            
          </div>        
        </Panel>

        {/* Supporters */}
        {/* <Panel title="Our Supporters" location="body">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
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
        </Panel> */}

        {/* Funders */}
        <Panel title="Our Funders" location="body">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            
            {/* <ImageLink
              link="https://future.london/programme/westfield-east-bank-creative-futures-fund/"
              image={WestFieldEastBank}
              alt="Westfield East Bank Creative Futures Fund"
              wrapperClassName="sm:col-span-6"
            />

            
            <ImageLink
              link="https://uk.westfield.com/stratfordcity/homepage"
              image={WestfieldCityStratford}
              alt="Westfield City Stratford"
              imgClassName="h-28 w-full"
              wrapperClassName="sm:col-span-3"
            />

            
            <ImageLink
              link="https://future.london/"
              image={FoundationForLondon}
              alt="Westfield City Stratford"
              wrapperClassName="sm:col-span-3"
            /> */}

            {/* Thirds */}
            {supporters.map((logo) => (
              <ImageLink
                link={logo.href}
                image={logo.imageUrl}
                alt={logo.title}
                key={logo.title}
                wrapperClassName="sm:col-span-2" 
              />

              // add royal docs here - before UEL, movee LLD bottom
            ))}
          </div>
        </Panel>        
      </main>
    </>
  );
};

export default About;
