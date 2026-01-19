import React from 'react';

 const Navbar= ()=> {
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar