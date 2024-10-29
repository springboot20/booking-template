import React from "react";
import ExtensionCards from "./ExtensionCards";
import { ChromeIcon, FirefoxIcon, OperaIcon } from "../image-exports/Images";

const Extensions = () => {
  const data = [
    {
      title: " Add to Chrome",
      description: "Minimum version 62",
      buttonLabel: "Add & Install Extension",
      icon: `${ChromeIcon}`,
    },
    {
      title: "Add to Firefox",
      description: "Minimum version 55",
      buttonLabel: "Add & Install Extension",
      icon: `${FirefoxIcon}`,
    },
    {
      title: "Add to Opera",
      description: "Minimum version 46",
      buttonLabel: "Add & Install Extension",
      icon: `${OperaIcon}`,
    },
  ];

  return (
    <section className="relative py-6 xl:h-screen xl:py-0" id="pricing">
      <div className="grid grid-cols-1 mx-auto max-w-7xl place-items-center place-content-center lg:h-full px-4 xl:px-0">
        <article className="max-w-2xl mx-auto">
          <h1 className="text-center text-3xl sm:text-5xl mb-4 font-semibold text-very-dark-blue">
            Download the extension
          </h1>
          <p className="text-center text-lg font-normal text-gray-500">
            We've got more browsers in the pipeline. Please do let us know if you've got a favorite
            you'd like us to prioritize.
          </p>
        </article>
        <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full extension-cards mt-4 max-w-5xl mx-auto">
          {data.map((data, i) => (
            <ExtensionCards key={i} data={data} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Extensions;
