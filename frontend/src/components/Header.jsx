import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import { FaMoon } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { useAuth } from "../context/AuthProvider";

const Header = () => {

  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header className="flex items-center justify-between p-4 shadow-lg w-full dark:bg-slate-800 dark:text-white">
      <h1 className="md:text-2xl sm:text-lg cursor-pointer">Book Store</h1>
      <nav className="">
        <ul className=" gap-3 flex items-center sm:justify-between sm:gap-3 md:gap-10">
          <Link to="/">
            <li className="cursor-pointer transition-all hover:border-b-blue-600 hover:border-b-2">
              Home
            </li>
          </Link>
          <Link to="/courses">
            <li className="cursor-pointer transition-all hover:border-b-blue-600 hover:border-b-2">
              Courses
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:block cursor-pointer transition-all hover:border-b-blue-600 hover:border-b-2">
              About
            </li>
          </Link>
        </ul>
      </nav>
      <div className="flex items-center gap-7">
        <FaMoon
          className="cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <ImSun
          className="cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />

        {authUser ? (
          <Logout />
        ) : (
          <div className="">
            <a
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </a>
            <Login />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
