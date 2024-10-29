import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Button from "../buttons/Button";
import SimpleBookmarking from "./SimpleBookmarking";
import EasySharing from "./EasySharing";
import SpeedySearching from "./SpeedySearching";

const clx = (...classnames) => classnames.filter(Boolean).join(" ");

const Tabs = ({ setView }) => {
  return (
    <Tab.Group>
      <Tab.List className={"gap-5 sm:gap-10 flex flex-col sm:flex-row justify-center items-center"}>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            <Button
              onClick={() => setView("simple-bookmark")}
              className={clx(
                selected && "text-gray-600 border-b-4 border-soft-red",
                "focus:outline-none text-base sm:text-xl text-gray-800 font-satoshi font-medium py-1.5",
              )}
            >
              Simple Sharing
            </Button>
          )}
        </Tab>

        <Tab as={React.Fragment}>
          {({ selected }) => (
            <Button
              onClick={() => setView("speedy-searching")}
              className={clx(
                selected && "text-gray-600 border-b-4 border-soft-red",
                "focus:outline-none text-base sm:text-xl text-gray-800 font-satoshi font-medium py-1.5",
              )}
            >
              Speedy Searching
            </Button>
          )}
        </Tab>

        <Tab as={React.Fragment}>
          {({ selected }) => (
            <Button
              onClick={() => setView("easy-sharing")}
              className={clx(
                selected && "text-gray-600 border-b-4 border-soft-red",
                "focus:outline-none text-base sm:text-xl text-gray-800 font-satoshi font-medium py-1.5",
              )}
            >
              Easy Sharing
            </Button>
          )}
        </Tab>
      </Tab.List>

      <Tab.Panels className="mt-6">
        <Tab.Panel>
          <SimpleBookmarking
            className={`flex flex-col h-full justify-center lg:flex-row items-center gap-8`}
          />
        </Tab.Panel>

        <Tab.Panel>
          <SpeedySearching
            className={`flex flex-col h-full justify-center lg:flex-row items-center gap-8`}
          />
        </Tab.Panel>

        <Tab.Panel>
          <EasySharing
            className={`flex flex-col h-full justify-center lg:flex-row items-center gap-8`}
          />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

const Features = () => {
  const [view, setView] = useState("simple-bookmark");

  return (
    <section className="relative xl:h-screen py-6" id="features">
      <div className="grid grid-cols-1 mx-auto max-w-7xl place-items-center place-content-center xl:h-full gap-10 px-4 xl:px-0">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-center text-3xl sm:text-5xl mb-4 font-semibold text-very-dark-blue">
            Features
          </h1>
          <p className="text-center text-lg font-semibold text-gray-500 md:pb-14 lg:pb-0">
            Our aim is to make it quick and easy for you to access your favorite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </article>
        <article className="max-w-5xl mx-auto overflow-hidden relative">
          <Tabs setView={setView} />
        </article>
      </div>
    </section>
  );
};

export default Features;
