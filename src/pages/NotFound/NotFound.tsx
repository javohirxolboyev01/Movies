import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden  text-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-extrabold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mt-2">Sahifa topilmadi</h2>
        <p className="text-gray-400 mt-2 text-sm">
          Kechirasiz, siz izlagan sahifa mavjud emas yoki o‘chirilgan.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white text-sm font-medium"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NotFound);
