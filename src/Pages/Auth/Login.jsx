import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Login() {

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
        <form>
          <div className="mb-3 inputBody  ps-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faUser} size="2xl" color="#C33764" />
            </span>
            <input
              type="email"
              placeholder="Enter email"
              id="email"
            />
          </div>

          <div className="mb-1 inputBody  ps-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faLock} size="2xl" color="#C33764" />
            </span>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setDetails({ ...details, passowrd: e.target.value })
              }
              id="password"
            />
          </div>
          <Link className="text-primary  fs-6 fw-semibold ms-md-5 ms-3 ">
            Forgotten Password
          </Link>
          <button
            type="submit"
            className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3"
            
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
