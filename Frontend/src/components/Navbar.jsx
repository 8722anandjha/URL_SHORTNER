import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

 const Navbar= ()=> {

  const {isAuthenticated} = useSelector((state)=>state.auth);
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Brand name */}
          <div className="flex">
            <h1 className="text-2xl font-bold text-blue-600">
              URL Shortener
            </h1>
          </div>

          {/* Right side - Login button */}
          <div>
            {isAuthenticated?
            <Link to="/auth/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
              Logout
            </Link>
          :
          <Link to="/auth/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
              Login
            </Link>
          }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar