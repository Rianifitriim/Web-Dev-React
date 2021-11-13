import react, { useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon"
import Pagination from "./Pagination";
import Button from "./Button"
import { Link } from 'react-router-dom';

export default function Card(){
  const [product, setProduct] = useState ([])
  const [filter, setFilter] = useState(product)
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:3000/products")
      if(componentMounted) {
        setProduct(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts()
  },[])
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const filterProduct = (cat) => {
    const updatedList = product.filter((x)=>x.category === String(cat))
    setFilter(updatedList)
  }

  const Loading = () => {
    return (
        <h2>Loading...</h2>
    )
  }

  const ShowProducts = () => {
    return (
      <div className="font-poppins container mx-auto px-5 text-sm lg:text-base overflow-x-auto">
        <div className="flex lg:justify-center gap-4">
          <button className="font-semibold border-b-2 w-max text-center border-3F70F9" onClick = {() => setFilter(product)}>All</button>
          <button className="font-md" onClick = {() => filterProduct("PC")}>PC</button>
          <button className="font-md" onClick = {() => filterProduct("laptop")}>Laptop</button>
          <button className="font-md" onClick = {() => filterProduct("handphone")}>Handphone</button>  
          <button className="font-md" onClick = {() => filterProduct("tablet")}>Tablet</button>  
          <button className="font-md" onClick = {() => filterProduct("accessories")}>Accessories</button>
          <select
            id="show"
            className="form-select cursor-pointer"
            aria-label="Default select example"
          >
          <option value="" className="text-sm" selected>Sort by</option>
          <option value="name" className="text-sm">Name</option>
          <option value="rating" className="text-sm">Rating</option>
          </select>
          <Button def="def" type="navLogin">Submit</Button> 
        </div>
        <div className="w-full">
        <section className="max-w-5x mx-10 lg:mx-20 my-8 transition-shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
            {
              filter ?.map(product => {
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
  return(
    <div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  )
}