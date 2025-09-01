import React, { useContext, useState } from "react";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { HiX } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import axios from "axios";

const links = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const Navbar = ({ setArticles }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleSearch = async (e) => {
    const search = e.target.value;
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setArticles(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed w-full z-20 backdrop-blur-lg bg-white/70 dark:bg-blue-900/70 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <h1 className="md:text-3xl text-xl font-extrabold text-blue-600 dark:text-gray-100 hover:scale-105 transition-transform cursor-pointer">
            News<span className="text-gray-800 dark:text-gray-300">Pulse</span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-3">
          {links.map((link) => (
            <Link
              to={`/${link.toLowerCase()}`}
              key={link}
              className="px-4 py-2 rounded-xl bg-gray-100/70 dark:bg-blue-800/60 text-gray-700 dark:text-gray-200 
              hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition font-medium shadow-sm"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search news..."
              className="pl-10 pr-4 py-2 w-32 md:w-64 rounded-full bg-gray-100 dark:bg-blue-800 text-gray-700 dark:text-gray-200 
              focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-blue-700 text-gray-700 dark:text-gray-200 
            hover:scale-110 hover:rotate-12 transition-transform cursor-pointer"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-blue-700 transition"
          >
            {open ? <HiX size={24} /> : <TiThMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/80 dark:bg-blue-900/80 backdrop-blur-lg shadow-md px-4 py-3 space-y-2 animate-slideDown">
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 rounded-lg bg-gray-100/70 dark:bg-blue-800/70 text-gray-700 dark:text-gray-200 
              hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition font-medium shadow-sm"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
