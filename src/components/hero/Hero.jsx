import React from 'react';
import Button from '../buttons/Button';
import { HeroIllustration } from '../image-exports/Images';

const Hero = () => {
  return (
    <section className='relative top-28 sm:px-6 px-3 lg:px-8 mt-20 lg:mt-0 lg:h-[calc(100vh-7rem)]'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-12xl mx-auto items-center place-content-center lg:h-full'>
        <article className='order-2 lg:order-1'>
          <h1 className='text-6xl font-bold leading-snug text-center lg:text-left'>
            A Simple Bookmark Manager
          </h1>
          <p className='text-gray-500 text-lg font-medium text-center lg:text-left py-8'>
            A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites
            load instantly. Try it for free.
          </p>
          <div className='space-x-2 sm:space-x-5 text-center lg:text-left'>
            <Button className='lg:inline-block px-8 py-3 rounded-md shadow-md bg-soft-blue hover:bg-transparent hover:ring-2 hover:ring-soft-blue hover:text-soft-blue transition-all ease text-white text-lg font-bold'>
              Get it on Chrome
            </Button>
            <Button className='lg:inline-block px-8 py-3 rounded-md bg-grayish-blue text-lg font-bold hover:bg-transparent hover:ring-2 hover:ring-grayish-blue shadow-md transition-all ease'>
              Get it on Firefox
            </Button>
          </div>
        </article>
        <article className='order-1 lg:order-2'>
          <img src={HeroIllustration} alt='' className='block w-full' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
