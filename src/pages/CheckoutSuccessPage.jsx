import React, { useState } from "react";
import NavbarLogin from "../layouts/NavbarLogin";
import Footer from "../layouts/Footer";
import Checkout from "../images/Checkout.png";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <>
      <div>
        <NavbarLogin />
        <div className="container h-screen mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            {/* kiri */}
            <div className="hidden lg:block lg:col-span-3 my-16 mx-auto">
              <img src={Checkout} alt="CheckoutSuccess"></img>
            </div>

            {/* kanan */}
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-16 md:text-center">
              <div className="mt-20">
                <p className="text-3xl">
                  Thanks for order!
                  <br />
                  Woohoo your payment sucessfully and your order is complete.
                </p>
                <br />
                <Link to="/" className="text-md underline">
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
