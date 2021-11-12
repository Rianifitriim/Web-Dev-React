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
  <div className="container">
    <div className=" h-full bg-gradient-to-r from-3F70F9 via-4C79F9 to-69BAEC font-poppins">
      <NavbarHome/>
      <div className="flex items-stretch justify-item-center px-54 py-24 bg-gradient-to-r from-primary-100 to-gray-50">
          <div className="hidden lg:block ml-16 mr-20 mt-16">
          <div className="text-white max-w-md w-full ml-80 text-2xl font-bold">Hi,Welcome Back!</div>
          <img className="lg:max-w-4xl mx-auto  mt-4 flex" src={ilustrasilogin} alt="Photo"/>
          </div>
        <div className="min-h-screen flex flex-col">
        <div className="ml-72 text-white lg:text-white max-w-md w-full lg:ml-80 mt-16 mb-24 text-2xl font-bold">Login</div>
            <div className="ml-24 lg:w-full  bg-B5C5F2 p-8 border border-gray-300 shadow-2xl rounded-2xl">
            <form className="space-y-6 w-96 mx-auto">
                
                    <div className="name">
                    <label className="label text-sm font-bold text-gray-700 block">Name</label>
                    <input 
                    type="name" 
                    name="name" 
                    className="input w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Your name" 
                    >
                    </input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="email">
                    <label className="label text-sm font-bold text-gray-700 block">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    className="input w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Your email address" 
                    >
                    </input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label className="label text-sm font-bold text-gray-700 block">Password</label>
                    <input
                    type="password" 
                    name="password"
                    className=" input w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Your password">
                    </input>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div class="mb-4">
              <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm" for="checkbox_id">
                  Remember Me
                </label>
            </div>
                <div className="mt-2">
                <Button def="default" type="loginSignUpSend" onClick={handleFormSubmit} >Submit</Button>
                </div>
                <div className="text-center my-3">
                <a
              className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
              href=""
                  >
              Forgot your Password?
                </a>
            </div>
            
            <div className="text-center">
                <p
                  className="inline-block text-sm text-black-500 align-baseline"
                  >
                  No have an account? 
                  </p>
                  
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href=""
                  >
                   Register
                  </a>
              </div>
            
            </form>
            </div>
        </div>
        </div>
        </div>
     
  </div>
       );
      }