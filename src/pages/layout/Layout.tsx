import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Layout);
