import React from "react";
import useForm from "./useForm";
import Button from "../components/Button"
const SignupForm = ({submitForm}) => {
    const {handleChange, handleFormSubmit, values, errors} = useForm(
        submitForm
        );

    
    return(
        <div className="container">
            <div className="app-wrapper">
            <form className="form-wrapper">
                <div className="email">
                    <label className="label" className="text-sm font-bold text-gray-700 block">Email</label>
                    <input 
                    className="input" 
                    type="email" 
                    name="email" 
                    className="w-full p-2 border border-gray-300 rounded mt-1 hover:border-blue-600"
                    value={values.email}
                    onChange={handleChange}>
                    </input>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                
            </form>
            </div>
        </div>

    );
}

export default SignupForm;