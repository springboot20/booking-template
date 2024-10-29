import React from "react";
import Button from "../buttons/Button";
import { TabThreeIllustration } from "../image-exports/Images";
import PropTypes from "prop-types";

const EasySharing = ({ className }) => {
  return (
    <div className={className}>
      <article className="h-full w-full">
        <img src={TabThreeIllustration} alt="" className="h-full w-full" />
      </article>
      <article className="max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center lg:text-left">
          Share your bookmarks
        </h1>
        <p className="text-lg text-grayish font-semibold text-gray-500 md:text-center lg:text-left">
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
