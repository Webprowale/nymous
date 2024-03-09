import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { LoginAuth } from "../../API/Auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredential((prevCredential) => ({
      ...prevCredential,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await LoginAuth(credential.email, credential.password);
      console.log(res);
      toast.success("Login Successfully", {
        onClose: () => navigate("/user"),
      });
    } catch (err) {
      toast.error("User does not exist");
    }
  };

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
              placeholder="Enter Email to Login"
              value={credential.email}
              onChange={handleChange}
              id="email"
            />
          </div>

          <div className="mb-3 inputBody  ps-3 mx-auto">
            <span>
              <FontAwesomeIcon icon={faLock} size="2xl" color="#C33764" />
            </span>
            <input
              type="password"
              placeholder="Enter Password"
              value={credential.password}
              onChange={handleChange}
              id="password"
            />
          </div>
          <button className="formBtn hero text-white px-5 py-2 rounded-pill w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;