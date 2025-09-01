import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignInDropdown, setShowSignInDropdown] = useState(false);

  useEffect(() => {
    // Check if there is a token in localStorage when the component mounts
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set to true if the token exists
    }
  }, []);

  const toggleSignInDropdown = () => {
    setShowSignInDropdown(!showSignInDropdown);
  };

  const closeDropdown = () => {
    setShowSignInDropdown(false);
  };

  return (
    <div className="w-full font-['Hanken_Grotesk']">
      {/* Upper Navigation Bar - Now Fixed */}
      <div className="w-full h-[50px] flex fixed top-0 left-0 z-50 shadow-md">
        <div className="w-[1440px] bg-[#2b2c6c] flex items-center">
          <Link
            to="/Find-doctor"
            className="ml-[110px] text-white text-xl font-semibold relative group hover:text-[#28b6a2] transition-colors duration-300 cursor-pointer"
          >
            FIND A DOCTOR
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#28b6a2] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            to="/online-results"
            className="ml-[180px] text-white text-xl font-semibold relative group hover:text-[#28b6a2] transition-colors duration-300 cursor-pointer"
          >
            ONLINE RESULTS
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#28b6a2] transition-all duration-300 group-hover:w-full" />
          </Link>

          <Link
            to="/Book-Appointment"
            className="ml-[180px] text-white text-xl font-semibold relative group hover:text-[#28b6a2] transition-colors duration-300 cursor-pointer"
          >
            BOOK AN APPOINTMENT
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#28b6a2] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="w-[490px] bg-[#2FB297] flex items-center justify-center transition-colors duration-300">
          <Link
            to="/request-consultation"
            className="relative text-white text-xl font-semibold py-2 px-4 rounded-md cursor-pointer transition-all duration-300 hover:text-[#2FB297] after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-0 after:bg-[#2FB297] after:transition-all after:duration-300 hover:after:w-full"
          >
            REQUEST A CONSULTATION
          </Link>
        </div>
      </div>

      {/* Space for Fixed Navbar - Prevent Content Overlap */}
      <div className="h-[50px]"></div>

      {/* Main Navigation Bar */}
      <div className="w-full h-[70px] flex items-center mt-0">
        <div className="flex items-center ml-[60px]">
          <Link to="/Home" className="flex items-center cursor-pointer">
            <img src="/Logo.png" alt="Logo" className="h-[70px]" />
            <div className="text-[#2b2c6c] ml-2 font-bold text-lg">
              MEDI FLOW
              <div className="text-xs">HEALTH AND WELLNESS CARE</div>
            </div>
          </Link>
        </div>

        <div className="ml-auto mr-[50px] flex space-x-10 font-semibold">
          {[
            { name: "Home", path: "/Home" },
            { name: "Contact Us", path: "/Contact-Us" },
            { name: "Our Facilities", path: "/Our-Facilities" },
            { name: "About Us", path: "/About-Us" }
          ].map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="relative py-2 text-black hover:text-pink-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Sign In button directly navigates to '/Login' */}
          {isAuthenticated ? (
            <Link
              to="/User-Account"
              className="relative py-2 text-black hover:text-pink-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
            >
              My Account
            </Link>
          ) : (
            <div className="relative">
              <div 
                className="relative py-2 text-black hover:text-pink-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full cursor-pointer flex items-center"
                onClick={toggleSignInDropdown}
              >
                <span>Sign In</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {showSignInDropdown && (
                <div className="absolute right-0 z-50 w-48 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                  <div className="py-2">
                    <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                      User Sign In
                    </Link>
                    <Link to="/login-doctor" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeDropdown}>
                      Doctor Sign In
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
