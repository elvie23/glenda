import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-300 text-black p-6 sm:p-8 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 sm:mb-0">
          J&K JewelryShop
        </div>

        {/* Navigation Menu */}
        <nav>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <NavLink to="/" className="hover:text-gray-400 uppercase text-xl">
              Home
            </NavLink>
            <NavLink to="/product" className="hover:text-gray-400 uppercase text-xl">
              Product
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-400 uppercase text-xl">
              About
            </NavLink>
            <NavLink to="/reviews" className="hover:text-gray-400 uppercase text-xl">
              Reviews
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
