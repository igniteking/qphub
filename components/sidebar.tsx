import Link from "next/link";
import React, { Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import SimpleBar from "simplebar-react";

const sidebar = () => {
  return (
    <Fragment>
      <div
        id="responsive-overlay"
        // onClick={() => {
        //   menuClose();
        // }}
      ></div>
      <aside className="app-sidebar sticky " id="sidebar">
        {/* Start::main-sidebar-header  */}

        {/* LOGO HERE */}
        <div className="main-sidebar-header">
          <Link scroll={false} href="/dashboard/" className="header-logo">
            <img
              src={`/assets/images/brand-logos/desktop-logo.png`}
              alt="logo"
              className="desktop-logo"
            />
            <img
              src={`/assets/images/brand-logos/toggle-dark.png`}
              alt="logo"
              className="toggle-dark"
            />
            <img
              src={`/assets/images/brand-logos/desktop-dark.png`}
              alt="logo"
              className="desktop-dark"
            />
            <img
              src={`/assets/images/brand-logos/toggle-logo.png`}
              alt="logo"
              className="toggle-logo"
            />
          </Link>
        </div>
        {/* End::main-sidebar-header  */}

        {/* Start::main-sidebar  */}
        <SimpleBar className="main-sidebar" id="sidebar-scroll">
          {/* Start::nav  */}
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div
              className="slide-left"
              id="slide-left"
              //   onClick={() => {
              //     slideLeft();
              //   }}
            >
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
              <Fragment>
                <li className="slide__category link has-sub open active">
                  <span className="category-name">Dashboard</span>
                  <Fragment>
                    <Link
                      href="#!"
                      scroll={false}
                      className={`side-menu__item active`}
                    >
                      <i className="ri-arrow-down-s-line side-menu__angle"></i>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id="button-tooltip">Dashboard</Tooltip>
                        }
                      >
                        <div className="d-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="side-menu__icon"
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                          >
                            <path
                              d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
                              opacity="0.2"
                            ></path>
                            <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                          </svg>
                        </div>
                      </OverlayTrigger>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
                          opacity="0.2"
                        ></path>
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                      </svg>

                      <span className={"side-menu__label"}>
                        {" "}
                        Dashboard{" "}
                        <span className="badge bg-secondary ms-2 shadow-secondary">
                          3{" "}
                        </span>
                      </span>
                    </Link>
                    <ul className={`slide-menu child double-menu-active`}>
                      <li className="slide side-menu__label1">
                        <Link href="#!" scroll={false}>
                          MenuItems.title
                        </Link>
                      </li>

                      <li
                        className={"slide__category empty link sub open active"}
                      >
                        <Link href={"/"} className={`side-menu__item active"`}>
                          <span className=""> title </span>
                        </Link>
                      </li>
                    </ul>
                  </Fragment>
                  <Fragment>
                    <Link
                      href="#!"
                      scroll={false}
                      className={`side-menu__item active`}
                    >
                      <i className="ri-arrow-down-s-line side-menu__angle"></i>
                      <OverlayTrigger
                        placement="right"
                        overlay={
                          <Tooltip id="button-tooltip">Dashboard</Tooltip>
                        }
                      >
                        <div className="d-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="side-menu__icon"
                            width="32"
                            height="32"
                            viewBox="0 0 256 256"
                          >
                            <path
                              d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
                              opacity="0.2"
                            ></path>
                            <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                          </svg>
                        </div>
                      </OverlayTrigger>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="side-menu__icon"
                        width="32"
                        height="32"
                        viewBox="0 0 256 256"
                      >
                        <path
                          d="M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z"
                          opacity="0.2"
                        ></path>
                        <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
                      </svg>

                      <span className={"side-menu__label"}>
                        {" "}
                        Dashboard{" "}
                        <span className="badge bg-secondary ms-2 shadow-secondary">
                          3{" "}
                        </span>
                      </span>
                    </Link>
                    <ul className={`slide-menu child double-menu-active`}>
                      <li className="slide side-menu__label1">
                        <Link href="#!" scroll={false}>
                          MenuItems.title
                        </Link>
                      </li>

                      <li
                        className={"slide__category empty link sub open active"}
                      >
                        <Link href={"/"} className={`side-menu__item active"`}>
                          <span className=""> title </span>
                        </Link>
                      </li>
                    </ul>
                  </Fragment>
                </li>
              </Fragment>
            </ul>
            <div
              className="slide-right"
              id="slide-right"
              //   onClick={() => {
              //     slideRight();
              //   }}
            >
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
          </nav>
          {/* End::nav  */}
        </SimpleBar>
        {/* End::main-sidebar  */}
      </aside>
    </Fragment>
  );
};

export default sidebar;
