import React from "react";
import Button from "../buttons/Button";
import { TabThreeIllustration } from "../image-exports/Images";
import PropTypes from "prop-types";

const EasySharing = ({ className }) => {
  return (
    <div className={className}>
      <article className="h-full w-full flex items-center justify-center lg:items-start lg:justify-start">
        <img src={TabThreeIllustration} alt="" className="h-full w-full" />
      </article>
      <article className="max-w-3xl space-y-3 sm:space-y-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left">
          Share your bookmarks
        </h1>
        <p className="text-base sm:text-lg text-grayish font-normal text-gray-500 text-center lg:text-left">
          Easily share your bookmarks and collections with others. Create a shareable link that you
          can send at the click of a button.
        </p>
        <Button className="hidden lg:inline-block px-10 hover:bg-blue-700 transition-all ease py-4 rounded-md bg-soft-blue text-white text-xl font-medium">
          More Info
        </Button>
      </article>
    </div>
  );
};

export default EasySharing;

EasySharing.prototype = {
  className: PropTypes.string,
};
