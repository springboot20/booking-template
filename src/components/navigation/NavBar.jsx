import React from 'react';

import { NavLink } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import Icon from '../buttons/Icon';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../buttons/Button';

const navigation = [
  { to: '/features', name: 'Features', current: true },
  { to: '/pricing', name: 'Pricing', current: true },
  { to: '/contact', name: 'Contact', current: true },
];

const socialLink = [
  {
    to: '',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        className='fill-soft-blue hover:fill-blue-600 transition-all ease'>
        <path
          fillRule='evenodd'
          d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z'
        />
      </svg>
    ),
  },
  {
    to: '',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='20'
        className='fill-soft-blue hover:fill-blue-600 transition-all ease'>
        <path
          fillRule='evenodd'
          d='M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z'
        />
      </svg>
    ),
  },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * 
 * @param {Boolean} param0 
 * @returns 
 */
const handleActive = ({ isActive }) => {
  return classNames(
    isActive ? 'text-soft-red' : 'text-gray-800',
    'block rounded-md px-3 py-2 text-lg font-medium flex-shrink-0 hover:text-soft-red transition-all hover:underline'
  );
};

const NavBar = () => {
  return (
    <Disclosure
      as='nav'
      className='shadow-sm fixed top-0 bg-white/30 left-0 z-20 right-0 backdrop-filter backdrop-blur-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto px-4 max-w-7xl mx-auto'>
            <div className='relative flex h-20 sm:h-24 items-center justify-between w-full'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <Icon icon={faClose} className={`block h-8 w-8`} />
                  ) : (
                    <Icon icon={faBars} className={`block h-8 w-8`} />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-center justify-center sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <svg width='148' height='25' xmlns='http://www.w3.org/2000/svg'>
                    <g fill='none' fillRule='evenodd'>
                      <path
                        d='M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z'
                        fill='#333'
                        fillRule='nonzero'
                      />
                      <g>
                        <circle fill='#5267DF' cx='12.5' cy='12.5' r='12.5' />
                        <path d='M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z' fill='#FFF' />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <div className='hidden sm:flex gap-5 flex-shrink-0 items-center'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={handleActive}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  to='/'
                  className='block bg-soft-red flex-shrink-0 transition-all ease hover:ring-2 hover:bg-transparent hover:ring-soft-red hover:text-soft-red py-2 px-8 text-lg font-semibold text-white rounded-md outline-none'>
                  Login
                </Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='gap-5 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                    'block rounded-md px-3 py-3 text-base font-medium mt-3 cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </NavLink>
              ))}
              <Button
                to='/'
                className='bg-soft-red py-2 transition-all ease hover:border-2 hover:bg-transparent hover:border-soft-red hover:text-soft-red px-3 text-xl font-medium w-full mt-10 text-center text-white rounded-md block'>
                Login
              </Button>
              <div className='py-5 space-x-6 text-center w-full'>
                {socialLink.map(({ to, icon }, index) => (
                  <Button key={index} className='inline-block' to={to}>
                    {icon}
                  </Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
