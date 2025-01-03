import React from "react";
import { CDBSidebar } from "cdbreact";

const Testing = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" className={""} breakpoint={0} toggled={false} minWidth={""} maxWidth={""}>
        <div>Test Sidebar</div>
      </CDBSidebar>
    </div>
  );
};

export default Testing;
