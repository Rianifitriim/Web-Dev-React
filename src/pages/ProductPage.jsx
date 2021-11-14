import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Navbar from "../layouts/NavbarNoLogin";
import Card from "../components/Card";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="font-poppins container mx-auto px-5 mb-12 lg:mb-12">
        {/* section 1 */}
        <h1 className="font-extrabold text-2xl md:text-5xl mt-12 text-center">Latest Products</h1>
      </div>
      <Card />
    </>
  )
}