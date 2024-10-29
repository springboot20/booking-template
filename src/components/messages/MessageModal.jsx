import React from 'react';

const MessageModal = ({ message, msgTitle, checkClass, isSubmitted }) => {
  return (
    <div className='fixed top-0 right-0 w-full min-h-screen bg-black/60 backdrop-blur-sm flex items-center justify-center'>
      <div
        className={`p-6 bg-white rounded-lg shadow-md flex items-center flex-col gap-8 w-[35rem] z-30 absolute h-auto ${
          isSubmitted ? 'open-modal' : ''
        }`}>
        <header className='flex items-center gap-10'>
          <div className={`checkmark-wrapper ${isSubmitted ? 'load-completed' : undefined}`}>
            <div className={`${checkClass}`} />
          </div>
          <h2 className='text-2xl font-semibold text-gray-800'>{msgTitle}</h2>
        </header>
        <p className='text-xl font-semibold text-gray-800'>{message}</p>
      </div>
    </div>
  );
};

export default MessageModal;
