import { useState, useRef, useEffect } from "react";

import type { NextPage } from "next";

import { NextSeo } from "next-seo";
import axios from "axios";
import Image from "next/image";
import FeaturedImg from "../public/assets/images/featured_img_join.jpg";
import Panel from "@/components/panel/Panel";

const Membership: NextPage = () => {
  const [inNewham, setInNewham] = useState("");
  const [mobility, setMobility] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const formEl = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (inNewham === "yes" && mobility === "yes") {
      setShowError(false);
    } else {
      setShowError(true);
    }
  }, [inNewham, mobility]);

  useEffect(() => {
    setShowError(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "inNewham") {
      setInNewham(e.target.value);
    } else if (e.target.name === "mobility") {
      setMobility(e.target.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inNewham !== "yes" || mobility !== "yes") {
      setShowError(true);
    } else {
      // submit form
      const form = new FormData(e.currentTarget);
      try {
        const res = await axios.post("https://formspree.io/f/xqkokvpy", form);
        if (res.data.ok) {
          setShowError(false);
          setSuccessMessage(true);
          formEl.current?.reset();
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <NextSeo
        title="Join Us - Creative Newham"
        description="Apply to join Creative Newham"
        openGraph={{
          description: "Apply to join Creative Newham",
        }}
      />

      <main className="container">
        <div className="space-y-20">
          <Panel title="Join Us">
            <div className="cn-text">
              <Image
                className="cn-image cn-image--stylised rounded-3xl"
                src={FeaturedImg}
                alt="Creative Newham logo"
              />

              <p>
                Joining the Creative Newham alliance is free. To become a member
                and receive our quarterly newsletter, we ask that you are:
              </p>

              <ul>
                <li>
                  a creative, community, educational, social or voluntary
                  organisation or group based (or working) in Newham
                </li>
                <li>
                  want to improve cultural mobility in all its forms in Newham
                </li>
              </ul>

              <h3>Apply to join Creative Newham</h3>

              <form className="space-y-10" ref={formEl} onSubmit={handleSubmit}>
                {/* Question 1 */}
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

                {/* Question 2 */}
                <div>
                  <label>
                    Are you interested in the improvement of cultural mobility
                    in Newham?
                  </label>
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

                {/* Reason For Joining */}
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
                      required
                    />
                  </div>
                </div>

                {/* Name & Email */}
                <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 xl:gap-x-8">
                  {/* Name */}
                  <div className="flex-1">
                    <label htmlFor="name" className="block mb-4">
                      Your name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex-1">
                    <label htmlFor="email" className="block mb-4">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Organization name */}
                <div>
                  <label htmlFor="orgName" className="block mb-4">
                    Organisation name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="orgName"
                      id="orgName"
                      className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                      required
                    />
                  </div>
                </div>

                {/* Street Adress & City */}
                <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 xl:gap-x-8">
                  {/* Street */}
                  <div className="flex-1">
                    <label htmlFor="street" className="block mb-4">
                      Street address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="street"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex-1">
                    <label htmlFor="city" className="block mb-4">
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* County & Postcode */}
                <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 xl:gap-x-8">
                  {/* County */}
                  <div className="flex-1">
                    <label htmlFor="county" className="block mb-4">
                      County
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="county"
                        id="county"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>

                  {/* Postcode */}
                  <div className="flex-1">
                    <label htmlFor="postcode" className="block mb-4">
                      Postcode
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postcode"
                        id="postcode"
                        className="block w-full rounded-md text-cn-blue border-white shadow-sm focus:border-cn-orange focus:ring-cn-orange"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Organisation’s mission ? */}
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
                      required
                    />
                  </div>
                </div>

                {/* Community focus? */}
                <div>
                  <label htmlFor="community" className="block mb-4">
                    Does your organisation have a community focus? If so, please
                    outline.
                  </label>
                  <div className="mt-1">
                    <textarea
                      rows={4}
                      name="community"
                      id="community"
                      className="block text-cn-blue w-full rounded-md shadow-sm border-white focus:border-cn-orange focus:ring-cn-orange"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-5 inline-flex">
                  <input
                    className="cn-btn"
                    type="submit"
                    value="Submit"
                    disabled={inNewham !== "yes" || mobility !== "yes"}
                  />
                </div>

                {/* Error Message */}
                {showError && (
                  <p className="cn-message bg-red-500">
                    You need to answer yes to questions 1 & 2 to proceed
                  </p>
                )}

                {/* Success Message */}
                {successMessage && (
                  <p className="cn-message bg-green-500">
                    Request Submitted. We will get back to you shortly.
                  </p>
                )}
              </form>
            </div>
          </Panel>
        </div>
      </main>
    </>
  );
};

export default Membership;
