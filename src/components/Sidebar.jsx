import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';

import { logo, letter } from '../assets';
import { links } from '../assets/constants';
import { HiOutlineMenu } from 'react-icons/hi';

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row my-8 items-center justify-start font-medium 
        text-sm text-white hover:text-green-600"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className=" md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#121212]">
        <img src={letter} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenu ? (
          <RiCloseLine className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenu(false)} />
        ) : (
          <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={() => setMobileMenu(true)} />
        )}
      </div>

      <div
        className={`z-20 absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10
      to-[#1D1D1D] backdrop-blur-lg p-6 md:hidden smooth-transition ${mobileMenu ? 'left-0' : '-left-full'}`}
      >
        <img src={letter} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenu(false)} />
      </div>
    </>
  );
};

export default Sidebar;
