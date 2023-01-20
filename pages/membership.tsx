import { useState } from 'react';
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { item } from "@/lib/animations";
import Panel from "@/components/Panel";

const Membership: NextPage = () => {
  let viewportConfig = { once: true };

  const [inNewham, setInNewham] = useState("");
  const [mobility, setMobility] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "inNewham") {
      setInNewham(e.target.value);
    } else if (e.target.name === "mobility") {
      setMobility(e.target.value);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inNewham !== "yes" || mobility !== "yes") {
      setShowError(true);
      console.log("showError: ", showError);
    } else {
      // submit form
    }
  }

  return (
    <main className="container">

      <div className="space-y-20">

        <Panel title="Membership">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={item}
            className="cn-text"
          >
            <p>
              To become a member and receive our quarterly newsletter, we ask that you are: 
            </p>
            <ul>
              <li>a creative, community, educational, social or voluntary organisation based (or working) in Newham</li>
              <li>interested in the improvement of cultural mobility in all its forms in Newham</li>
            </ul>

            <h3>Apply to join Creative Newham</h3>
          </motion.div>

          <form className="space-y-10" onSubmit={handleSubmit}>

            <div>
              <label>Are you based in Newham?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Based in Newham</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      name="inNewham"
                      id="inNewhamYes"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      checked={inNewham === "yes"}
                      onChange={handleChange}
                    />
                    <label htmlFor="inNewhamYes" className="ml-3 block">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      name="inNewham"
                      id="inNewhamNo"
                      type="radio"
                      value="no"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      checked={inNewham === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="inNewhamNo" className="ml-3 block">
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>        

            <div>
              <label>Are you interested in the improvement of cultural mobility in Newham?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Culural Mobility</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div className="flex items-center">
                    <input
                      name="mobility"
                      id="mobilityYes"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      checked={mobility === "yes"}
                      onChange={handleChange}
                    />
                    <label htmlFor="mobilityYes" className="ml-3 block">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      name="mobility"
                      id="mobilityNo"
                      type="radio"
                      value="no"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                      checked={mobility === "no"}
                      onChange={handleChange}
                    />
                    <label htmlFor="mobilityNo" className="ml-3 block">
                      No
                    </label>
                  </div>                     
                </div>
              </fieldset>
            </div>                

            {/* <div>
              <label>Are you interested in the improvement of cultural mobility in Newham?</label>
              <fieldset className="mt-4">
                <legend className="sr-only">Culural Mobility</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                    <input
                      name="mobility"
                      id="mobilityYes"
                      type="radio"
                      value="yes"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                    />
                    <label htmlFor="mobilityYes" className="ml-3 block">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      name="mobility"
                      id="mobilityNo"
                      type="radio"
                      value="no"
                      className="h-4 w-4 border-white text-cn-orange focus:ring-cn-orange"
                    />
                    <label htmlFor="mobilityNo" className="ml-3 block">
                      No
                    </label>
                  </div>                     
                </div>
              </fieldset>
            </div>                  */}
                
            <div>
              <label htmlFor="joiningReason" className="block mb-4">
                What are your principal reasons for joining Creative Newham?
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
                  Tick the box to receive the Creative Newham newsletter
                </label>
              </div>
            </div>        
            
            <div className="mt-5 inline-flex">
              <input
                className="cn-btn" 
                type="submit" 
                value="Submit"
                disabled={inNewham !== "yes" || mobility !== "yes"}
              />
            </div>

            {showError && <p className="text-red-500">You need to answer yes to both questions</p>}

          </form>

        </Panel>

      </div>
    </main>
  );
};

export default Membership;
