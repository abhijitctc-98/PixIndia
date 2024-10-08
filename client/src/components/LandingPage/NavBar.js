import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LeftArrow from "../../utils/LeftArrow";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is typically the breakpoint for 'lg' in Tailwind
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDrawer = () => {
    console.log("Drawer status:", !isOpen);
    setIsOpen(!isOpen);
  };

  const NavLinks = ({ onClick, className }) => (
    <div className={className}>
      <Link to="/" className="text-white hover:text-gray-300" onClick={onClick}>
        Home
      </Link>
      <Link to="/about" className="text-white hover:text-gray-300" onClick={onClick}>
        About Us
      </Link>
      <Link to="/achievements" className="text-white hover:text-gray-300" onClick={onClick}>
        Achievements
      </Link>
    </div>
  );

  const LoginLinks = ({ onClick }) => (
    <div className="space-y-4">
      <Link
        to="/admin-login"
        className="block text-white py-2"
        onClick={onClick}
      >
        Admin Login
      </Link>
      <Link
        to="/dev-login"
        className="block text-white py-2"
        onClick={onClick}
      >
        Creator Login
      </Link>
      <Link
        to="/client-login"
        className="block text-white py-2"
        onClick={onClick}
      >
        Client Login
      </Link>
    </div>
  );

  return (
    <nav className="bg-gray-800 p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and hamburger menu */}
        <div className="flex items-center">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none flex flex-col items-center mr-3"
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
          <Link to="/" className="text-white text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        {/* Desktop Links */}
        {isLargeScreen && (
          <NavLinks className="flex space-x-4" />
        )}
      </div>

      {/* Side drawer */}
      <motion.div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        initial={false}
        animate={isOpen ? { x: 0 } : { x: "-100%" }}
      >
        <div className="p-4">
          <div className="flex items-center mb-6">
            <button
              onClick={toggleDrawer}
              className="text-white focus:outline-none mr-3"
            >
              <LeftArrow />
            </button>
            <Link
              to="/"
              className="text-white text-2xl font-bold"
              onClick={toggleDrawer}
            >
              <Logo />
            </Link>
          </div>
          <div className="space-y-6">
            {/* Navigation Links */}
            {!isLargeScreen && (
              <div className="border-b border-gray-600 pb-4">
                <NavLinks onClick={toggleDrawer} className="flex flex-col space-y-4" />
              </div>
            )}

            {/* Login Links */}
            <LoginLinks onClick={toggleDrawer} />
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;