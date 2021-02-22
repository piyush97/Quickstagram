import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import phoneImg from "../images/iphone-with-profile.jpg";
import logo from "../images/logo.png";

const Login = () => {
  useEffect(() => {
    document.title = "Login - Quickstagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src={phoneImg} alt="iPhone  app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="Quickstagram" className="mt-2 w-6/12 mb-4" />
          </h1>

          <form method="POST">
            <input
              aria-label="Enter your email address"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Email address"
              required
            />
            <input
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              required
            />
            <button
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
