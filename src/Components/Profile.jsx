import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/HackHeaven.png";
import avatar from "./../assets/avatar.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Ketan_1317",
    email: "ketan@hackheaven.com",
    bio: "I am a software engineer with a passion for hacking and innovation. I recently joined HackHeaven to learn and grow in the tech industry.",
    followers: 1000,
    coins: 200,
    avatar: avatar,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Changes saved successfully!");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#0B1226] text-white w-full pb-20 min-h-screen font-mono overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-[40%] left-[60%] w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-2xl animate-blob animation-delay-4000" />
      </div>

      <header className="flex justify-between items-center px-6 py-4 shadow-md shadow-cyan-500/10">
        <img 
          src={logo} 
          className="w-44 -mt-7 animate-float" 
          alt="logo" 
          onClick={handleBackToHome}
          style={{ cursor: 'pointer' }}
        />
        <div className="flex items-center gap-5 mr-10 -mt-10 transition-all duration-300 animate-fadeIn">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white tracking-wide mb-1 drop-shadow-md">
              {user.name}
            </h1>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-xl text-xl font-bold shadow-inner shadow-black/30">
              <span className="text-yellow-300">{user.coins}</span>
              <span className="text-yellow-300 animate-pulse">🪙</span>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10 flex items-center justify-between px-14 animate-fadeInUp">
        <div className="space-y-1">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-sm transition-all duration-300 hover:scale-[1.02]">
            Profile
          </h1>
          <p className="text-gray-400 text-lg font-medium tracking-wide">
            Manage your account settings here
          </p>
        </div>

        <div className="flex items-center justify-center gap-10 mr-4">
          <div className="group transition-transform duration-300 hover:scale-105">
            <label
              className="text-gray-400 text-sm font-medium group-hover:text-white transition duration-200"
              htmlFor="followers"
            >
              Followers
            </label>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl px-5 py-2 text-lg font-bold text-white shadow-md shadow-cyan-500/10 mt-1">
              {user.followers}
            </div>
          </div>

          <div className="group transition-transform duration-300 hover:scale-105">
            <label
              className="text-gray-400 text-sm font-medium group-hover:text-white transition duration-200"
              htmlFor="coins"
            >
              Coins
            </label>
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl px-5 py-2 text-lg font-bold text-yellow-300 flex items-center gap-1 shadow-md shadow-yellow-500/10 mt-1">
              {user.coins}
              <span className="animate-pulse">🪙</span>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[90vw] h-[1px] bg-gray-700 mx-auto mt-6" />

      <div className="flex items-start justify-start mt-10 px-14 gap-10">
        <div
          className="text-4xl font-extrabold text-white px-8 py-5 w-72 
          bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 
          rounded-3xl shadow-xl ring-2 ring-cyan-400/20 
          transition-all duration-500 ease-in-out transform 
          hover:scale-105 hover:shadow-cyan-500/30 
          hover:ring-cyan-400 hover:bg-gradient-to-tr 
          animate-fadeIn backdrop-blur-sm"
        >
          Account
        </div>

        <div className="flex flex-col gap-6 w-full text-white text-lg">
          <div>
            <label htmlFor="name" className="block text-sm text-cyan-300 mb-1">
              Username:
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="bg-gray-800 px-4 py-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 text-xl font-medium transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-cyan-300 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="bg-gray-800 px-4 py-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 text-xl font-medium transition-all"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm text-cyan-300 mb-1">
              Bio:
            </label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              rows={4}
              className="bg-gray-800 px-4 py-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-cyan-500 text-lg font-medium transition-all resize-none"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out"
            >
              Save Changes
            </button>
            <button
              onClick={handleBackToHome}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:scale-105 hover:shadow-gray-500/50 transition-all duration-300 ease-in-out"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
