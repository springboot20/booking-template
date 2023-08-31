import React from 'react';
import { TabTwoIllustration } from '../image-exports/Images';
import Button from '../buttons/Button';
import PropTypes from 'prop-types';

const SpeedySearching = ({ className }) => {
  return (
    <div className={className}>
      <article>
        <img src={TabTwoIllustration} alt='' />
      </article>
      <article className='max-w-2xl'>
        <h1 className='text-5xl font-bold text-gray-800 pb-10 text-center lg:text-left'> Intelligent search</h1>
        <p className='text-2xl text-grayish font-semibold pb-10 text-gray-500 text-center lg:text-left'>
          Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of
          your bookmarks.
        </p>
        <Button className='hidden lg:inline-block px-10 hover:bg-blue-700 transition-all ease py-4 rounded-md bg-soft-blue text-white text-xl font-medium'>
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
