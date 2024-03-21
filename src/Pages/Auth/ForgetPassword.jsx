import React from 'react'
import { useFormik } from "formik";
import { resetPassword } from '../../API/Auth';
function ForgetPassword() {
    const onSubmit = async(credentials)=>{
        try{
        let res =  await resetPassword(values.email)
        console.log(res, "Password reset email sent successfully")
        }
        catch(err){
          console.log("Error occur");
        }
      }
    const { values, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{
            email: "",
        },
        onSubmit,
    })
  return (
    <div className="container-fluid hero login">
      <div className=" mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold  fs-2 fText">Member Login</h2>
          <p className="mb-5 fw-semibold">
            Receive anonymous compliments from your friends and send
            anonymous messages to your friends for free.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 inputBody  ps-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faUser} size="2xl" color="#C33764" />
            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
            />
          </div>
          <button type="submit" className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3" disabled={isSubmitting} style={{opacity: isSubmitting ? 0.6: ""}}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgetPassword