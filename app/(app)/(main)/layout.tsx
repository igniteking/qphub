"use client";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import Footer from "@/shared/layout-components/footer/footer";
import Header from "@/shared/layout-components/header/header";
import CandidateSidebar from "@/shared/layout-components/candidate-sidebar/sidebar";
import EmployeeSidebar from "@/shared/layout-components/employee-sidebar/sidebar";
import HRSidebar from "@/shared/layout-components/hr-sidebar/sidebar";
import Switcher from "@/shared/layout-components/switcher/switcher";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  const [lateLoad, setLateLoad] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null); // State to store user role

  useEffect(() => {
    setLateLoad(true);

    const clerkId = "user_2rhmsyILNR4Yx0UpssfdVV2085n";

    // Assuming you have an API or logic to get the user role
    const fetchUserRole = async () => {
      try {
        const response = await fetch(`/api/getUserRole?clerk_id=${clerkId}`); // Replace with actual API endpoint
        const data = await response.json();
        if (data?.role) {
          setUserRole(data.role); // Set the user role
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole(); // Fetch user role when the component mounts
  }, []);

  return (
    <>
      <div style={{ display: `${lateLoad ? "block" : "none"}` }}>
        <Switcher />
        <div className="page">
          <Header />
          {/* Conditionally render the sidebar based on the user role */}
          {userRole === "HR" ? (
            <HRSidebar />
          ) : userRole === "employee" ? (
            <EmployeeSidebar />
          ) : (
            <CandidateSidebar />
          )}
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
