import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo/Logo.png";
import {
  HeartOutlined,
  HomeOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

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
  return (
    <header className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
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

        <div className="hidden md:flex items-center justify-end flex-1 gap-3">
          <select className="bg-transparent text-white text-sm border border-white rounded px-2 py-1">
            <option value="ru">Ru</option>
            <option value="uz">UZ</option>
          </select>

          <button className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded text-sm">
            Войти
          </button>
        </div>
      </div>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-neutral-700 flex justify-around py-2 z-50">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition ${
                isActive ? "text-red-500" : "text-white hover:text-red-500"
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default React.memo(Header);
