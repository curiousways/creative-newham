import type { NextPage } from "next";

import Link from "next/link";

import { motion } from "framer-motion";

import { container, item } from "@/lib/animations";

import Button from "@/components/Button";
import Panel from "@/components/Panel";

const locatons = [
  { id: 'inNewhamYes', title: 'Yes' },
  { id: 'inNewhamNo', title: 'No' },
]

const culturalMobilities = [
  { id: 'culturalMobilityYes', title: 'Yes' },
  { id: 'culturalMobilityNo', title: 'No' },
]

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

          <h3>Apply to join the CNA</h3>

          <form className="space-y-4">

            <div>
              <label>Are you based in Newham?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Based in Newham</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {locatons.map((location) => (
                    <div key={location.id} className="flex items-center">
                      <input
                        id={location.id}
                        name="location"
                        type="radio"
                        className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      />
                      <label htmlFor={location.id} className="ml-3 block">
                        {location.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div>
              <label>Are you interested in the improvement of cultural mobility in Newham?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Culural Mobility</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {culturalMobilities.map((culturalMobility) => (
                    <div key={culturalMobility.id} className="flex items-center">
                      <input
                        id={culturalMobility.id}
                        name="mobility"
                        type="radio"
                        className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      />
                      <label htmlFor={culturalMobility.id} className="ml-3 block">
                        {culturalMobility.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>        
                
            <div>
              <label htmlFor="joiningReason" className="block mb-4">
                What are your principal reasons for joining the CNA?
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="joiningReason"
                  id="joiningReason"
                  className="block text-cn-blue w-full rounded-md shadow-sm border-white focus:border-cn-orange focus:ring-cn-orange"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="flex xl:space-x-10">
              <div className="flex-1">
                <label htmlFor="name" className="block mb-4">
                  Your name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>             

              <div className="flex-1">
                <label htmlFor="email" className="block mb-4">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>   
            </div>

            <div>
              <label htmlFor="orgName" className="block mb-4">
                Organisation name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="orgName"
                  id="orgName"
                  className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                />
              </div>
            </div>             

            <div className="flex xl:space-x-10">
              <div className="flex-1">
                <label htmlFor="street" className="block mb-4">
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="street"
                    id="street"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>  

              <div className="flex-1">
                <label htmlFor="city" className="block mb-4">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>
            </div>   

            <div className="flex xl:space-x-10">
              <div className="flex-1">
                <label htmlFor="county" className="block mb-4">
                  County
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="county"
                    id="county"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>  

              <div className="flex-1">
                <label htmlFor="postcode" className="block mb-4">
                  Postcode
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="postcode"
                    id="postcode"
                    className="block w-full rounded-md border-whoite shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                  />
                </div>
              </div>
            </div> 

            <div>
              <label htmlFor="orgMission" className="block mb-4">
                What is your organisation’s mission?
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="orgMission"
                  id="orgMission"
                  className="block text-cn-blue w-full rounded-md shadow-sm border-white focus:border-cn-orange focus:ring-cn-orange"
                  defaultValue={''}
                />
              </div>
            </div>

            <div>
              <label htmlFor="community" className="block mb-4">
                Does your organisation have a community focus? If so, please outline.
              </label>
              <div className="mt-1">
                <textarea
                  rows={4}
                  name="community"
                  id="community"
                  className="block text-cn-blue w-full rounded-md shadow-sm border-white focus:border-cn-orange focus:ring-cn-orange"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="relative flex items-start mt-5">
              <div className="flex h-5 items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-cn-orange focus:ring-cn-orange"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter">
                  Tick the box to receive the CNA newsletter
                </label>
              </div>
            </div>        
            
            <div className="mt-5 inline-flex">
              <Button text="Submit" link="#" />
            </div>

          </form>

        </Panel>

      </div>
    </main>
  );
};

export default Membership;
