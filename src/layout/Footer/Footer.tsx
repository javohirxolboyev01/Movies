import React from "react";
import Logo from "@/assets/Logo/Logo.png";
import {
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-950
     text-white mt-10 py-10">
      <div className="container mx-auto px-4">
        {/* Yuqori qism */}
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Footer bo‘limlar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm w-full">
            <div className="space-y-2">
              <p className="font-semibold">Навигация</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    ALL
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    TICKETS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Публичная оферта
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    F.A.Q
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Разделы</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Кино
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Театр
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Концерты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Реклама
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Контакты</p>
              <p className="text-sm text-gray-400">+998 (77) 254-09-45</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Социальные сети</p>
              <div className="flex gap-4 text-lg">
                <a href="#">
                  <FacebookOutlined className="hover:text-red-500 transition" />
                </a>
                <a href="#">
                  <InstagramOutlined className="hover:text-red-500 transition" />
                </a>
                <a href="#">
                  <YoutubeOutlined className="hover:text-red-500 transition" />
                </a>
                <a href="#">
                  <TwitterOutlined className="hover:text-red-500 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © 2025 Cinema. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
