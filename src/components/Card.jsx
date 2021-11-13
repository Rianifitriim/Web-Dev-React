import react, { useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon"
import Pagination from "./Pagination";
import Button from "./Button"
import { Link } from 'react-router-dom';

export default function Card(){
  const [product, setProduct] = useState ([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch(" http://localhost:3000/products")
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(err => console.log(err))
  },[product])
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    <div>
      <div className="w-full">
        <section className="max-w-5x mx-10 lg:mx-20 my-8 transition-shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {
              currentPosts ?.map(product => {
                return (
                  <div className="w-full white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center transition duration-500 ease-in-out hover:shadow-gray-800 transform hover:-translate-y-1 hover:scale-110">
                    <div>
                      <img className="object-scale-down h-auto max-h-32 w-full" src={product.image_url} alt="photo"/>
                    </div>
                    <div className="py-4 sm:py-6 px-3">
                      <p className="text-left md:text-center text-sm sm:text-base text-gray font-semibold mb-2 sm:h-12 max-h-16 line-clamp-2 flex items-center">{product.name}</p>
                      <p className="text-left hidden sm:block text-xs sm:text-base font-normal">Stock: {product.stock}</p>
                      <p className="text-left text-xs sm:text-base font-normal "><StarIcon/>{product.rating}</p>
                      <p className="text-left text-xs sm:text-base font-normal">Rp {
                      new Intl.NumberFormat(['ban', 'id']).format(product.price)}</p>
                      <Link className="mt-2 sm:my-2 text-xs sm:text-base" to={`/detailproduct/${product.id}`}>
                        <Button type="cardBuy" def="default">Detail</Button>
                      </Link>
                    </div>
                  </div> 
                )
              })
            }
            {/* map */}
                
          </div>
        </section>

        <div className="container mx-auto flex justify-center px-5">
          <Pagination
          postsPerPage={postsPerPage}
          totalPosts={product.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        </div>
      </div>
    </div>
  )
}