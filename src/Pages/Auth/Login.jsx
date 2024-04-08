import React, { useState } from "react";
import { app } from "../../firabaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik/dist";
import { validateLogin } from "../../schemas";
import { toast } from "react-toastify";
import { login } from "../../API/Auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom/dist";

function Login() {
  const db = getFirestore(app)
  const navigate = useNavigate()
  const onSubmit = async(values)=>{
    try{
        const res = await login(values.email, values.password)
        console.log(res)
        const ref = doc(db, "UserAuthList", res.user.uid)
        const docSnap = await getDoc(ref)
        if(docSnap.exists()){
          sessionStorage.setItem("user-info",JSON.stringify({
            id: docSnap.data().id,
            username: docSnap.data().username,
          }))
        }
        toast.success("Logged In Successfully!",{
          onClose:()=> navigate("/user")
        })
    }
    catch(error){
    toast.error(error.message)
    }
  }
const { values, handleBlur, handleChange, handleSubmit, isSubmitting, touched, errors,} = useFormik({
initialValues:{
  email: "",
  password: ""
},
validationSchema: validateLogin,
onSubmit,
})
  return (
    <div className="container-fluid hero login">
      <div className=" mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold  fs-2 fText">Member Login</h2>
          <p className="mb-5 fw-semibold">
            Receive anonymous compliments from your friends and send anonymous
            messages to your friends for free.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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
          <Link className="text-primary  fs-6 fw-semibold ms-md-5 ms-3 ">
            Forgotten Password
          </Link>
          <button
            type="submit"
            className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3"
            disabled={isSubmitting}
            style={{opacity: isSubmitting ? "0.6": ""}}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
