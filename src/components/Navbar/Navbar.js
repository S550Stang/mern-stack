import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <nav className="w-screen h-auto p-5 md:px-10 lg:px-14 xl:px-20  bg-transparent flex justify-between items-center font-Herculanum fixed left-0 top-0 text-white">
      <p className="text-sm md:text-lg lg:text-xl xl:text-2xl ">
        React Concepts
      </p>
      <span
        className="w-5 h-5 text-white md:hidden"
        onClick={() => setHamburger(!hamburger)}
      >
        <FaHamburger />
      </span>
      <ul className="hidden md:visible md:flex justify-evenly items-center space-x-5 md:space-x-7 lg:space-x-12 xl:space-x-14 2xl:space-x-20 text-xs">
        <Link to="/Mongodb">Mongodb</Link>
        <Link to="/Express">Express</Link>
        <Link to="React">React</Link>
        <Link to="Nodejs">Node.js</Link>
      </ul>
    </nav>
  );
};
