import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const isOnline = useOnlineStatus();

  return (
    //className="header"
    <div className="flex justify-between bg-gradient-to-b bg-pink-100 px-8 py-8 mb-8 w-screen border-b border-pink-700 shadow-2xl">
      <div className="logo-container">
        <a href="#" style={{ textDecoration: "none" }}>
          <div className="logo text-3xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 text-customPink py-4 px-6 rounded-lg shadow-2xl">
            Food-Villa
          </div>
        </a>
      </div>
      <div className="nav-items flex flex-row gap-8 align-center">
        <ul className="flex gap-8 items-center font-semibold">
          <li>Online Status : {isOnline ? "✅" : "❌"}</li>
          <li className="transition duration-100 ease-in-out hover:text-blue-500">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li className="transition duration-100 ease-in-out hover:text-blue-500">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li className="transition duration-100 ease-in-out hover:text-blue-500">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li className="transition duration-100 ease-in-out hover:text-blue-500">
            <Link
              to="/grocery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Grocery
            </Link>
          </li>
          <li className="transition duration-100 ease-in-out hover:text-blue-500">
            Cart
          </li>
        </ul>
        <button
          className="btn-login font-semibold bg-white border-2 border-black h-[50%] self-center rounded-lg px-4"
          onClick={() => {
            btnLogin == "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}
        >
          {btnLogin}
        </button>
      </div>
    </div>
  );
};

export default Header;
