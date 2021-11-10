import React from "react";
import jumbotron from "../images/jumbotron.png"
import Footer from "../layouts/Footer";
import NavbarHomeLogin from "../layouts/NavbarHomeLogin"

export default function Homepage() {
  return (
    <>
      <div className="bg-gradient-to-r from-3F70F9 via-4C79F9 to-69BAEC font-poppins mb-32">
        <NavbarHomeLogin />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="span-col-12 lg:col-span-3 my-8 lg:my-36">
              <h1 className="font-extrabold text-4xl lg:text-6xl text-white">Gadget Online Shop</h1>
              <p className="text-2xl lg:text-3xl font-thin text-white my-4">Find your favorite gadget in our online shop</p>
              <a href="#" className="text-white text-base lg:text-xl underline"><span>Find here
              <svg className="ml-2 w-5 h-5 inline-block underline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></span>
              </a>
            </div>
            <div className="hidden lg:block lg:col-span-2 my-8 mx-auto">
              <img src={jumbotron} alt="homepic" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
