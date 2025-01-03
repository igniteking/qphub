"use client";

import Backtotop from "@/components/backtotop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const Testing = () => {
  return (
    <div style={{ display: "block" }}>
      {/* <Switcher/> */}
      <div className="page">
        <Header />
        <Sidebar />
        <div className="main-content app-content">
          <div className="container-fluid">HELLO!</div>
        </div>
        <Footer />
      </div>
      <Backtotop />
    </div>
  );
};

export default Testing;
