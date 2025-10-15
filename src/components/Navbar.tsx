// Navbar.tsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { logOut } from "../Auth/slice";
import { searchPackageRequest} from "../Main/Packages/slice"
import ghadiKiDukanLogo from "../assets/ghadiKiDukanLogo.png";
import { motion } from "framer-motion";
import { MenuOutlined, CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/packages`);
      dispatch(searchPackageRequest(searchQuery.trim()));
      setSearchQuery("");
      if (isOpen) setIsOpen(false); // close mobile menu if open
    }
  };

  return (
    <header className="sticky top-0 w-full z-50 border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4  gap-3 md:gap-0">
        {/* Top row: logo and menu toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={ghadiKiDukanLogo} alt="Logo" className="h-18 w-auto" />
            <span className="text-lg font-semibold tracking-wide text-gray-800" >
              Ghadi ki Dukan
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        {/* Search Bar (visible on all screens) */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full md:w-1/3 border border-gray-300 rounded-full overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-indigo-500"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
          />
          <button
            type="submit"
            className="px-4 text-gray-600 hover:text-gray-800 transition"
          >
            <SearchOutlined />
          </button>
        </form>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex items-center space-x-6"
        >
          {[{ path: "/", label: "Home" }, { path: "/about", label: "About" }, { path: "/contact", label: "Contact" }].map(
            (link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 hover:text-black transition text-sm"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Auth */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="text-sm px-3 py-1 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">
                Hi, {user?.name || user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm px-3 py-1 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Socials */}
          <div className="flex items-center space-x-4 text-lg ml-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <InstagramOutlined />
            </a>
            <a href="https://wa.me/918875949835" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <WhatsAppOutlined />
            </a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
        >
          {[{ path: "/", label: "Home" }, { path: "/about", label: "About" }, { path: "/contact", label: "Contact" }].map(
            (link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-black text-sm"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Auth in mobile */}
          {!isAuthenticated ? (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm px-3 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              Login
            </Link>
          ) : (
            <div className="space-y-2">
              <span className="block text-sm text-gray-600">Hi, {user?.name || user?.email}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full text-sm px-3 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}

          {/* Socials */}
          <div className="flex justify-center space-x-6 text-xl pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500">
              <InstagramOutlined />
            </a>
            <a href="https://wa.me/918875949835" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <WhatsAppOutlined />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
