import React from "react";

export function Search(){
  return (
    <>
      <div class="relative flex flex-row-reverse w-full flex-wrap items-stretch mb-3 shadow-3xl">
      <input
      type="text"
      placeholder="Search"
      className="py-1 placeholder-gray-900 text-gray-900 relative bg-white text-base outline-none focus:outline-none focus:ring w-full lg:w-52 pl-5 filter drop-shadow-3xl rounded-full"/>
      <span
      className="z-10 h-full leading-normal font-normal absolute text-center text-gray-400 bg-transparent rounded text-lg items-center justify-center w-8 py-1"> 
        <svg className="w-6 h-6" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
      </span>
    </div>
    </>
  )
}

export function SearchHome(){
  return (
    <>
      <div class="relative flex flex-row-reverse w-full flex-wrap items-stretch mb-3 shadow-3xl">
      <input
      type="text"
      placeholder="Search"
      className="py-1 placeholder-white text-white relative bg-B5C5F2 text-base outline-none focus:outline-none focus:ring w-full md:w-52 pl-5 filter drop-shadow-3xl rounded-full"/>
      <span
      className="z-10 h-full leading-normal font-normal absolute text-center text-white bg-transparent rounded text-lg items-center justify-center w-8 py-1"> 
        <svg className="w-6 h-6" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
      </span>
    </div>
    </>
  )
}