//import React from 'react'
import {useState} from 'react'
import {close, logo1, menu, bhero, search} from '../assets';
import {navLinks} from '../constants'


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar">
        <img src={logo1} alt="Mecha" className="w-[186px] h-[54px] ml-10"/>
        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                
                className={`font-poppins font-normal cursor-pointer tracking-widest text-[20px] ${
                  active === nav.title ? "text-[#e05661] red-text-shadow" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-12" : "mr-36"}`}
                onClick={() => setActive(nav.title)}
              >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
            )

            )}
        </ul>

        <img src={search} alt="Search" className="w-[35-px] h-[35px] ml-10"/>
        
        //mobile

        <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-10"
          onClick={() => setToggle(!toggle)}
        />

            <div
            className={`${
                !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(nav.title)}
                >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
                ))}
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar