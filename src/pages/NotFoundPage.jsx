import React, {useEffect, useState} from "react";
import Navbar from "../layouts/NavbarNoLogin";
import NavbarLogin from "../layouts/NavbarLogin";
import Footer from "../layouts/Footer";
import notFound from "../images/notFound.gif";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <>
      <div>
        {user ? <NavbarLogin /> : <Navbar/>}
        <div className="container h-screen mx-auto font-poppins mb-4">
          <div className="flex flex-col">
            {/* atas */}
            <div className="block mx-auto">
              <img src={notFound} alt="not Found"></img>
            </div>
            {/* bawah */}
            <div className="-mt-8 text-center mx-8 lg:mx-auto ">
              <div>
                <p className="text-xl md:text-3xl">
                    Oops!<br />
                    We can’t seem to find the page you’re looking for.                  
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