import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { CgMenuHotdog } from "react-icons/cg";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="w-full h-[100px] z-10 bg-zinc-50 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <div className="logo w-150 h-55">
            <img src={logo} alt="logo" />
          </div>
          <ul className="hidden md:flex justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Support</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className=" text-black  hover:text-darkseagreen py-2 px-4">
            Login
          </button>
          <button className="bg-seagreen hover:bg-darkseagreen border-seagreen text-black py-3 px-8 rounded-full">
            SignUp
          </button>
        </div>
        <div className="md:hidden text-seagreen" onClick={handleClick}>
          {!nav ? (
            <CgMenuHotdog className="w-20 h-10" />
          ) : (
            <GiKnifeFork className="w-20 h-10" />
          )}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute w-full   bg-zinc-50 px-8 "}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/about">About</Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/contact">Support</Link>
        </li>
        <li className="w-full">Cart</li>

        <div className="flex flex-col my-4">
          <button
            className=" border-2 border-seagreen rounded-full text-black bg-transparent hover:text-darkseagreen py-2 px-4 mb-4"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
          <button className="bg-seagreen  hover:bg-darkseagreen border-seagreen text-black py-3 px-8 rounded-full">
            SignUp
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
