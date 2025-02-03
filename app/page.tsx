"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { Fragment, useState } from "react";
import {
  Navbar,
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  FormControl,
  NavLink,
  DropdownDivider,
  Dropdown,
  Accordion,
  Card,
  Col,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(-1); // Initialize with -1 for no item expanded

  const toggleDropdown = (index: any) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };
  return (
    <Fragment>
      <html>
        <body></body>
      </html>
    </Fragment>
  );
}
