import React from "react";
import Button from "../components/Button";
import IncDec from "../components/ButtonIncDec";
import StarIcon from "../icons/StarIcon";
import Footer from "../layouts/Footer";
import NavbarLogin from "../layouts/NavbarLogin";


export default function DetailProduct(){
    return(
      <>
        {/* section navbar */}
        <NavbarLogin />

        <div className="font-poppins container mx-auto px-5 mb-12 lg:mb-20">
          {/* section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <img src="https://files.fm/thumb_show.php?i=5k8bekcbm"></img>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-extrabold text-xl lg:text-2xl lg:mt-28">ACER  Aspire Vero AV15-51-547X [15.6FHD/i5-1155G7/8GB/512GB/W11+OHS]</h3>
              <div className="my-6"><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
              <p className="mb-6">Rp 5.499.000</p>
              <div className="inline-block">
                <IncDec>-</IncDec>
              </div>
              <span className="inline-block px-6"> 0 </span>
              <div className="inline-block">
                <IncDec>+</IncDec>
              </div>
              <div className="mt-6 capitalize mb-12">
                <Button def="def" type="detailCheckout">checkout</Button>
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div>
            <h3 className="text-base lg:text-xl font-semibold">ACER Aspire Vero AV15-51-547X [15.6FHD/i5-1155G7/8GB/512GB/W11+OHS]</h3><br></br>
            <p>SKU NX.AYCSN.002<br></br>
              Highlights:<br></br>
              • Eco-Designed, Full PCR Integration in Chassis with 30% PCR plastic, gentle texture, and unique color accent (yellow pigment).<br></br>
              • Smart energy-saving with VeroSense (Performance, Balanced, Eco, and Eco+)<br></br>
              • High performance with latest Intel Core processor and featuring Acer PurifiedVoice technology (AI-Enhanced Noise Suppresion)<br></br>
              • Comes in 100% Recycleable Packaging and Speak-Out Sticker (Earth Campaign theme).\nAspire Vero (AV15-51)<br></br>
              • Processor : Intel® Core™ i5-1155G7 processor<br></br>
              • OS : Windows 11 Home\n• Memory : 8GB DDR4 Memory (upgradeable up to 24 GB)<br></br>
              • Storage : 512GB SSD NVMe<br></br>
              • Inch, Res, Ratio, Panel : 15.6 FHD (1920 x 1080), IPS, Acer ComfyView™ LED-backlit TFT LCD, 16:9 aspect ratio.<br></br>
              • Graphics : Intel® Iris Xe Graphics<br></br>
              • Features : Acer Bluelight Shield Technology<br></br>
              • Stamp : Office Home Student 2021<br></br>
              • Accessories : Acer Backpack, Exclusive Green Bundle</p>
          </div>
        </div>

        {/* section footer */}
        <Footer />
      </>
    )
}