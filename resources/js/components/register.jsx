import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-100 flex flex-col justify-center items-center">
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-12 py-4 bg-white shadow-md fixed top-0">
        <div className="text-lg font-semibold"></div>
        <div className="space-x-6 text-gray-700 mr-auto">
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Home</a>
          <a href="#" className="hover:text-black">Events</a>
          <a href="#" className="hover:text-black">Tickets</a>
          <a href="#" className="hover:text-black">Historique</a>
        </div>
        <div className="flex space-x-4">
          <a href="" className="text-gray-700">English ⌄</a>
          <a href="/" className="text-blue-600 font-semibold underline">Sign in</a>
          <a href="#" className= "bg-blue-600 text-white px-4 py-2 rounded-lg">Register</a>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="flex flex-col items-center w-full max-w-full bg-white shadow-lg rounded-lg overflow-hidden mt-20">
        <div className="flex w-full p-8">
          {/* Section gauche avec texte */}
          <div className="w-1/3 flex flex-col justify-center text-left">
            <h1 className="text-3xl font-bold text-black">Buy your ticket, <br /> watch your Team</h1>
            <p className="mt-4 text-gray-600">
               <a href="/register" className="text-blue-600 font-semibold"></a>
            </p>
          </div>

          {/* Image au centre */}
          <div className="w-full flex justify-center items-center">
            <img
              src="https://www.ixpap.com/images/2022/11/Messi-and-Ronaldo-Wallpaper-3.jpg"
              alt=""
              className="w-80 h-screen object-cover rounded-lg"
            />
          </div>

          {/* Section droite avec formulaire */}
          <div className="w-1/2 bg-gray-50 p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-black text-center">Welcome</h2>
            <form className="mt-6">
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="create your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="confirm your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="text-right text-gray-500 text-sm mb-4">
                <a href="/forgot-password"></a>
              </div>
              <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600">
                Sign Up
              </button>
            </form>

            {/* Ligne de séparation */}
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <p className="px-4 text-gray-600 text-sm">Or continue with</p>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Boutons sociaux */}
            <button className="p-3 border rounded-lg hover:bg-gray-100">
  <FaGoogle className="h-6 w-6 text-red-500" />
</button>

<button className="p-3 border rounded-lg hover:bg-gray-100">
  <FaFacebook className="h-6 w-6 text-blue-600" />
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
