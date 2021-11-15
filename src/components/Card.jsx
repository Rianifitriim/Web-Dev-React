import { useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon"
import Pagination from "./Pagination";
import Button from "./Button"
import { Link } from 'react-router-dom';
import { SearchHome } from "./Search";

export default function Card(){
  const [product, setProduct] = useState ([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [filter, setFilter] = useState(product)
  const [search, setSearch] = useState('')

  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:3000/products")
      if(componentMounted) {
        setProduct(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts()
  },[])
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filter.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const filterProduct = (cat) => {
    const updatedList = product.filter((x)=>x.category === String(cat))
    setFilter(updatedList)
  }

  const Loading = () => {
    return (
      <p className="font-poppins font-bold container mx-auto px-5 my-5 text-sm lg:text-base text-center">Loading...</p>
      )
    }
    
  const ShowProducts = () => {
    return (
    <div className="font-poppins container mx-auto px-5 text-sm lg:text-base">
      <div className="flex lg:justify-center gap-4 overflow-x-auto">
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => setFilter(product)}>All</button>
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => filterProduct("PC")}>PC</button>
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => filterProduct("laptop")}>Laptop</button>
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => filterProduct("handphone")}>Handphone</button>  
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => filterProduct("tablet")}>Tablet</button>  
        <button className='font-md border-b-2 hover:border-3F70F9' onClick = {() => filterProduct("accessories")}>Accessories</button>
        <select
          id="show"
          className="form-select cursor-pointer"
          aria-label="Default select example"
        >
        <option value="" className="text-sm" selected>Sort by</option>
        <option value="name" className="text-sm">Name</option>
        <option value="rating" className="text-sm">Rating</option>
        </select>
        <SearchHome onChange = {(e) => setSearch(e.target.value)} value={search}/>
        {/* <Button def="def" type="navLogin">Submit</Button>  */}
      </div>
      <div className="w-full">
      <section className="max-w-5x mx-5 lg:mx-12 my-8 transition-shadow">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
          {
            currentPosts ?.filter(product => {
              if (search === "") {
                return product
              } else if (product.name.toLowerCase().includes(search.toLowerCase())){
                return product
              }
            }).map((product, key) => {
              return (
                <div className="w-full white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center transition duration-500 ease-in-out hover:shadow-gray-800 transform hover:-translate-y-1 hover:scale-110" key={product.id}>
                  <div>
                    <img className="object-scale-down h-auto max-h-32 w-full" src={product.image_url} alt="gambar"/>
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
        </div>
      </section>

      <div className="container mx-auto flex justify-center px-5 lg:px-0">
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filter.length}
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