import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import Button from '../buttons/Button';
import SimpleBookmarking from './SimpleBookmarking';
import EasySharing from './EasySharing';
import SpeedySearching from './SpeedySearching';

const Features = () => {
  const [view, setView] = useState('simple-bookmark');

  return (
    <section className='mt-28 relative top-28 lg:h-[calc(100vh-7rem)] sm:px-6 lg:px-8 lg:mt-0'>
      <div className='grid grid-cols-1 mx-auto max-w-12xl place-items-center place-content-center lg:h-full gap-10'>
        <article className='max-w-2xl mx-auto'>
          <h1 className='text-center text-5xl mb-4 font-semibold text-gray-800'> Features</h1>
          <p className='text-center text-xl font-semibold text-gray-500 md:pb-14 lg:pb-0'>
            Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between
            your devices so you can access them on the go.
          </p>
        </article>
        <article className='max-w-12xl mx-auto overflow-hidden relative'>
          <div className='max-w-5xl mx-auto'>
            <div className='md:hidden'>
              <Disclosure as='nav' className={`flex flex-col items-center justify-center relative `}>
                <Button
                  className={`nav-btn relative px-10 py-5 h-full hover:text-soft-red divide-y-2 divide-gray-600 transition-all text-2xl font-semibold text-gray-60 text-center ${
                    view === 'simple-bookmark' ? 'features-item text-soft-red active' : 'text-gray-800'
                  }`}
                  onClick={() => setView('simple-bookmark')}>
                  Simple Sharing
                </Button>
                <Button
                  className={`nav-btn relative px-10 py-5 h-full hover:text-soft-red divide-y-2 divide-gray-600 transition-all text-2xl font-semibold text-gray-600 text-center ${
                    view === 'speedy-searching' ? 'features-item text-soft-red active' : 'text-gray-800'
                  }`}
                  onClick={() => setView('speedy-searching')}>
                  Speedy Searching
                </Button>
                <Button
                  className={`nav-btn relative px-10 py-5 h-full  hover:text-soft-red divide-y-2 divide-gray-600 transition-all text-2xl font-semibold text-gray-600 text-center ${
                    view === 'easy-sharing' ? 'features-item text-soft-red active' : 'text-gray-800'
                  }`}
                  onClick={() => setView('easy-sharing')}>
                  Easy Sharing
                </Button>
              </Disclosure>
            </div>
            <div className='hidden md:block'>
              <Disclosure
                as='nav'
                className={`features-navigation flex flex-row space-x-10 items-center justify-center relative transition-all ease-linear ease ${
                  view === 'simple-bookmark'
                    ? 'md:simple-bookmark'
                    : view === 'speedy-searching'
                    ? 'md:speedy-searching'
                    : 'md:easy-sharing'
                }`}>
                <Button
                  className={`relative px-10 py-5 h-full hover:text-soft-red transition-all text-2xl font-semibold text-gray-600 ${
                    view === 'simple-bookmark' ? 'features-item text-gray-800' : ''
                  }`}
                  onClick={() => setView('simple-bookmark')}>
                  Simple Sharing
                </Button>
                <Button
                  className={`relative px-10 py-5 h-full hover:text-soft-red transition-all text-2xl font-semibold text-gray-600 ${
                    view === 'speedy-searching' ? 'features-item text-gray-800' : ''
                  }`}
                  onClick={() => setView('speedy-searching')}>
                  Speedy Searching
                </Button>
                <Button
                  className={`relative px-10 py-5 h-full hover:text-soft-red transition-all text-2xl font-semibold text-gray-600 ${
                    view === 'easy-sharing' ? 'features-item text-gray-800' : ''
                  }`}
                  onClick={() => setView('easy-sharing')}>
                  Easy Sharing
                </Button>
              </Disclosure>
            </div>
          </div>
          <div className='mt-12 w-full'>
            {view === 'simple-bookmark' ? (
              <SimpleBookmarking
                className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-x-16 transition-al ease`}
              />
            ) : view === 'speedy-searching' ? (
              <SpeedySearching
                className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-x-16 transition-all ease`}
              />
            ) : (
              <EasySharing
                className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-x-16 transition-all ease`}
              />
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Features;
