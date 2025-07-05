import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import allProducts from "../data/products";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [filteredResults, setFilteredResults] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const { toggleCart, cartItems } = useCart();

  const profileRef = useRef();
  const searchRef = useRef();

  // Hide profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }

      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const updatedHistory = [
      searchQuery,
      ...searchHistory.filter((item) => item !== searchQuery),
    ].slice(0, 5);

    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    setSearchQuery("");
    setFilteredResults([]);
    alert(`Searching for "${searchQuery}"`);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 bg-white w-full p-4 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/img/logo.jpg"
              alt="Urban Hues Logo"
              className="w-8 h-6"
            />
            <h1 className="text-xl font-bold text-sky-700">Urban Hues</h1>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden text-sky-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Nav */}
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
            <div className="flex space-x-4 text-lg items-center">
              <span
                title="Search"
                onClick={() => setShowSearch(true)}
                className="cursor-pointer"
              >
                🔍
              </span>
              <span
                title="Cart"
                onClick={() => {
                  setShowLogin(true);
                  toggleCart();
                }}
                className="cursor-pointer  relative"
              >
                🛒
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </span>
              <div ref={profileRef} className="relative">
                <span
                  title="Profile"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="cursor-pointer"
                >
                  👤
                </span>
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md w-40 z-50 text-sm p-2 space-y-1">
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Profile
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Orders
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Buy Again
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Receipts
                    </p>
                    <p
                      className="hover:bg-gray-100 p-2 cursor-pointer"
                      onClick={() => {
                        if (user) {
                          setUser(null);
                          alert("Logged out");
                        } else {
                          setShowLogin(true);
                        }
                      }}
                    >
                      {user ? "Logout" : "Login"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
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
              <span
                title="Search"
                onClick={() => setShowSearch(true)}
                className="cursor-pointer"
              >
                🔍
              </span>
              <span
                title="Cart"
                onClick={() => {
                  setShowLogin(true);
                  toggleCart();
                }}
                className="cursor-pointer  relative"
              >
                🛒
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              </span>

              <div ref={profileRef} className="relative">
                <span
                  title="Profile"
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  onMouseEnter={() => setShowProfileDropdown(true)}
                  className="cursor-pointer"
                >
                  👤
                </span>
                {showProfileDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md w-40 z-50 text-sm p-2 space-y-1">
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Profile
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Orders
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Buy Again
                    </p>
                    <p className="hover:bg-gray-100 p-2 cursor-pointer">
                      Receipts
                    </p>
                    <p
                      className="hover:bg-gray-100 p-2 cursor-pointer"
                      onClick={() => {
                        if (user) {
                          setUser(null);
                          alert("Logged out");
                        } else {
                          setShowLogin(true);
                        }
                      }}
                    >
                      {user ? "Logout" : "Login"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Search Bar Overlay */}
      {showSearch && (
        <div
          ref={searchRef}
          className="absolute top-20 left-0 w-full flex flex-col items-center z-40"
        >
          <form onSubmit={handleSearchSubmit} className="w-[90%] md:w-1/2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);

                if (query.trim()) {
                  const filtered = allProducts.filter((p) =>
                    p.name.toLowerCase().includes(query.toLowerCase())
                  );
                  setFilteredResults(filtered);
                } else {
                  setFilteredResults([]);
                }
              }}
              placeholder="Search..."
              className="w-full p-2 border bg-white border-b-black rounded shadow"
            />
          </form>

          {/* Search History */}
          {searchHistory.length > 0 && !searchQuery && (
            <ul className="w-[90%] md:w-1/2 bg-white border mt-1 rounded shadow z-50">
              {searchHistory.map((term, index) => (
                <li
                  key={index}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {term}
                </li>
              ))}
              <li
                onClick={() => {
                  setSearchHistory([]);
                  localStorage.removeItem("searchHistory");
                }}
                className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 cursor-pointer border-t"
              >
                Clear History
              </li>
            </ul>
          )}

          {/* Search Results */}
          {searchQuery && filteredResults.length > 0 && (
            <div className="w-[90%] md:w-1/2 bg-white mt-2 rounded shadow-lg max-h-[300px] overflow-y-auto z-50">
              {filteredResults.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-2 border-b hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    alert(`Open product: ${product.name}`);
                    setShowSearch(false);
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {searchQuery && filteredResults.length === 0 && (
            <p className="text-gray-500 mt-2 text-sm">No products found.</p>
          )}
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-80 relative">
            <button
              className="absolute top-2 right-3 text-gray-600 text-xl"
              onClick={() => setShowLogin(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-3 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              className="w-full bg-sky-700 text-white p-2 rounded hover:bg-sky-600"
              onClick={() => {
                setUser({ name: "Claire" });
                setShowLogin(false);
              }}
            >
              Log in
            </button>
            <button className="w-full mt-3 border border-sky-700 text-sky-700 p-2 rounded hover:bg-sky-50">
              Create account
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
