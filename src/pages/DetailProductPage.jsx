import React, {useState, useEffect} from "react";
import Button from "../components/Button";
import IncDec from "../components/ButtonIncDec";
import StarIcon from "../icons/StarIcon";
import Footer from "../layouts/Footer";
import NavbarLogin from "../layouts/NavbarLogin";
import { useParams } from "react-router";


export default function DetailProduct(){

  const [product, setProduct] = useState ([])

  useEffect(() => {
    fetch(" http://localhost:3000/products")
    .then(response => response.json())
    .then(data => setProduct(data.find(product => product.id === Number(id))))
    .catch(err => console.log(err))
  },[product])

  let { id } = useParams();

  // const deskripsi = (product.desc).split("\n")

    return(
      <>
        {/* section navbar */}
        <NavbarLogin />

        <div className="font-poppins container mx-auto px-5 mb-12 lg:mb-20">
          {/* section 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="lg:col-span-1">
              <img className="lg:w-10/12 py-6" src={product.image_url}></img>
            </div>
            <div className="lg:col-span-1">
              <h3 className="font-extrabold text-xl lg:text-2xl lg:mt-28">{product.name}</h3>
              <div className="my-2 capitalize">stock : {product.stock}</div>
              <div className="my-2"><StarIcon/>{product.rating}</div>
              <p className="mb-6">Rp {new Intl.NumberFormat(['ban', 'id']).format(product.price)}</p>
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
            <h3 className="text-base lg:text-xl font-semibold">{product.name}</h3><br></br>
            <p className="whitespace-pre-line align-bottom">{product.desc}</p>
          </div>
        </div>

        {/* section footer */}
        <Footer />
      </>
    )
}