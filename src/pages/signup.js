import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import logo from "../images/logo.png";

export default function SignUp() {
  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid =
    username === "" ||
    fullName === "" ||
    password === "" ||
    emailAddress === "";
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const createdUserResult = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailAddress, password);

      await createdUserResult.user.updateProfile({
        displayName: username,
      });

      await firebase.firestore().collection("users").add({
        userId: createdUserResult.user.uid,
        username: username.toLowerCase(),
        fullName,
        emailAddress: emailAddress.toLowerCase(),
        following: [],
        dateCreated: Date.now(),
      });
    } catch (error) {
      setFullName("");
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };
  useEffect(() => {
    document.title = "Sign Up - Quickstagram";
  }, []);
  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="Quickstagram" className="mt-2 w-6/12 mb-4" />
          </h1>

          <form onSubmit={handleSignUp} method="POST">
            <input
              aria-label="Enter your username"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target }) => setUsername(target.value.toLowerCase())}
            />
            <input
              aria-label="Enter your full name"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
            />
            <input
              aria-label="Enter your email address"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) =>
                setEmailAddress(target.value.toLowerCase())
              }
            />
            <input
              aria-label="Enter your password"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
