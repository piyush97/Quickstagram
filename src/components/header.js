import FirebaseContext from "context/firebase";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import logo from "../images/logo.png";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const user = { displayName: "karl" };
  return (
    <header className="h-16 bg-white border-b mb-8">
      <div className="container mx-auto max-width-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1>
              <Link to={ROUTES.DASHBOARD} aria-label="dashboard">
                <img src={logo} alt="Quickstagram" className="mt-2 w-3/12" />
              </Link>
            </h1>
          </div>
          <div className="text-gray text-center flex items-center align-items">
            {user ? (
              <>
                <Link to={ROUTES.DASHBOARD} arial-label="Home">
                  <p>Dashboard</p>
                </Link>

                <button
                  type="button"
                  title="SIgn Out"
                  onClick={() => firebase.auth().signOut()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      firebase.auth().signOut();
                    }
                  }}
                >
                  Sign Out
                </button>
                <div className="flex items-center cursor-pointer">
                  <Link to={`/p/${user.displayName}`}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      src={`../images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile `}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue font-bold text-sm rounded text-white w-20 h-8"
                  >
                    Log In
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="font-bold text-sm rounded text-blue w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
