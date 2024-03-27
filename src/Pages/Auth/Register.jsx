import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { validateUser } from "../../schemas";
import { register } from "../../API/Auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
function Register() {
  const db = getFirestore()
  const navigate = useNavigate()
    const onSubmit = async (values)=>{
        try{
          const response = await register(values.email, values.password)
          var ref = doc(db, "UserAuthList", response.user.uid)
          await setDoc(ref, {
            id: response.user.uid,
            username: values.username,
            email: values.email,
          })
          toast.success("registrationo suceefull",{
            onClose:()=> navigate("/login")
          })
        }
        catch(error){
          toast.error(error.message);
        }
    }
  const {values, handleBlur, errors, isSubmitting, touched, handleChange, handleSubmit,} = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validateUser,
    onSubmit,
  });
  
  return (
    <div className="container-fluid hero login shadow rounded">
      <div className=" mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold  fs-2 fText mb-5">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="i.e kelvin"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">Username</label>
            {errors.username && touched.username ? 
              <small className="fw-semibold text-danger">
                {errors.username}
              </small>
            :
              ""
            }
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">Email address</label>
            {errors.email && touched.email ? 
              <small className="fw-semibold text-danger">{errors.email}</small>
            : 
              ""
            }
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingPassword">Password</label>
            {errors.password && touched.password ? 
              <small className="fw-semibold text-danger">
                {errors.password}
              </small>
             : 
              ""
            }
          </div>
          <button
            type="submit"
            className="formBtn hero text-white px-5 py-1 rounded-pill w-100 my-3"
            disabled={isSubmitting}
            style={{opacity: isSubmitting ? "0.6": ""}}
          >
            Register
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
