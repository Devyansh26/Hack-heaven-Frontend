import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/HackHeaven.png";

const MainPage = () => {
  const navigate = useNavigate();
  const navItems = ["Common Room", "1v1 Battle", "Profile"];
  const features = [
    {
      title: "Common Room",
      desc: "Collaborate & solve DSA problems in real time with others.",
      icon: "🤝",
      border: "border-cyan-400",
      path: "/commonroom"
    },
    {
      title: "1v1 Battle",
      desc: "Challenge others to coding duels and earn rewards.",
      icon: "⚔️",
      border: "border-pink-500",
      path: "/onevone"
    },
    {
      title: "Profile",
      desc: "Track your growth, stats, and achievements.",
      icon: "📈",
      border: "border-purple-500",
      path: "/profile"
    },
  ];

  const handleNavClick = (item) => {
    switch(item) {
      case "Common Room":
        navigate("/commonroom");
        break;
      case "1v1 Battle":
        navigate("/onevone");
        break;
      case "Profile":
        navigate("/profile");
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      // If no token exists, just redirect to login
      localStorage.removeItem("user"); // Clear user data if present
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Clear token and user data from localStorage
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        navigate("/login"); // Redirect to login page
      } else {
        console.error("Logout failed:", await response.json());
        // Optionally force logout on client side even if server fails
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      // Clear token and redirect even if the request fails
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#0B1226] text-white min-h-screen font-mono overflow-x-hidden">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-lg shadow-cyan-500/20 z-50">
        <img
          src={logo}
          alt="HackHeaven"
          className="w-44 animate-float hover:scale-105 transition-transform duration-300"
        />
        <ul className="flex gap-12 text-2xl font-semibold">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer transition-all duration-300"
              onClick={() => handleNavClick(item)}
            >
              <span className="group-hover:text-cyan-400">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button 
          onClick={handleLogout}
          className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-5 py-2 rounded-xl font-bold shadow-md hover:scale-105 transition-all duration-300">
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative px-12 py-16 text-center overflow-hidden bg-gradient-to-br from-[#0B1226] via-[#0F172A] to-[#1E293B] rounded-xl shadow-2xl mx-10 mt-10">
        {/* Sparkling Heading */}
        <h1 className="text-5xl font-extrabold mb-6 animate-fadeInUp bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-xl hover:scale-105 transition-transform duration-500">
          Welcome to HackHeaven 🚀
        </h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          Choose a{" "}
          <span className="text-cyan-400 font-semibold">battle mode</span>, join
          the <span className="text-purple-400 font-semibold">Common Room</span>
          , or sharpen your skills in exciting{" "}
          <span className="text-pink-400 font-semibold">1v1 matchups</span>.
          Let's get you coding, collaborating, and conquering!
        </p>
        <div className="mt-10 overflow-hidden">
          <marquee className="text-lg text-cyan-400 font-semibold tracking-wider animate-fadeIn delay-500">
            👾 Battle With Peers &nbsp; • &nbsp; 💬 Collaborate in Real-Time
            &nbsp; • &nbsp; 🧠 Solve DSA Challenges Together &nbsp; • &nbsp; 🔥
            Earn Coins & Climb the Leaderboard!
          </marquee>
        </div>

        <div className="mt-10 flex justify-center gap-6 animate-fadeInUp delay-500">
          <button 
            onClick={() => navigate("/commonroom")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-300">
            Enter Common Room
          </button>
          <button 
            onClick={() => navigate("/onevone")}
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-lg font-semibold rounded-xl shadow-md hover:scale-105 transition-all duration-300">
            1v1 Battle
          </button>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-12 relative z-10">
        {features.map(({ title, desc, icon, border, path }, idx) => (
          <div
            key={idx}
            className={`relative bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#111827] p-6 rounded-3xl shadow-lg hover:scale-105 hover:-rotate-1 transition-transform duration-500 border-2 ${border} animate-fadeInUp cursor-pointer`}
            onClick={() => navigate(path)}
          >
            <div className="absolute top-2 right-2 w-4 h-4 bg-white rounded-full opacity-30 animate-ping" />
            <h2 className="text-3xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
              {icon} {title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Announcement */}
      <div className="mt-20 px-12 animate-fadeInUp relative z-10">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-red-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
          🚨 Latest Announcement
        </h2>
        <div className="bg-gradient-to-br from-[#1f2937] to-[#111827] border-2 border-cyan-400 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all duration-500">
          <p className="text-lg text-gray-300 leading-relaxed tracking-wide">
            <span className="text-yellow-400 animate-bounce">🔥</span>{" "}
            <span className="font-semibold text-white">
              New Weekly Code War
            </span>{" "}
            starts this <span className="text-pink-400">Friday</span>! Battle
            for <span className="text-cyan-400">glory</span>,{" "}
            <span className="text-yellow-300">coins</span>, and exclusive{" "}
            <span className="text-purple-300">ranks</span>. Get ready! ⚡
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 py-10 bg-[#0B1226] border-t border-gray-800 text-center text-sm text-gray-400 animate-fadeInUp relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-20 blur-sm animate-pulse" />
        <p className="text-lg font-medium tracking-wide hover:text-white transition">
          © {new Date().getFullYear()}{" "}
          <span className="text-cyan-400 font-bold">HackHeaven</span> • Built
          for coders, by coders 💻
        </p>
        <div className="mt-4 space-x-6 text-md font-semibold">
          {["About", "Privacy", "Support"].map((link, i) => (
            <a
              key={i}
              href="#"
              className="inline-block hover:text-cyan-400 hover:scale-105 transition-all duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
