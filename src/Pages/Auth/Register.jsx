import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import {  useFormik } from "formik";
import { validateUser } from "../../schemas";
import {  RegisterAuth } from "../../API/Auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
const navigate = useNavigate();
const [loading, setloading] = useState("Register");

  const onSubmit = async(values)=>{
    try{
     let res = await RegisterAuth(values.email, values.password);
     console.log(res);
      toast.success("Registration is succefully",{
        onClose: ()=> navigate('/user')
      });
    }
    catch(error){
      toast.error("unknow error occur");
    }
  }
  const {values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting} = useFormik({
    initialValues:{
      email: " ",
      password: " ",
    },
    validationSchema: validateUser,
    onSubmit,
  });
 
  return (
    <div className="container-fluid hero login">
      <div className=" mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold  fs-2 fText mb-5">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 inputBody px-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faUser} size="2xl" color="#C33764"/>
            </span>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Email Address"
              className="ms-1"
            />
            {errors.email && touched.email? <small className="text-danger">{errors.email}</small>: "" }
          </div>
          <div className="inputBody  ps-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faLock} size="2xl" color="#C33764" />
            </span>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <small className="text-danger">{errors.password}</small>: ""}
          </div>
          <button
          disabled={isSubmitting}
            type="submit"
            className="formBtn hero text-white px-5 py-2 rounded-pill w-100"
          >
            {loading}
          </button>
        </form>
        <p className="fw-bold text-center mt-2">
          <Link to="/login">Already Have an Account? Login</Link>
        </p>
        <p className="fw-semibold regText m-2">
          By using this service, you agree to our Privacy Policy, Terms of
          Service and any related policies. (Check Disclaimer)
        </p>
      </div>
    </div>
  );
}

export default Register;
