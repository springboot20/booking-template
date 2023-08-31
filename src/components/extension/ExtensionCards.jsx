import React from 'react';
import Button from '../buttons/Button';
import { BgDot } from '../image-exports/Images';

const ExtensionCards = ({ data }) => {
  return (
    <div className='card relative px-11 py-12 rounded-3xl bg-white flex flex-col items-center justify-between h-[42rem] lg:w-[29rem]'>
      <img src={data.icon} alt='' />
      <div className='text-center'>
        <h2 className='text-gray-800 text-3xl font-semibold'>{data.title}</h2>
        <p className='text-gray-500 text-2xl font-normal'>{data.description}</p>
      </div>
      <div className='w-full'>
        <img src={BgDot} alt='' className='mb-3 block w-full' />
        <Button className='w-full block text-center text-2xl hover:bg-transparent hover:border-2 hover:border-soft-blue  bg-soft-blue hover:bg-blue-7z00 transition-all ease text-white font-semibold py-4 inset-0 outline-none hover:text-soft-blue px-5 rounded-md'>
          {data.buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default ExtensionCards;
