import Link from 'next/link';
import { useState } from 'react';
import Pages from '../../constant/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "../../images/palazzioLogo.png";
import Image from 'next/image';
import salonDb from "../../constant/db";

function Header({ homePage }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    sidebarOpen === true ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  return (
    <div className="h-full w-full bg-gradient-to-r from-zinc-900 to-zinc-800">
      <nav
        className={` w-full mx-auto px-4 md:w-10/12 lg:w-8/12 right-0 left-0 z-10  ${
          homePage && 'absolute'
        }`}
      >
        <div className="flex justify-between items-center mx-auto py-5 screen-width z-10 text-white ">
          <div className='flex justify-start items-center gap-2'>
            <div className='h-20 w-20'>
            <Image src={Logo} className="h-5"></Image>
            </div>
            <h2
              className={`text-lg  md:text-xl uppercase font-bold ${
                homePage ? 'color-primary' : 'color-primary'
              }`}
              style={{ textShadow: '1px 2px 4px ' }}
            >
              <a href="#">{salonDb.salonName}</a>
            </h2>
          </div>
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {Pages.map((page) => (
              <Link key={page.label} href={page.url} className="">
                <a className="text-sm lg:text-lg hover:text-amber-400 hover:font-bold hover:border-b-2 hover:border-b-amber-400">
                  {page.label}
                </a>
              </Link>
            ))}
          </div>
          {/* <div className="hidden lg:block">
            <a
              href="https://booking.salonready.io/48ff5710-76f0-4a93-8fc1-95974f395055"
              target="_blank"
            >
              <button className="rounded-lg py-2 lg:py-2.5 px-4 lg:px-6 bg-gradient-to-tr from-amber-600 to-amber-400 text-lg text-white hover:bg-amber-600">
                Book Appointment
              </button>
            </a>
          </div> */}
          {/* Hamburger Button */}
          <button
            className={`z-50 lg:hidden focus:outline-none ${
              homePage ? 'color-primary' : 'color-primary'
            }`}
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <AiOutlineClose className="text-2xl text-white" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-30 flex-col items-center self-end w-full h-full m-h-screen 
        px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 
        opacity-95 bg-zinc-900 lg:hidden ${
          sidebarOpen
            ? 'fixed  translate-y-0 flex transition-all ease-in duration-300'
            : 'hidden'
        }`}
        >
          {/* <btn className='absolute top-5 right-5' onClick={toggleSidebar}>
              <FaWindowClose className="text-xl text-white" />
        </btn> */}
          {Pages.map((page) => (
            <div className="w-full py-3 text-center">
              <Link key={page.label} href={page.url}>
                <a className="block hover:text-lg hover:font-bold">{page.label}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Header;
