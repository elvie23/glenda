fix this too. import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-300 text-black p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">J&K JewelryShop</div>
        <nav>
          <div className="flex space-x-6">
            <NavLink to="/" className="hover:text-gray-400 uppercase text-xl">Home</NavLink>
            <NavLink to="/product" className="hover:text-gray-400 uppercase text-xl">Product</NavLink>
            <NavLink to="/about" className="hover:text-gray-400 uppercase text-xl">About</NavLink>
            <NavLink to="/reviews" className="hover:text-gray-400 uppercase text-xl">Reviews</NavLink>
            
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
