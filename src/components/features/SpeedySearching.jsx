import React from "react";
import { TabTwoIllustration } from "../image-exports/Images";
import Button from "../buttons/Button";
import PropTypes from "prop-types";

const SpeedySearching = ({ className }) => {
  return (
    <div className={className}>
      <article className="h-full w-full flex items-center justify-center lg:items-start lg:justify-start">
        <img src={TabTwoIllustration} alt="" className="h-full w-full" />
      </article>
      <article className="max-w-3xl space-y-3 sm:space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left">
          Intelligent search
        </h1>
        <p className="text-base sm:text-lg text-grayish font-normal text-gray-500 text-center lg:text-left">
          Our powerful search feature will help you find saved sites in no time at all. No need to
          trawl through all of your bookmarks.
        </p>
        <Button className="hidden lg:inline-block px-10 hover:bg-blue-700 transition-all ease py-3 rounded-md bg-soft-blue text-white text-lg font-medium transition-colors">
          More Info
        </Button>
      </article>
    </div>
  );
};

export default SpeedySearching;

SpeedySearching.prototype = {
  className: PropTypes.string,
};
