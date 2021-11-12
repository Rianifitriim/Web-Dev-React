import React from "react";
import Button from "../components/Button";
import IncDec from "../components/ButtonIncDec";
import StarIcon from "../icons/StarIcon";
import Footer from "../layouts/Footer";
import NavbarLogin from "../layouts/NavbarLogin";


export default function Cart(){
    return(
      <>
        {/* section navbar */}
        <NavbarLogin />

        <div className="font-poppins container mx-auto px-5 mb-12 lg:mb-20">
          {/* section 1 */}
          <h1 className="font-extrabold text-2xl md:text-4xl lg:mt-12">My Carts</h1>

          {/* map disini */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1">
              <img className="h-40 lg:h-72 mx-auto" src="https://files.fm/thumb_show.php?i=5k8bekcbm"></img>
            </div>
            <div className="col-span-3 md:ml-12">
              <h3 className="font-bold text-sm md:text-xl lg:mt-12">ACER  Aspire Vero AV15-51-547X [15.6FHD/i5-1155G7/8GB/512GB/W11+OHS]</h3>
              <div className="my-2"><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
              <p className="mb-2 text-sm md:text-base">Rp 5.499.000</p>
              <div className="inline-block">
                <IncDec>-</IncDec>
              </div>
              <span className="inline-block px-6"> 0 </span>
              <div className="inline-block w-8">
                <IncDec>+</IncDec>
              </div>
              <div className="my-3">
                <Button def="def" type="cartRemove">remove</Button>
              </div>
            </div>
          </div>
          <hr className="border-1 border-gray-300"></hr>
          {/* batas map */}
          {/* map disini */}
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1">
              <img className="h-40 lg:h-72 mx-auto" src="https://files.fm/thumb_show.php?i=5k8bekcbm"></img>
            </div>
            <div className="col-span-3 md:ml-12">
              <h3 className="font-bold text-sm md:text-xl lg:mt-12">ACER  Aspire Vero AV15-51-547X [15.6FHD/i5-1155G7/8GB/512GB/W11+OHS]</h3>
              <div className="my-2"><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
              <p className="mb-2 text-sm md:text-base">Rp 5.499.000</p>
              <div className="inline-block">
                <IncDec>-</IncDec>
              </div>
              <span className="inline-block px-6"> 0 </span>
              <div className="inline-block w-8">
                <IncDec>+</IncDec>
              </div>
              <div className="my-3">
                <Button def="def" type="cartRemove">remove</Button>
              </div>
            </div>
          </div>
          <hr className="border-1 border-gray-300"></hr>
          {/* batas map */}

          {/* section harga */}
          <div className="">
            <p className="flex flex-row-reverse mt-8 font-semibold text-base md:text-xl text-3F70F9">Total : Rp 5.499.000</p>
            <div className="flex flex-row-reverse mt-4 gap-3">
              <Button def="def" type="cartCheckout">checkout</Button>
              <Button def="def" type="cartRemove">remove all</Button>
            </div>
          </div>

        </div>

        {/* section footer */}
        <Footer />
      </>
    )
}