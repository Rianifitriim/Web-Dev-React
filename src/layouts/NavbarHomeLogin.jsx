import React from "react";
import Logo from "../icons/Logo";
import {CartIconHome} from "../icons/CartIcon";
import {SearchHome} from "../components/Search";

export default function NavbarHome({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="font-poppins sticky top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between px-2 pt-2 pb-1 mb-3 bg-transparent">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start pb-1">
          <Logo/>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item active">
              <a
                className="px-3 py-3 flex items-center text-lg capitalize font-medium leading-snug text-white hover:opacity-75"
                href="#"
              >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-3 flex items-center text-lg capitalize font-medium leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-3 md:hidden items-center text-lg capitalize font-medium leading-snug text-white hover:opacity-75 grid grid-cols-12"
                href="#pablo"
              >
                <span className="ml-2 col-span-10">my carts</span>
                <span className="ml-2 text-white bg-3F70F9 rounded-full p-1 col-span-2 text-center">0</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75"
                href="#pablo"
              >
              <SearchHome />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 lg:flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hidden"
                href="#pablo"
              >
              <CartIconHome />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) 
}
