import React, { useState } from "react";
import Button from "../components/Button";
import FbIcon from "../icons/FbIcon"
import IgIcon from "../icons/IgIcon";
import TwitterIcon from "../icons/TwitterIcon";
import logoContact from "../images/logoContact.png"
import validation from "../components/validation";
import NavbarNoLogin from "../layouts/NavbarNoLogin"
import Footer from "../layouts/Footer";
export default function ContactPage(){
    const [values, setValues] = useState({
        name: "",
        message: "",
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
      
return(
<div>
    <NavbarNoLogin/>
    <div className="container lg:ml-52 px-5 mt-20 my-auto">
        <div className="ml-3 mb-10 lg:w-3/4 bg-B5C5F2 p-8 border border-gray-300 shadow-2xl rounded-2xl lg:ml-5">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <form className="ml-8 lg:p-6 flex flex-col justify-center mr-10 ">
                            <div className="flex flex-col mb-4">
                                <label for="name" className="label text-sm font-bold text-gray-700 block">Full
                                    Name</label>
                                <input type="name" name="name" id="name"
                                value={values.name} onChange={handleChange} placeholder="Enter Your Name"
                                    class="w-100 mt-2 py-2 px-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none"/>
                                    <div className="text-xs text-red-600">
                                    {errors.email && <p className="error">{errors.name}</p>}
                            </div>
                            </div>

                            <div class="relative mb-4">
                                <label for="message"
                                    className="label text-sm font-bold text-gray-700 block">Message</label>
                                <textarea id="message" name="message" value={values.message} onChange={handleChange} placeholder="Write a message..."
                                    class="w-full bg-white rounded-lg rounded border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-56 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    <div className="text-xs text-red-600">
                                    {errors.message && <p className="error">{errors.message}</p>}
                            </div>
                            </div>
                            <div className="mt-2 mb-6">
                                <Button def="default" type="loginSignUpSend" onClick={handleFormSubmit}>Submit</Button>
                            </div>
                        </form>
                        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                            <h1
                                className="text-4xl sm:text-xl text-gray-800 dark:text-white font-semibold tracking-tight">
                                Gadget Online Shop
                            </h1>
                            <div className=" hidden lg:block ml-10 mt-10 w-7/12">
                                <img className=" lg:max-w-xl mr-16 mt-10 flex" src={logoContact} alt="Photo" />
                            </div>
                            <div className="text-md tracking-wide font-semibold w-40">
                                <p>Find us</p>
                            </div>
                            <div className="flex items-center mt-4 text-black-600 dark:text-gray-400">
                                    <IgIcon/>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    @gos.official
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-black-600 dark:text-gray-400">
                                   <FbIcon/> 
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    g-os official
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-black-600 dark:text-gray-400">
                                <TwitterIcon/>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    @gos.official
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div/>
</div>
<Footer/>
</div>
    );
    }