import React, { useState } from "react";
import validation from "../components/validation";
import Button from "../components/Button";
import NavbarHome from "../layouts/NavbarHome";
import SignUpIcon from "../icons/SignUpIcon";

export default function SignUp() {
  const [values, setValues] = useState({
    nama: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
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
  //   // Initialize a boolean state
  //   const [passwordShown, setPasswordShown] = useState(false);

  //   // Password toggle handler
  //   const togglePassword = () => {
  //     // When the handler is invoked
  //     // inverse the boolean state of passwordShown
  //     setPasswordShown(true);
  //   };
  return (
    <div>
      <div className="bg-gradient-to-r from-3F70F9 via-4C79F9 to-69BAEC font-poppins mb-12 lg:mb-20">
        <NavbarHome />
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            <div className="hidden lg:block lg:col-span-3 my-16 mx-auto">
              <h1 className="text-center text-white lg:mx-40 text-lg font-bold">
                Hi, welcome
              </h1>
              <SignUpIcon />
            </div>
            <div className="col-span-1 lg:col-span-3 my-8 lg:my-16">
              <h1 className="text-center text-white lg:mx-40 text-lg font-bold">
                Sign Up Now
              </h1>
              <div className="w-full mx-auto lg:w-8/12 mt-4 bg-B5C5F2 p-8 border border-gray-300 shadow-2xl rounded-2xl">
                {/* form */}
                <form className=" w-full mx-auto">
                  {/* nama */}
                  <div>
                    <label className="label text-sm font-bold text-gray-700 block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="nama"
                      className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                      value={values.nama}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                    ></input>
                    {errors.nama && <p className="error">{errors.nama}</p>}
                  </div>

                  {/* gender */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-gray-700 block">
                      Gender
                    </label>
                    <label className="inline-flex items-center label text-sm font-bold text-gray-700 block">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                      />
                      <label className="ml-2 text-xs">Male</label>
                    </label>
                    <label className="inline-flex items-center ml-4 label text-sm font-bold text-gray-700 block">
                      <input
                        type="radio"
                        className="form-radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                      />
                      <label className="ml-2 text-xs">Female</label>
                    </label>
                    {errors.gender && <p className="error">{errors.gender}</p>}
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
                    {errors.email && <p className="error">{errors.email}</p>}
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
                    {errors.password && (
                      <p className="error">{errors.password}</p>
                    )}
                  </div>

                  {/* confir password */}
                  <div className="mt-4">
                    <label className="label text-sm font-bold text-gray-700 block">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      placeholder="Enter Your Confirm Password"
                    ></input>
                    {errors.confirmPassword && (
                      <p className="error">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* submit */}
                  <div className="mt-8">
                    <Button
                      def="default"
                      type="loginSignUpSend"
                      onClick={handleFormSubmit}
                    >
                      Sign Up
                    </Button>
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
    </div>
  );
}
