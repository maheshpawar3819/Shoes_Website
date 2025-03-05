import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-4/5 m-auto">
      <hr />
      <div className="flex justify-between pt-5">
        <div>
          <h1 className="pb-5 text-lg">Whats in store</h1>
          <ul>
            <li className="cursor-pointer hover:text-orange-700 py-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                New Arrivals
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-700 py-2">
              <NavLink
                to={"/mens"}
                className={({ isActive }) =>
                  isActive ? "text-orange-700 " : ""
                }
              >
                Mens
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-700 py-2">
              <NavLink
                to={"/womens"}
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                Womens
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-orange-700 py-2">
              <NavLink
                to={"/kids"}
                className={({ isActive }) =>
                  isActive ? "text-orange-700" : ""
                }
              >
                Kids
              </NavLink>
            </li>
          </ul>

          <h1 className="text-black font-bold">© 2024 Campus Shoes.</h1>
        </div>
        <div>
          <h1 className="pb-5 text-lg">Company Info & Policies</h1>
          <ul>
            <li className="py-2">Blogs</li>
            <li className="py-2">Corporate</li>
            <li className="py-2">Terms & Conditions</li>
            <li className="py-2">Privacy & Cookies Policy</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-5 text-lg">Get In Touch</h1>
          <ul>
            <li className="py-2 font-bold">Inquairy : 8782492648</li>
            <li className="py-2 font-bold">Email: campusshoes@gmail.com</li>
          </ul>
        </div>
        <div>
          <h1 className="pb-5 text-lg">Newsletter</h1>
          <p className="py-2 cursor-pointer hover:text-blue-400">Twitter</p>
          <p className="py-2 cursor-pointer hover:text-blue-700">Facebook</p>
          <p className="py-2 cursor-pointer hover:text-pink-700">Instagram</p>
          <p className="py-2 cursor-pointer hover:text-red-600">Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
