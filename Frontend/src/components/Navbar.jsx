import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from "../utils/axisoInstance.js"
import {logout} from "../store/slice/auth.slice.js"

 const Navbar= ()=> {

  const {isAuthenticated} = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  const navigate= useNavigate();

  const handleLogoutButton=()=>{
    try{
      if(isAuthenticated){
        axiosInstance.post("/api/auth/logout")
        dispatch(logout());
        navigate("/auth/login",{ replace: true })
      }
    }catch(error){
      console.log(error)
    }
  }
const handleLoginButton= ()=>{
  navigate("/auth/login")
}
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
            <button 
            onClick={handleLogoutButton}
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
              Logout
            </button>
          :
          <button onClick={handleLoginButton} className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200">
              Login
            </button>
          }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar