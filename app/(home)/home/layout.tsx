"use client";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import Landingfooter from "@/shared/layout-components/landingfooter/landingfooter";
import Landingsidebar from "@/shared/layout-components/landingsidebar/landingsidebar";
import { ThemeChanger } from "@/shared/redux/action";
import store from "@/shared/redux/store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavLink,
} from "react-bootstrap";
import { connect } from "react-redux";

const Layout = ({ children, ThemeChanger }: any) => {
  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      dataNavStyle: "menu-hover",
      dataNavLayout: "horizontal",
      dataHeaderStyles: "",
      dataVerticalStyle: "",
      body: "landing-body",
    });

    return () => {
      ThemeChanger({
        ...theme,
        dataNavStyle: "",
        dataVerticalStyle: "",
        dataHeaderStyles: "",
        dataNavLayout: `${
          localStorage.mamixlayout == "horizontal" ? "horizontal" : "vertical"
        }`,
        body: "",
      });
    };
  }, []);

  const Currentpath = usePathname();
  const [lateLoad, setlateLoad] = useState(false);
  useEffect(() => {
    setlateLoad(true);
  });
  //Alert
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <Fragment>
      <div>
        {/* <Landingswitcher /> */}
        <div className="landing-page-wrapper">
          <header>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container fluid>
                <NavbarBrand href="#">
                  <Image
                    width={100}
                    height={100}
                    alt="main-logo"
                    src="/qphub-logo/logo.png"
                  />
                </NavbarBrand>
                <NavbarToggle aria-controls="navbarScroll" />
                <NavbarCollapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <NavLink href="/landing">Home</NavLink>
                  </Nav>
                  <Button variant="outline-primary">Employee Sign Up</Button>
                  <Button variant="outline-secondary" className="m-2">
                    Login
                  </Button>
                </NavbarCollapse>
              </Container>
            </Navbar>
          </header>
          <Landingsidebar />
          <div className="main-content landing-main px-0">{children}</div>
          <Landingfooter />
        </div>
        <Backtotop />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Layout);
