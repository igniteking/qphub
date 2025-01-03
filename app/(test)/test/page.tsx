"use client";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Fragment } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

const Testing = () => {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Testing;
