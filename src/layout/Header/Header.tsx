import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "@/components/redux/feature/usersSlice";
import Logo from "@/assets/Logo/Logo.png";
import { IoSunnyOutline } from "react-icons/io5";
import { BsBookmark, BsMoon } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { RiMovie2Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import type { RootState } from "@/components/redux";

const navItems = [
  { to: "/", icon: <GoHome className="text-xl" />, label: "Home" },
  {
    to: "/movies",
    icon: <RiMovie2Line className="text-xl" />,
    label: "Movies",
  },
  { to: "/wishlist", icon: <BsBookmark className="text-xl" />, label: "Saved" },
  { to: "/search", icon: <IoMdSearch className="text-xl" />, label: "Search" },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

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
    <>
      <header className="fixed top-0 w-full bg-white text-black dark:bg-black dark:text-white z-50 md:relative">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="hidden md:flex items-center gap-10">
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
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`border px-2 py-2 rounded-full text-lg transition flex items-center gap-2
              ${
                isDark
                  ? "bg-white/10 border-white text-white"
                  : "bg-gray-100 border-gray-300 text-black hover:bg-gray-200"
              }`}
            >
              {isDark ? <IoSunnyOutline /> : <BsMoon />}
            </button>

            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.picture}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="hidden md:inline text-sm font-medium">
                  {user.name}
                </span>
                <button
                  onClick={() => dispatch(logout())}
                  className="ml-2 text-sm flex items-center gap-1 underline hover:text-red-500"
                >
                  <FiLogOut className="text-base" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded-xl text-sm"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 px-4 py-2 flex justify-between items-center z-50">
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
            <IoSunnyOutline className="text-xl" />
          ) : (
            <BsMoon className="text-xl" />
          )}
          <span>{isDark ? "Light" : "Dark"}</span>
        </button>
      </div>
    </>
  );
};

export default React.memo(Header);
