import React, { useState, useContext, useEffect, useRef } from "react";
import { FaUser, FaAngleDown, FaGift, FaBox, FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import {Mycontext} from "../../../pages/Home/Context";
import { Link } from "react-router-dom";


import "./log.css";

const LoginDropdown = () => {
  const { isLogin } = useContext(Mycontext); 
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/*  Always show Login button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="login-btn flex items-center gap-2"
      >
        <FaUser /> {isLogin ? "My Account" : "Login"} <FaAngleDown />
      </button>

      {isOpen && (
        <div className="na absolute right-0 mt-2 w-56 bg-white border shadow-lg rounded-lg z-10">
          {!isLogin && (
            <div className="px-4 py-2 border-b flex justify-between text-sm">
              <span className="cust">New customer?</span>
              <Link to="/signIn" className="si text-blue-600 font-medium">
                Sign Up
              </Link>
            </div>
          )}

          <ul className="py-2">
            {isLogin ? (
              <>
                <li className="flex items-center px-4 py-4 hover:bg-gray-100 cursor-pointer">
                  <FaUser className="fac mr-2" /> My Profile
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaStar className="fac mr-2" /> Flipkart Plus Zone
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaBox className="fac mr-2" /> Orders
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaHeart className="fac mr-2" /> Wishlist
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FaGift className="fac mr-2" /> Rewards
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <HiOutlineShoppingCart className="fac mr-2" /> Gift Cards
                </li>
              </>
            ) : (
              <li className="px-4 py-2 text-center text-gray-600">
                Please log in to access these features.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
