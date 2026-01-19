import React from 'react';
import { Link } from 'react-router-dom';

const NotFound=() =>{

  return (
    <div className="min-h-screen  from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link 
            to={"/"}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
        
        {/* Decorative Element */}
        <div className="mt-12">
          <svg className="w-64 h-64 mx-auto text-blue-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NotFound