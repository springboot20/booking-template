import React from 'react';
import { TabOneIllustration } from '../image-exports/Images';
import Button from '../buttons/Button';
import PropTypes from 'prop-types';

const SimpleBookmarking = ({ className }) => {
  return (
    <div className={className}>
      <article>
        <img src={TabOneIllustration} alt='' />
      </article>
      <article className='max-w-3xl'>
        <h1 className='text-5xl font-bold text-gray-800 pb-10 text-center lg:text-left'>Bookmark in one click</h1>
        <p className='text-2xl text-grayish font-semibold pb-10 text-gray-500 md:text-center lg:text-left'>
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over
          how you manage your favorite sites.
        </p>
        <Button className='hidden lg:inline-block px-10 hover:bg-blue-700 transition-all ease py-4 rounded-md bg-soft-blue text-white text-xl font-medium'>
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
