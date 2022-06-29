import type { NextPage } from "next";

import Link from "next/link";

import Instagram from "@/components/Instagram";

const Home: NextPage = () => {
  return (
    <main className="container">
      <section className="space-y-[83px] mb-[77px]">
        <h2>What We Do</h2>
        <div className="space-y-8 max-w-[646px] xl:ml-[224px]">
          <p>
            The Creative Newham Alliance is an independent consortium of around
            70 arts, cultural, educational, social and voluntary organisations
            committed to growing and strengthening cultural mobility in all its
            forms in Newham. Our aim is to provide a strong creative vision for
            the borough whereby everyone can benefit from creative opportunities
            - as makers, producers, leaders, audiences and participants -
            whatever their background or circumstances.
          </p>
          <p>
            Our mission is to correct the issues that stop cultural mobility and
            to keep cultural activities in the borough accessible and relevant.
            We provide a strong advocacy role, focussing on collaboration,
            partnerships, connections, dissemination of information and
            responsive programming.
          </p>
        </div>
      </section>

      <section className="space-y-[83px] mb-[77px]">
        <h2>Membership</h2>
        <div className="space-y-8 max-w-[646px] xl:ml-[224px]">
          <p>
            We welcome creative / community / educational / social / voluntary
            organisations based (or working) in Newham who have an interest in
            the improvement of cultural mobility in the borough. Become a member
            and receive our quarterly newsletter.
          </p>
          <Link href="/" passHref>
            <a className="text-cn-blue text-base bg-cn-orange rounded-full p-3 inline-block">
              Become a member
            </a>
          </Link>
        </div>
      </section>

      <section className="space-y-[83px] mb-[77px]">
        <h2>Contact</h2>
        <div className="space-y-8 sm:space-y-0 sm:flex sm:space-x-[83px] max-w-[646px] xl:ml-[224px]">
          <div>
            <p className="text-cn-orange">Vicki Young </p>
            <p>Creative Newham</p>
            <p>Programme Manager</p>
          </div>
          <div className="self-end">
            <p>
              <Link href="mailto:vicki@rosettaarts.org">
                vicki@rosettaarts.org
              </Link>
            </p>
            <p>
              <Link href="">
                <a className="flex space-x-1 items-center">
                  <Instagram />
                  <span>@creativenewham</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
