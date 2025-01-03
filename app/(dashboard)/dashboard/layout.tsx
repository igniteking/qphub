"use client";
import Backtotop from "@/components/backtotop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
// import Sidebar from "@/components/sidebar/sidebar";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  const [lateLoad, setlateLoad] = useState(false);
  useEffect(() => {
    setlateLoad(true);
  });
  return (
    <>
      <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        {/* <Switcher/> */}
        <div className="page">
          <Header />
          <Sidebar />
          <div className="main-content app-content">
            <div className="container-fluid">{children}</div>
          </div>
          <Footer />
        </div>
        <Backtotop />
      </div>
    </>
  );
};

export default Layout;
