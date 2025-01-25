"use client";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import Footer from "@/shared/layout-components/footer/footer";
import Header from "@/shared/layout-components/header/header";
import CandidateSidebar from "@/shared/layout-components/candidate-sidebar/sidebar";
import EmployeeSidebar from "@/shared/layout-components/employee-sidebar/sidebar";
import HRSidebar from "@/shared/layout-components/hr-sidebar/sidebar";
import Switcher from "@/shared/layout-components/switcher/switcher";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const Layout = ({ children }: any) => {
  const [lateLoad, setLateLoad] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null); // State to store user role
  const { user } = useUser(); // Get the user object from Clerk
  useEffect(() => {
    if (!user) {
      console.error("User is not authenticated.");
      return;
    }

    setLateLoad(true);

    const fetchUserRole = async () => {
      try {
        const clerkId = user?.id; // Get the Clerk ID

        if (!clerkId) {
          console.error("Clerk ID is undefined or empty.");
          return;
        }

        // Construct the URL for the API call
        const url = `${process.env.NEXT_PUBLIC_MYSQL_URL}/getUserRole.php?clerk_id=${clerkId}`;

        const response = await fetch(url);

        if (!response.ok) {
          console.error(
            `Error: Received status ${response.status} from the server.`
          );
          return;
        }

        const data = await response.json();

        if (data?.role) {
          setUserRole(data.role); // Set the user role
        } else {
          console.error("Role not found in the response:", data);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserRole(); // Fetch user role when the component mounts
  }, [user]); // Add `user` as a dependency to ensure reactivity

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
