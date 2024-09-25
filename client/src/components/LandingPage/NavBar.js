import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LeftArrow from "../../utils/LeftArrow";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("Drawer status:", !isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Custom hamburger button */}
        <div className="flex items-center">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none flex flex-col items-center"
          >
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-100 ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-100 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-white transition-transform duration-100 ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </button>

          {/* Logo */}
          <Link to="/" className="ml-3 text-white text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/achievements" className="text-white hover:text-gray-300">
            Achievements
          </Link>
        </div>
      </div>

      {/* Side drawer for mobile links */}
      <motion.div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-100 ease-in-out`}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
      >
        <div className="p-3">
          <div className="flex items-center">
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none"
            >
              {/* <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white mb-1"></div>
              <div className="w-6 h-0.5 bg-white"></div> */}
              <LeftArrow />
            </button>
            <Link
              to="/"
              className="block text-white text-2xl font-bold px-2"
              onClick={toggleDrawer}
            >
              <Logo />
            </Link>
          </div>
          <div className="mt-4 space-y-4">
            {/* Mobile Links (reusing the same links for mobile) */}
            <Link
              to="/"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              About Us
            </Link>
            <Link
              to="/achievements"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              Achievements
            </Link>

            <div className="mt-8 space-y-4">
            <Link
              to="/admin-login"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              Admin Login
            </Link>
            <Link
              to="/dev-login"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              Creator Login
            </Link>
            <Link
              to="/client-login"
              className="block text-white py-2"
              onClick={toggleDrawer}
            >
              Client Login
            </Link>
          </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
