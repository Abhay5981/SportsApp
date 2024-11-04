import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header bg-cover bg-center py-2 text-white ">
      <div className="section max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="logo">
          <h3 className="text-2xl font-bold">LOGO</h3>
        </div>

        <div className="nav flex items-center space-x-4">
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Category
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Wallet
              </a>
            </li>
          </ul>

          <div className="search-icon w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition">
            <FaSearch />
          </div>
        </div>

        <div className="profile w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition">
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;
