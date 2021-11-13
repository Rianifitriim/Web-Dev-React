import React, { useState } from "react";
import validation from "../components/validation";
import Button from "../components/Button";
import NavbarHome from "../layouts/NavbarHome";
import ilustrasilogin from "../images/ilustrasilogin.png"
export default function LoginPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
  };
  
  return (
   
      <div className=" h-full bg-gradient-to-r from-3F70F9 via-4C79F9 to-69BAEC font-poppins">
        <NavbarHome />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            <div className="hidden lg:block lg:col-span-3 my-16 ml-2">
              <h1 className="text-center text-white lg:mx-40 text-lg font-bold">
                Hi,Welcome Back!
              </h1>
              <img className="sm:hidden md:hidden lg:block max-w-4xl mx-auto  mt-4 flex" src={ilustrasilogin} alt="Photo"/>
            </div>
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-16">
              <h1 className="text-center text-white lg:mx-40 text-lg font-bold">
                Login
              </h1>
              <div className="w-full mx-auto lg:w-8/12 mt-20 bg-B5C5F2 p-8 border border-gray-300 shadow-2xl rounded-2xl">
                {/* form */}
                <form className=" w-full mx-auto">
                  {/* name */}
                  <div>
                    <label className="label text-sm font-bold text-gray-700 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                    ></input>
                    <div className="text-xs text-red-600	">
                      {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                  </div>

                  {/* email */}
                  <div className="mt-3">
                    <label className="label text-sm font-bold text-gray-700 block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email"
                    ></input>
                    <div className="text-xs text-red-600	">
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                  </div>

                  {/* password */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-gray-700 block">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Enter Your Password"
                    ></input>
                    {/* <button onClick={togglePassword}>Show Password</button> */}
                    <div className="text-xs text-red-600	">
                      {errors.password && (
                        <p className="error">{errors.password}</p>
                      )}
                    </div>
                  </div>
                  <div class="mb-4">
              <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" for="checkbox_id">
                  Remember Me
                </label>
            </div>
                  {/* submit */}
                  <div className="mt-8">
                    <Button
                      def="default"
                      type="loginSignUpSend"
                      onClick={handleFormSubmit}
                    >
                      Login
                    </Button>
                  </div>
                  <div className="text-center my-3">
                <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
              Forgot your Password?
                </a>
            </div>
                  <div className="text-center lg:flex lg:justify-center mt-4">
                    <p className="inline-block text-sm text-black-500">
                      already have an account?
                      <a
                        className="px-2 inline-block text-sm text-blue-500 hover:text-blue-800"
                        href="./login"
                      >
                        Log In
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}