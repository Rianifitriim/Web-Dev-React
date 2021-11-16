import React from "react";
import NavbarLogin from "../layouts/NavbarLogin";
import Footer from "../layouts/Footer";
import checkout from "../images/checkout.gif";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <>
      <div>
        <NavbarLogin />
        <div className="container h-screen mx-auto px-5 font-poppins">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            {/* kiri */}
            <div className="block lg:col-span-3 mx-auto md:w-3/5 lg:w-full ">
              <img src={checkout} alt="CheckoutSuccess"></img>
            </div>

            {/* kanan */}
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-48 md:text-center md:-my-2 sm:-my-16">
              <div>
                <p className="text-2xl lg:text-3xl">
                  Thanks for order!
                  <br />
                  Woohoo your payment sucessfully and your order is complete.
                </p>
                <br />
                <Link to="/" className="text-sm md:text-xl underline">
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
