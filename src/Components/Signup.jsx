import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/HackHeaven.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="bg-[#0B1226] text-white w-full min-h-screen pb-10 font-mono overflow-x-hidden relative">
      
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[40%] left-[60%] w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-2xl animate-blob animation-delay-4000"></div>
      </div>

      <header className="flex justify-between items-center px-6 py-4 shadow-md shadow-cyan-500/10">
        <Link to="/">
          <img src={logo} alt="HackHeaven Logo" className="w-44 -mt-7 animate-float" />
        </Link>
        <div className="-mt-12">
          <button 
            onClick={handleLoginClick}
            className="bg-[#00C896] hover:bg-[#00a87e] text-white px-5 py-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
            Login
          </button>
        </div>
      </header>

      <main className="flex justify-center items-center mt-16 px-4">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-lg shadow-cyan-500/10 animate-fadeIn">
        <h1 className="text-3xl text-center mb-8 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-float drop-shadow-xl">HackHeaven</h1>
          
          <form className="space-y-6">
            <div className="relative">
              <div className="flex items-center">
                <FaUser className="absolute ml-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ketan Goyal"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center">
                <MdEmail className="absolute ml-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Deepak@69.com"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm mb-1 text-gray-300">Password</label>
              <div className="flex items-center">
                <FaLock className="absolute ml-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />
                <div
                  className="absolute right-3 cursor-pointer text-xl text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm mb-1 text-gray-300">Confirm Password</label>
              <div className="flex items-center">
                <FaLock className="absolute ml-3 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />
                <div
                  className="absolute right-3 cursor-pointer text-xl text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-gradient-to-r from-[#00C896] to-[#1E90FF] hover:from-[#00a87e] hover:to-[#187bcd] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00C896] hover:underline cursor-pointer">Login</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;
