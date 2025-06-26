import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 bg-orange-100 w-full p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/img/logo.jpg" alt="Urban Hues Logo" className="w-8 h-6" />
          <h1 className="text-xl font-bold text-sky-700">Urban Hues</h1>
        </div>

        {/* Hamburger Menu Icon (mobile) */}
        <button
          className="md:hidden text-sky-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link className="text-sky-700 hover:underline" to="/">
            Home
          </Link>
          <Link className="text-sky-700 hover:underline" to="/shop">
            Shop
          </Link>
          <Link className="text-sky-700 hover:underline" to="/contact">
            Contact
          </Link>
          <div className="flex space-x-4 text-lg">
            <span title="Search">🔍</span>
            <span title="Cart">🛒</span>
            <span title="Profile">👤</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link
            className="text-sky-700 hover:underline"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className="text-sky-700 hover:underline"
            to="/shop"
            onClick={() => setIsOpen(false)}
          >
            Shop
          </Link>
          <Link
            className="text-sky-700 hover:underline"
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="flex space-x-6 text-xl mt-2 pl-2">
            <span title="Search">🔍</span>
            <span title="Cart">🛒</span>
            <span title="Profile">👤</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
