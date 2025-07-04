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
    <footer className="bg-gray-950 text-white mt-10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div className="flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm w-full">
            <div className="space-y-2">
              <p className="font-semibold">Navigation</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Tickets
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Public Offer
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
              <p className="font-semibold">Sections</p>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Cinema
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Theatre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Concerts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-500 transition">
                    Advertising
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Contacts</p>
              <p className="text-sm text-gray-400">+998 (77) 254-09-45</p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Social Media</p>
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

        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
          © 2025 Cinema. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
