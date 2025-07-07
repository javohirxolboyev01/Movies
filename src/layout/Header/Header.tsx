import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo/Logo.png";
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  MenuOutlined,
  MoonOutlined,
  BulbOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Drawer } from "antd";

const navItems = [
  { to: "/", icon: <HomeOutlined className="text-xl" />, label: "Home" },
  {
    to: "/movies",
    icon: <VideoCameraOutlined className="text-xl" />,
    label: "Movies",
  },
  { to: "/saved", icon: <HeartOutlined className="text-xl" />, label: "Saved" },
  {
    to: "/search",
    icon: <SearchOutlined className="text-xl" />,
    label: "Search",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    <header className="w-full sticky top-0 z-50 bg-gray-950/90 text-white dark:bg-black/80  dark:text-white backdrop-blur shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
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

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-white border border-white bg-white/10 px-2 py-2 rounded text-sm hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            {isDark ? (
              <>
                <SunOutlined/>
              </>
            ) : (
              <>
                <MoonOutlined/>
              </>
            )}
          </button>

          <button
            onClick={() => navigate("/sign")}
            className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded text-sm"
          >
            Sign In
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center gap-1 hover:text-red-500 transition"
          >
            <MenuOutlined className="text-xl" />
          </button>
        </div>
      </div>

      <Drawer
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        className="md:hidden"
        closable={false}
        width={220}
        style={{
          padding: "1.5rem",
          backgroundColor: "#0f0f0f",
          color: "#ffffff",
        }}
      >
        <div className="flex flex-col gap-4 text-white">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 text-base transition ${
                  isActive ? "text-red-500" : "hover:text-red-500"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="mt-4 border border-white px-2 py-1 rounded text-white text-sm flex items-center gap-2"
          >
            {isDark ? (
              <>
                <BulbOutlined />
                Light
              </>
            ) : (
              <>
                <MoonOutlined />
                Dark
              </>
            )}
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default React.memo(Header);
