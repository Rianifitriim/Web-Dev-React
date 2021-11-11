import React, { useState } from "react";
import validation from "../components/validation";
import Button from "../components/Button";

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
    // file layout signup
    event.preventDefault();
    setErrors(validation(values));
  };
  return (
    <div className="container">
      {/* nama */}
      <form action="" className="space-y-6">
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 black">
            Nama
          </label>
          <input
            type="text"
            className="w-full p2 border border-gray 300 rounded mt-1"
            name="nama"
            value={values.nama}
            onChange={handleChange}
          />
          {errors.nama && <p className="error">{errors.nama}</p>}
        </div>
      </form>

      {/* gender */}
      <div className="mt-4">
        <label className="text-sm font-bold text-gray-600 black">
          Jenis Kelamin
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="Pria"
              onChange={handleChange}
            />
            <label className="ml-2">Pria</label>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="Wanita"
              onChange={handleChange}
            />
            <label className="ml-2">Wanita</label>
          </label>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>
      </div>

      {/* email */}
      <form action="" className="space-y-6">
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 black">
            Email
          </label>
          <input
            type="text"
            className="w-full p2 border border-gray 300 rounded mt-1"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </form>

      {/* password */}
      <form action="" className="space-y-6">
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 black">
            Password
          </label>
          <input
            type="text"
            className="w-full p2 border border-gray 300 rounded mt-1"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
      </form>

      {/* konfirm password */}
      <form action="" className="space-y-6">
        <div>
          <label htmlFor="" className="text-sm font-bold text-gray-600 black">
            Konfirmasi Password
          </label>
          <input
            type="password"
            className="w-full p2 border border-gray 300 rounded mt-1"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
      </form>
      {/* <button
        className="submit bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleFormSubmit}
      >
        Submit
      </button> */}
      <div>
        <Button def="default" type="loginSignUpSend" onClick={handleFormSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}
