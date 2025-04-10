import React from 'react';
import Services from './Services';

const Header = () => (
  <header className="bg-white shadow-lg p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-yellow-400">
        Cargo TON
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-400 hover:text-yellow-400">Home</a>
        <a href="#pages" className="text-gray-400 hover:text-yellow-400">Pages</a>
        <a href="#tracking" className="text-gray-400 hover:text-yellow-400">Tracking</a>
        <a href="#services" className="text-gray-400 hover:text-yellow-400">Services</a>
        <a href="#blog" className="text-gray-400 hover:text-yellow-400">Blog</a>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="bg-yellow-400 text-white px-5 py-4 hover:bg-yellow-400 text-xs">GET A QUOTE</button>
        <button className="bg-black text-white px-4 py-2 hover:bg-black text-xs">SIGN IN</button>
      </div>
    </div>
  </header>
);

export default Header;
