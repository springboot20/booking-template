import React from 'react';
import ExtensionCards from './ExtensionCards';
import { ChromeIcon, FirefoxIcon, OperaIcon } from '../image-exports/Images';

const Extensions = () => {
  const data = [
    {
      title: ' Add to Chrome',
      description: 'Minimum version 62',
      buttonLabel: 'Add & Install Extension',
      icon: `${ChromeIcon}`,
    },
    {
      title: 'Add to Firefox',
      description: 'Minimum version 55',
      buttonLabel: 'Add & Install Extension',
      icon: `${FirefoxIcon}`,
    },
    {
      title: 'Add to Opera',
      description: 'Minimum version 46',
      buttonLabel: 'Add & Install Extension',
      icon: `${OperaIcon}`,
    },
  ];

  return (
    <section className='relative top-28 lg:h-[calc(100vh-7rem)] px-8 sm:px-6 lg:px-8 mt-28 lg:mt-0'>
      <div className='grid grid-cols-1 mx-auto max-w-9xl place-items-center place-content-center lg:h-full gap-12'>
        <article className='max-w-2xl mx-auto'>
          <h1 className='text-center text-5xl mb-4 font-semibold text-gray-800'>Download the extension</h1>
          <p className='text-center text-xl font-semibold  text-gray-500'>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favorite you’d like us to
            prioritize.
          </p>
        </article>
        <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto extension-cards relative'>
          {data.map((data, i) => (
            <ExtensionCards key={i} data={data} />
          ))}
        </article>
      </div>
    </section>
  );
};

export default Extensions;
