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
      <Tab.List className={"gap-10  flex justify-center items-center"}>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            <Button
              onClick={() => setView("simple-bookmark")}
              className={clx(
                selected && "text-gray-600 border-b-4 border-[#400167]",
                "focus:outline-none text-xl text-gray-800 font-satoshi font-medium py-1.5",
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
                selected && "text-gray-600 border-b-4 border-[#400167]",
                "focus:outline-none text-xl text-gray-800 font-satoshi font-medium py-1.5",
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
                selected && "text-gray-600 border-b-4 border-[#400167]",
                "focus:outline-none text-xl text-gray-800 font-satoshi font-medium py-1.5",
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
    <section className="relative xl:h-screen">
      <div className="grid grid-cols-1 mx-auto max-w-7xl place-items-center place-content-center lg:h-full gap-10">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-center text-5xl mb-4 font-semibold text-gray-800"> Features</h1>
          <p className="text-center text-lg font-semibold text-gray-500 md:pb-14 lg:pb-0">
            Our aim is to make it quick and easy for you to access your favorite websites. Your
            bookmarks sync between your devices so you can access them on the go.
          </p>
        </article>
        <article className="max-w-12xl mx-auto overflow-hidden relative">
          <div className="max-w-5xl mx-auto">
            <Tabs setView={setView} />
          </div>
          <div className="hidden mt-12 w-full">
            {view === "simple-bookmark" ? (
              <SimpleBookmarking
                className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-x-16 transition-al ease`}
              />
            ) : view === "speedy-searching" ? (
              <SpeedySearching
                className={`flex flex-col h-full justify-center lg:flex-row items-center gap-8`}
              />
            ) : (
              <EasySharing
                className={`flex flex-col h-full justify-center lg:flex-row items-center gap-8`}
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
