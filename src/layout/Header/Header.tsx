import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo/Logo.png";
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";

const navItems = [
  { to: "/", icon: <HomeOutlined className="text-xl" />, label: "Home" },
  {
    to: "/movies",
    icon: <VideoCameraOutlined className="text-xl" />,
    label: "Movies",
  },
  {
    to: "/wishlist",
    icon: <HeartOutlined className="text-xl" />,
    label: "Saved",
  },
  {
    to: "/search",
    icon: <SearchOutlined className="text-xl" />,
    label: "Search",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <header className="fixed bottom-0 md:top-0 md:relative z-50 w-full bg-white text-black dark:bg-black dark:text-white backdrop-blur shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <nav className="hidden md:flex flex-1 justify-center gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`
              }
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`border px-2 py-2 rounded-full text-lg transition flex items-center gap-2
              ${
                isDark
                  ? "bg-white/10 border-white text-white"
                  : "bg-gray-100 border-gray-300 text-black hover:bg-gray-200"
              }`}
          >
            {isDark ? <SunOutlined /> : <MoonOutlined />}
          </button>

          <button
            onClick={() => navigate("/sign")}
            className="bg-red-600 hover:bg-red-700 transition text-white px-10 py-3 rounded text-sm ml-3"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-2 flex justify-between items-center fixed bottom-0 left-0 right-0 z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-red-500" : "text-gray-500 hover:text-red-500"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}

        <button
          onClick={toggleTheme}
          className="flex flex-col items-center text-xs text-gray-500 hover:text-red-500"
        >
          {isDark ? (
            <SunOutlined className="text-xl" />
          ) : (
            <MoonOutlined className="text-xl" />
          )}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
