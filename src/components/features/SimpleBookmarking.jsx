import React from "react";
import { TabOneIllustration } from "../image-exports/Images";
import Button from "../buttons/Button";
import PropTypes from "prop-types";

const SimpleBookmarking = ({ className }) => {
  return (
    <div className={className}>
      <article className="h-full w-full flex items-center justify-center lg:items-start lg:justify-start">
        <img src={TabOneIllustration} alt="" className="h-full" />
      </article>
      <article className="max-w-3xl space-y-3 sm:space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left">
          Bookmark in one click
        </h1>
        <p className="text-base sm:text-lg text-grayish font-normal text-gray-500 text-center lg:text-left">
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you
          complete control over how you manage your favorite sites.
        </p>
        <Button className="hidden lg:inline-block px-10 hover:bg-blue-700 transition-all ease py-3 rounded-md bg-soft-blue text-white text-lg font-medium transition-colors">
          More Info
        </Button>
      </article>
    </div>
  );
};

export default SimpleBookmarking;

SimpleBookmarking.prototype = {
  className: PropTypes.string,
};
