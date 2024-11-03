import React from 'react'

const Header = () => {
  return (
    <div className="header bg-cover bg-center py-2 text-white ">
    <div className="section max-w-6xl mx-auto px-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="logo">
        <h3 className="text-2xl font-bold">LOGO</h3>
      </div>

      {/* Navigation */}
      <div className="nav">
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">Category</a></li>
          <li><a href="#" className="hover:text-gray-300">Blogs</a></li>
          <li><a href="#" className="hover:text-gray-300">Wallet</a></li>
        </ul>
      </div>

      {/* Icons */}
      <div className="flex space-x-4">
        <div className="search-icon w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition"></div>
        <div className="profile w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center hover:bg-opacity-50 transition"></div>
      </div>
    </div>
  </div>
);
}

export default Header
