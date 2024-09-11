import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoClose, IoMenuSharp } from "react-icons/io5";
import avatarImg from "../assets/commentor.png";
import { useLogoutUserMutation } from "../redux/features/auth/authApi";
import { logout } from "../redux/features/auth/authSlice";

const navLists = [
  { name: "Home", path: "/" },
  { name: "About us", path: "/about-us" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Contact Us", path: "/contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth); // Access user data from Redux
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const dispatch = useDispatch(); // Access the Redux dispatch function to trigger actions
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap(); // Unwrap the response from the mutation hook
      dispatch(logout()); // Make sure to call logout without passing any arguments
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <header className="bg-white py-6 border">
      <nav className="container mx-auto flex justify-between items-center px-5">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </a>
        
        {/* Desktop Menu */}
        <ul className="sm:flex hidden items-center gap-8">
          {navLists.map((list, index) => (
            <li key={index}>
              <NavLink
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}

          {/* Render avatar or login based on user authentication */}
          {user ? (
            user.role === "admin" ? (
              <li className="flex items-center gap-3">
                <img src={avatarImg} alt="User Avatar" className="size-8" />
                <Link to="/dashboard">
                  <button className="bg-[#1e73b3] px-4 py-1.5 text-white rounded-sm">
                    Dashboard
                  </button>
                </Link>
              </li>
            ) : (
              <li className="flex items-center gap-3">
                <img src={avatarImg} alt="User Avatar" className="size-8" />
                <button
                  className="bg-[#1e73b3] px-4 py-1.5 text-white rounded-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
        
        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu} 
            className="flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500 hover:text-gray-900"
          >
            {isMenuOpen ? <IoClose className="h-6 w-6" /> : <IoMenuSharp className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <ul className="fixed top-[108px] left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50">
          {navLists.map((list, index) => (
            <li className="mt-5 px-4" key={index}>
              <NavLink
                onClick={() => setIsMenuOpen(false)}
                to={list.path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {list.name}
              </NavLink>
            </li>
          ))}

          {/* Render avatar or login based on user authentication in mobile menu */}
          {user ? (
            user.role === "admin" ? (
              <li className="mt-5 px-4">
                <Link to="/dashboard">
                  <button className="w-full bg-[#1e73b3] px-4 py-1.5 text-white rounded-sm">
                    Dashboard
                  </button>
                </Link>
              </li>
            ) : (
              <li className="mt-5 px-4">
                <button 
                  className="w-full bg-[#1e73b3] px-4 py-1.5 text-white rounded-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )
          ) : (
            <li className="mt-5 px-4">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
