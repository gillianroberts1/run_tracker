// src/components/NavBar.js
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const { isAuthenticated, getUser, login, logout } = useKindeAuth();
  const user = getUser(); // Get the logged-in user's information
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the mobile menu is open

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#242424] p-4 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-evenly items-center">
        {/* Logo/Home Link */}
        <Link to="/" className="text-white text-2xl font-bold">
          Run<span className="text-green-500">Tracker</span>
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Links for Desktop and Mobile */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 md:items-center md:relative w-full md:w-auto md:static top-16 left-0 bg-[#242424] md:bg-transparent p-4 md:p-0 absolute`}
        >
          {isAuthenticated && (
            <>
              <Link to="/record" className="block text-gray-300 hover:text-white text-lg py-2 md:py-0">
                Record Run
              </Link>
              <Link to="/display" className="block text-gray-300 hover:text-white text-lg py-2 md:py-0">
                Display Runs
              </Link>
            </>
          )}
        </div>

        {/* Authentication Buttons */}
        <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">
                Welcome, {user?.first_name || user?.email}
              </span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={login}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
