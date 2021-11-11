import react, { useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon"
import Button from "../components/Button"

export default function Card(){
  const [product, setProduct] = useState ([])

  useEffect(() => {
    fetch(" http://localhost:3000/products")
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
  },[product])

  return(
    <>
      <div className="w-full">
        <section className="max-w-5x mx-10 lg:mx-20 my-12 transition-shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-8">
            {
              product ?.map(product => {
                return (
                  <div className="w-full white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center transition duration-500 ease-in-out hover:shadow-gray-800 transform hover:-translate-y-1 hover:scale-110">
                    <div>
                      <img className="object-center object-scale-down h-auto max-h-32 w-full" src={product.image_url} alt="photo"/>
                    </div>
                    <div className="py-4 sm:py-6 px-3">
                      <p className="text-left md:text-center text-sm sm:text-base text-gray font-semibold mb-2 sm:h-12 max-h-16 line-clamp-2 flex items-center">{product.name}</p>
                      <p className="text-left hidden sm:block text-xs sm:text-base font-normal">Stock: {product.stock}</p>
                      <p className="text-left text-xs sm:text-base font-normal "><StarIcon/>{product.rating}</p>
                      <p className="text-left text-xs sm:text-base font-normal">Rp {product.price}</p>
                      <div className="mt-2 sm:my-2 text-xs sm:text-base">
                        <Button type="cardBuy" def="default">Buy</Button>
                      </div>
                    </div>
                  </div> 
                )
              })
            }
            {/* map */}
                
          </div>
        </section>
      </div>
    </>
  )
}