import React from "react";
import { Link } from "react-router-dom";
import hunterLogo from "../../assets/Images/HunterLogo.png";
function LoginField() {
  return (
    <div>
      <div className="flex">
        <img src={hunterLogo} alt="logo" />
        <div className="self-center text-3xl font-bold mx-2  tracking-[.6em] text-emerald-700">
          Hunter
        </div>
      </div>
      <div className="text-center text-xl m-2 font-bold ">
        {" "}
        We are the Hunter Team
      </div>

      <div className="text-center">Please login to your account</div>
      <div>
        <input
          className=" bg-gray-50 rounded-lg border-2  m-2 w-80 p-3 font"
          placeholder="Email Address"
        />
      </div>
      <div>
        <input
          className="  bg-gray-50 rounded-lg border-2  m-2 w-80  p-3 font"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="flex  justify-center m-2 ">
        <Link to="/pool">
          <button className=" border-2 hover:bg-green-700/90 hover:text-white text-green-700 w-80 p-2 rounded-xl">
            Login
          </button>
        </Link>
      </div>
      <div className=" hover:text-blue-500 cursor-pointer text-center">
        {" "}
        Forgot Password?
      </div>
    </div>
  );
}

export default LoginField;
