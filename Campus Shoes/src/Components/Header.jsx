import React from "react";
import { cart, logo } from "./Utils/icons";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";
const Header = () => {
  const cartData = useSelector((store) => store.cart.addcart);
  return (
    <div className="fixed w-full top-0 bg-white z-10">
      <div className="flex justify-between border-b-2 p-2 px-2 ">
        <div className="p-2">
          <Search />
        </div>
        <div className="">
          <img src={logo} alt="logo image" className="w-52" />
        </div>

        <div className="p-1 flex">
          <div className="self-center p-1 ml-5 hover:text-orange-700 cursor-pointer">
            <Link to="/cart" className="flex">
              {cart}
              <p className="text-red-500 font-bold font-mono">
                {cartData.length}
              </p>
            </Link>
          </div>
          <button className="bg-slate-500 ml-4 p-1 rounded-md px-3 tracking-wider text-white drop-shadow-xl hover:bg-slate-800 ">
            <Link to={"/login"}>Login</Link>
          </button>
          <button className="bg-slate-500 ml-5 p-1 rounded-md px-3 tracking-wider text-white drop-shadow-xl hover:bg-slate-800 ">
            <Link to={"/Signin"}>Sign in</Link>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <ul className="flex justify-evenly tracking-widest text-gray-700 text-xl  pt-3">
          <li className="cursor-pointer hover:text-orange-700">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              New Arrivals
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <NavLink
              to={"/mens"}
              className={({ isActive }) => (isActive ? "text-orange-700 " : "")}
            >
              Mens
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <NavLink
              to={"/womens"}
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              Womens
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <NavLink
              to={"/kids"}
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              Kids
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-orange-700">
            <NavLink
              to={"/sandals"}
              className={({ isActive }) => (isActive ? "text-orange-700" : "")}
            >
              Sandals
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
