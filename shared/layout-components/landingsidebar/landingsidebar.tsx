"use client";
import store from "@/shared/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { ThemeChanger } from "@/shared/redux/action";
import { connect } from "react-redux";
import nextConfig from "@/next.config.mjs";
import { Ecommercemenuitems } from "@/shared/sidebardata";

const Landingsidebar = ({ ThemeChanger }: any) => {
  let { basePath } = nextConfig;
  //Switcher
  const Switchericon = () => {
    document.querySelector(".offcanvas-end")?.classList.toggle("show");
    if (
      document.querySelector(".switcher-backdrop")?.classList.contains("d-none")
    ) {
      document.querySelector(".switcher-backdrop")?.classList.add("d-block");
      document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
    }
  };

  const Currentpath = usePathname();

  //
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Menuclose
  const [menuitems, setMenuitems] = useState(Ecommercemenuitems);
  function closeMenu() {
    const closeMenudata = (items: any) => {
      items?.forEach((item: any) => {
        item.active = false;
        closeMenudata(item.children);
      });
    };
    closeMenudata(Ecommercemenuitems);
    setMenuitems((arr: any) => [...arr]);
  }
  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    const overlayElement = document.querySelector(
      "#responsive-overlay"
    ) as HTMLElement | null;
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
    if (
      theme.dataNavLayout == "horizontal" ||
      theme.dataNavStyle == "menu-click" ||
      theme.dataNavStyle == "icon-click"
    ) {
      closeMenu();
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 992) {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          toggled: "close",
          dataNavLayout: "horizontal",
        });
      } else {
        const theme = store.getState();
        ThemeChanger({
          ...theme,
          toggled: "open",
          dataNavLayout: "horizontal",
        });
      }
    }

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    // handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const landingpages = () => {
      if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
        let Scolls = document?.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.add("sticky-pin");
        });
      } else {
        let Scolls = document?.querySelectorAll(".sticky");
        Scolls.forEach((e) => {
          e.classList.remove("sticky-pin");
        });
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", landingpages);
    }
  });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains("side-menu__item")) {
        const parent = target.parentElement;
        if (parent) {
          const ulElement = parent.querySelector("ul");
          if (ulElement && window.innerWidth <= 991) {
            ulElement.classList.toggle("d-block");
          }
          console.log(ulElement?.parentNode?.querySelector("ul"), "sibling");
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <Fragment>
      <div
        id="responsive-overlay"
        onClick={() => {
          menuClose();
        }}
      ></div>
      {/* classifieds sidebar */}
      {/* <!-- Start::app-sidebar --> */}
      {Currentpath.includes("classifieds") ? (
        <aside className="app-sidebar sticky" id="sidebar">
          <div className="container p-0">
            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar">
              {/* <!-- Start::nav --> */}
              <nav className="main-menu-container nav nav-pills sub-open">
                <div className="landing-logo-container">
                  <div className="horizontal-logo">
                    <Link
                      scroll={false}
                      href="/dashboards/sales/"
                      className="header-logo"
                    >
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-logo.png`}
                        alt="logo"
                        className="desktop-logo"
                      />
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-dark.png`}
                        alt="logo"
                        className="desktop-dark"
                      />
                    </Link>
                  </div>
                </div>
                <div className="slide-left" id="slide-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                  </svg>
                </div>
                <ul className="main-menu flex-fill">
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link
                      scroll={false}
                      className="side-menu__item active"
                      href="#!"
                    >
                      <span className="side-menu__label">Home</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Categories</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">All Ads</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide has-sub">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Pages</span>
                      <i className="fe fe-chevron-down side-menu__angle"></i>
                    </Link>
                    <ul className="slide-menu child1 active">
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Abous Us
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Add Details
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Add Post
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          404
                        </Link>
                      </li>
                      <li className="slide has-sub">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Level-2
                          <i className="fe fe-chevron-right side-menu__angle"></i>
                        </Link>
                        <ul className="slide-menu child2 active">
                          <li className="slide">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-1
                            </Link>
                          </li>
                          <li className="slide has-sub">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-2
                              <i className="fe fe-chevron-right side-menu__angle"></i>
                            </Link>
                            <ul className="slide-menu child3">
                              <li className="slide">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-1
                                </Link>
                              </li>
                              <li className="slide has-sub">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-2
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide has-sub">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Blog</span>
                      <i className="fe fe-chevron-down side-menu__angle"></i>
                    </Link>
                    <ul className="slide-menu child1 active">
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Blog Details
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Blog Post
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Contact Us</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                </ul>
                <div className="slide-right" id="slide-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                  </svg>
                </div>
                <div className="d-lg-flex d-none align-items-center">
                  {/* <!-- Start::header-link --> */}
                  <Link
                    scroll={false}
                    href="#!"
                    className="me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--primary-color)"
                        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                      />
                    </svg>
                  </Link>
                  {/* <!-- End::header-link --> */}
                  {/* <!-- Start::dropdown --> */}
                  <Dropdown className="country-selector dropdown">
                    {/* <!-- Start::dropdown-toggle --> */}
                    <Dropdown.Toggle
                      variant=""
                      href="#!"
                      className="btn btn-wave btn-light border btn-country dropdown-toggle me-2"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </Dropdown.Toggle>
                    {/* <!-- End::dropdown-toggle --> */}
                    <Dropdown.Menu
                      className="main-header-dropdown dropdown-menu py-2"
                      data-popper-placement="none"
                    >
                      <li>
                        <Dropdown.Item href="#!">English</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Spanish</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">French</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">German</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Italian</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Russian</Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- End::dropdown -->   */}

                  <div className="btn-list d-xl-flex d-none">
                    <Link
                      scroll={false}
                      href="/authentication/signin/signin-basic/"
                      className="btn btn-wave btn-light border"
                    >
                      Login / Register
                    </Link>
                    <Button variant="" className="btn btn-wave btn-primary">
                      <i className="bi bi-plus-circle me-2"></i>Post Your Ad
                    </Button>
                  </div>

                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-secondary-light switcher-icon"
                    onClick={() => Switchericon()}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                  >
                    <i className="ti ti-settings"></i>
                  </Link>
                </div>
              </nav>
              {/* <!-- End::nav --> */}
            </div>
            {/* <!-- End::main-sidebar --> */}
          </div>
        </aside>
      ) : (
        ""
      )}
      {/* <!-- End::app-sidebar --> */}
      {/* end classifieds sidebar */}

      {/* Domain sidebar */}
      {/* <!-- Start::app-sidebar --> */}
      {Currentpath.includes("domain") ? (
        <aside className="app-sidebar sticky" id="sidebar">
          <div className="container p-0">
            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar">
              {/* <!-- Start::nav --> */}
              <nav className="main-menu-container nav nav-pills sub-open">
                <div className="landing-logo-container">
                  <div className="horizontal-logo">
                    <Link
                      scroll={false}
                      href="/dashboards/sales/"
                      className="header-logo"
                    >
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-logo.png`}
                        alt="logo"
                        className="desktop-logo"
                      />
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-dark.png`}
                        alt="logo"
                        className="desktop-dark"
                      />
                    </Link>
                  </div>
                </div>
                <div className="slide-left" id="slide-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                  </svg>
                </div>
                <ul className="main-menu">
                  {/* <!-- Start::slide --> */}
                  <li className="slide ">
                    <Link
                      scroll={false}
                      className="side-menu__item active"
                      href="/domain/landing/"
                    >
                      <span className="side-menu__label">Home</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Buy Domains</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Sell Domains</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Blog</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide has-sub">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Pages</span>
                      <i className="fe fe-chevron-down side-menu__angle"></i>
                    </Link>
                    <ul className="slide-menu child1 active">
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Abous Us
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="slide has-sub">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Level-2
                          <i className="fe fe-chevron-right side-menu__angle"></i>
                        </Link>
                        <ul className="slide-menu child2 active">
                          <li className="slide">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-1
                            </Link>
                          </li>
                          <li className="slide has-sub">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-2
                              <i className="fe fe-chevron-right side-menu__angle"></i>
                            </Link>
                            <ul className="slide-menu child3">
                              <li className="slide">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-1
                                </Link>
                              </li>
                              <li className="slide has-sub">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-2
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Contact Us</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                </ul>
                <div className="slide-right" id="slide-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                  </svg>
                </div>
                <div className="d-lg-flex d-none align-items-center">
                  {/* <!-- Start::header-link --> */}
                  <Link
                    scroll={false}
                    href="#!"
                    className="me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--primary-color)"
                        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                      />
                    </svg>
                  </Link>
                  {/* <!-- End::header-link --> */}
                  {/* <!-- Start::dropdown --> */}
                  <Dropdown className="country-selector">
                    {/* <!-- Start::dropdown-toggle --> */}
                    <Dropdown.Toggle
                      variant=""
                      href="#!"
                      className="btn btn-wave btn-light border btn-country dropdown-toggle me-2"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </Dropdown.Toggle>
                    {/* <!-- End::dropdown-toggle --> */}
                    <Dropdown.Menu
                      className="main-header-dropdown dropdown-menu py-2"
                      data-popper-placement="none"
                    >
                      <li>
                        <Dropdown.Item href="#!">English</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Spanish</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">French</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">German</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Italian</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Russian</Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- End::dropdown -->*/}
                  <div className="btn-list d-xl-flex d-none">
                    <Button
                      variant=""
                      className="btn btn-wave btn-light border"
                    >
                      Login
                    </Button>
                    <Button variant="" className="btn btn-wave btn-primary">
                      Register
                    </Button>
                  </div>

                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-secondary-light switcher-icon"
                    onClick={() => Switchericon()}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                  >
                    <i className="ti ti-settings"></i>
                  </Link>
                </div>
              </nav>
              {/* <!-- End::nav --> */}
            </div>
            {/* <!-- End::main-sidebar --> */}
          </div>
        </aside>
      ) : (
        ""
      )}
      {/* <!-- End::app-sidebar --> */}
      {/* End Domain sidebar */}

      {/* Marketplace sidebar */}
      {/* <!-- Start::app-sidebar --> */}
      {Currentpath.includes("marketplace") ? (
        <aside className="app-sidebar sticky" id="sidebar">
          <div className="container-xl">
            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar">
              {/* <!-- Start::nav --> */}
              <nav className="main-menu-container nav nav-pills sub-open">
                <div className="landing-logo-container">
                  <div className="horizontal-logo">
                    <Link
                      scroll={false}
                      href="/dashboards/sales/"
                      className="header-logo"
                    >
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-logo.png`}
                        alt="logo"
                        className="desktop-logo"
                      />
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-dark.png`}
                        alt="logo"
                        className="desktop-dark"
                      />
                    </Link>
                  </div>
                </div>
                <div className="slide-left" id="slide-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                  </svg>
                </div>
                <ul className="main-menu flex-fill">
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link
                      scroll={false}
                      className="side-menu__item active"
                      href="#!"
                    >
                      <span className="side-menu__label">Home</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Categories</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Shop</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide has-sub">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Pages</span>
                      <i className="fe fe-chevron-down side-menu__angle"></i>
                    </Link>
                    <ul className="slide-menu child1 active">
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Abous Us
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="slide has-sub">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Level-2
                          <i className="fe fe-chevron-right side-menu__angle"></i>
                        </Link>
                        <ul className="slide-menu child2 active">
                          <li className="slide">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-1
                            </Link>
                          </li>
                          <li className="slide has-sub">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-2
                              <i className="fe fe-chevron-right side-menu__angle"></i>
                            </Link>
                            <ul className="slide-menu child3">
                              <li className="slide">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-1
                                </Link>
                              </li>
                              <li className="slide has-sub">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-2
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Subscription</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Contact Us</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                </ul>
                <div className="slide-right" id="slide-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                  </svg>
                </div>
                <div className="d-lg-flex d-none align-items-center">
                  {/* <!-- Start::header-link --> */}
                  <Link
                    scroll={false}
                    href="#!"
                    className="me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--primary-color)"
                        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                      />
                    </svg>
                  </Link>
                  {/* <!-- End::header-link --> */}
                  {/* <!-- Start::dropdown --> */}
                  <Dropdown className="country-selector dropdown">
                    {/* <!-- Start::dropdown-toggle --> */}
                    <Dropdown.Toggle
                      variant=""
                      href="#!"
                      className="btn btn-wave btn-light border btn-country dropdown-toggle me-2"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </Dropdown.Toggle>
                    {/* <!-- End::dropdown-toggle --> */}
                    <Dropdown.Menu
                      className="main-header-dropdown py-2"
                      data-popper-placement="none"
                    >
                      <li>
                        <Dropdown.Item href="#!">English</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Spanish</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">French</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">German</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Italian</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Russian</Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- End::dropdown --> */}
                  <div className="btn-list d-xl-flex d-none">
                    <Link
                      scroll={false}
                      href="/authentication/signin/signin-basic/"
                      className="btn btn-wave btn-light border"
                    >
                      Login / Register
                    </Link>
                    <Button variant="" className="btn btn-wave btn-primary">
                      <i className="bi bi-plus-circle me-2"></i>Become A Seller
                    </Button>
                  </div>

                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-secondary-light switcher-icon"
                    onClick={() => Switchericon()}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                  >
                    <i className="ti ti-settings"></i>
                  </Link>
                </div>
              </nav>
              {/* <!-- End::nav --> */}
            </div>
            {/* <!-- End::main-sidebar --> */}
          </div>
        </aside>
      ) : (
        ""
      )}

      {/* <!-- End::app-sidebar --> */}
      {/* End Marketplace sidebar */}

      {/* Realestate sidebar */}
      {/* <!-- Start::app-sidebar --> */}
      {Currentpath.includes("realestate") ? (
        <aside className="app-sidebar sticky" id="sidebar">
          <div className="container-xl">
            {/* <!-- Start::main-sidebar --> */}
            <div className="main-sidebar">
              {/* <!-- Start::nav --> */}
              <nav className="main-menu-container nav nav-pills sub-open">
                <div className="landing-logo-container">
                  <div className="horizontal-logo">
                    <Link
                      scroll={false}
                      href="/dashboards/sales/"
                      className="header-logo"
                    >
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-logo.png`}
                        alt="logo"
                        className="desktop-logo"
                      />
                      <img
                        src={`${
                          process.env.NODE_ENV === "production" ? basePath : ""
                        }/assets/images/brand-logos/desktop-dark.png`}
                        alt="logo"
                        className="desktop-dark"
                      />
                    </Link>
                  </div>
                </div>
                <div className="slide-left" id="slide-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
                  </svg>
                </div>
                <ul className="main-menu flex-fill ms-lg-5">
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link
                      scroll={false}
                      className="side-menu__item active"
                      href="#!"
                    >
                      <span className="side-menu__label">Home</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Properties</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Buy</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Rent</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide has-sub">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Pages</span>
                      <i className="fe fe-chevron-down side-menu__angle"></i>
                    </Link>
                    <ul className="slide-menu child1 active">
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Abous Us
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="slide">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="slide has-sub">
                        <Link
                          scroll={false}
                          href="#!"
                          className="side-menu__item"
                        >
                          Level-2
                          <i className="fe fe-chevron-right side-menu__angle"></i>
                        </Link>
                        <ul className="slide-menu child2 active">
                          <li className="slide">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-1
                            </Link>
                          </li>
                          <li className="slide has-sub">
                            <Link
                              scroll={false}
                              href="#!"
                              className="side-menu__item"
                            >
                              Level-2-2
                              <i className="fe fe-chevron-right side-menu__angle"></i>
                            </Link>
                            <ul className="slide-menu child3">
                              <li className="slide">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-1
                                </Link>
                              </li>
                              <li className="slide has-sub">
                                <Link
                                  scroll={false}
                                  href="#!"
                                  className="side-menu__item"
                                >
                                  Level-2-2-2
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Agents</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                  {/* <!-- Start::slide --> */}
                  <li className="slide">
                    <Link scroll={false} href="#!" className="side-menu__item">
                      <span className="side-menu__label">Contact Us</span>
                    </Link>
                  </li>
                  {/* <!-- End::slide --> */}
                </ul>
                <div className="slide-right" id="slide-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
                  </svg>
                </div>
                <div className="d-lg-flex d-none align-items-center">
                  {/* <!-- Start::header-link --> */}
                  <Link
                    scroll={false}
                    href="#!"
                    className="me-3"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                    onClick={handleShow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="var(--primary-color)"
                        d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"
                      />
                    </svg>
                  </Link>
                  {/* <!-- End::header-link --> */}
                  {/* <!-- Start::dropdown --> */}
                  <Dropdown className="country-selector">
                    {/* <!-- Start::dropdown-toggle --> */}
                    <Dropdown.Toggle
                      variant=""
                      href="#!"
                      className="btn btn-wave btn-light border btn-country me-2"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </Dropdown.Toggle>
                    {/* <!-- End::dropdown-toggle --> */}
                    <Dropdown.Menu
                      className="main-header-dropdown py-2"
                      data-popper-placement="none"
                    >
                      <li>
                        <Dropdown.Item href="#!">English</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Spanish</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">French</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">German</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Italian</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#!">Russian</Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- End::dropdown -->*/}
                  <div className="btn-list d-xl-flex d-none">
                    <Button
                      variant=""
                      className="btn btn-wave btn-light border"
                    >
                      Login / Register
                    </Button>
                    <Button variant="" className="btn btn-wave btn-primary">
                      <i className="bi bi-plus-circle me-2"></i>Post Property
                    </Button>
                  </div>

                  <Link
                    scroll={false}
                    href="#!"
                    className="btn btn-icon btn-secondary-light switcher-icon"
                    onClick={() => Switchericon()}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#switcher-canvas"
                  >
                    <i className="ti ti-settings"></i>
                  </Link>
                </div>
              </nav>
              {/* <!-- End::nav --> */}
            </div>
            {/* <!-- End::main-sidebar --> */}
          </div>
        </aside>
      ) : (
        ""
      )}

      {/* <!-- End::app-sidebar --> */}
      {/* End Realestate sidebar */}

      {/* <!-- Start:: Search Modal --> */}
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        className="fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="searchModal"
        aria-hidden="true"
      >
        <Modal.Body className="p-4">
          <span className="input-group">
            <input
              type="text"
              className="form-control form-control-lg border-0 shadow-none"
              placeholder="Search"
              aria-label="Username"
            />
            <Link
              scroll={false}
              href="#!"
              className="input-group-text border-0"
              id="voice-search"
            >
              <i className="fe fe-mic header-link-icon"></i>
            </Link>
          </span>
          <div className="mt-4">
            <p className="font-weight-semibold text-muted mb-2">
              Are You Looking For...
            </p>
            <Link scroll={false} href="#!" className="search-tags">
              Popular Articles
            </Link>
            <Link scroll={false} href="#!" className="search-tags">
              Recent Articles
            </Link>
            <Link scroll={false} href="#!" className="search-tags">
              News and Updates
            </Link>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <div className="ms-auto">
            <button className="btn btn-lg btn-primary">Search</button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* <!-- End:: Search Modal --> */}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Landingsidebar);
// export default Landingsidebar
