"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Dropdown,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
import Seo from "@/shared/layout-components/seo/seo";
const Landing = () => {
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
      <Seo title={"Home"} />
      {/* Start:: Landing Banner */}
      <div className="landing-banner ad-search-container">
        <section className="section">
          <div className="container main-banner-container">
            <div className="row justify-content-center">
              <Col xxl={9}>
                <div className="">
                  <div className="text-center">
                    <p className="landing-banner-heading mb-3 text-fixed-white">
                      {" "}
                      Buy, Sell, Rent & Exchange in one click
                    </p>
                    <p className="fs-15 mb-5 op-7 text-fixed-white">
                      Search from over 12,00,000 classifieds & Post unlimited
                      classifieds free!
                    </p>
                  </div>
                  <div className="input-group group-search d-xl-flex">
                    <div className="category-dropdown-wrapper">
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-lg btn-wave btn-white shadow-none categorydropdown border-0"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <i className="ri-function-line me-2 text-primary"></i>
                        All Categories
                        <i className="ri-arrow-down-s-line align-middle ms-1"></i>
                      </Link>
                      <ul className="categories-dropdowns">
                        <li className="category-dropdown">
                          <ul
                            className={`main-dropdown ${
                              isOpen ? "d-block" : "d-none"
                            }`}
                            id="dropdown-toggle"
                          >
                            <li onClick={() => toggleDropdown(0)}>
                              <div
                                className={`categories-dropdowns__item ${
                                  expandedIndex === 0 ? "is-expanded" : ""
                                }`}
                              >
                                <span className="me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                  >
                                    <rect
                                      width="256"
                                      height="256"
                                      fill="none"
                                    ></rect>
                                    <path
                                      d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184Z"
                                      opacity="0.2"
                                    ></path>
                                    <path
                                      d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184Z"
                                      opacity="0.2"
                                    ></path>
                                    <rect
                                      x="48"
                                      y="72"
                                      width="160"
                                      height="40"
                                      opacity="0.2"
                                    ></rect>
                                    <line
                                      x1="48"
                                      y1="72"
                                      x2="208"
                                      y2="72"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="48"
                                      y1="112"
                                      x2="208"
                                      y2="112"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <path
                                      d="M208,184H48V64A24,24,0,0,1,72,40H184a24,24,0,0,1,24,24Z"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M208,184v24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V184"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M88,184v24a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V184"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <circle cx="92" cy="148" r="12"></circle>
                                    <circle cx="164" cy="148" r="12"></circle>
                                    <line
                                      x1="240"
                                      y1="80"
                                      x2="240"
                                      y2="104"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="16"
                                      y1="80"
                                      x2="16"
                                      y2="104"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                  </svg>
                                </span>
                                Vehicles
                                <span className="float-end">
                                  <i className="bi bi-chevron-right"></i>
                                </span>
                              </div>
                              <ul className="category-menu">
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Cars
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Bikes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Motor Cycles
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Buses
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li onClick={() => toggleDropdown(1)}>
                              <div
                                className={`categories-dropdowns__item ${
                                  expandedIndex === 1 ? "is-expanded" : ""
                                }`}
                              >
                                <span className="me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                  >
                                    <rect
                                      width="256"
                                      height="256"
                                      fill="none"
                                    ></rect>
                                    <path
                                      d="M200,48H176v56a8,8,0,0,1-13.12,6.15L128,80,93.12,110.13A8,8,0,0,1,80,104V48H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Z"
                                      opacity="0.2"
                                    ></path>
                                    <polygon
                                      points="96 32 160 32 128 80 96 32"
                                      opacity="0.2"
                                    ></polygon>
                                    <path
                                      d="M128,80l32-48,16,16v56a8,8,0,0,1-13.12,6.15Z"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M93.12,110.13A8,8,0,0,1,80,104V48L96,32l32,48Z"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <line
                                      x1="128"
                                      y1="80"
                                      x2="128"
                                      y2="216"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <path
                                      d="M176,48h24a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H80"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <line
                                      x1="96"
                                      y1="32"
                                      x2="160"
                                      y2="32"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                  </svg>
                                </span>
                                Clothing &amp; Jewellery
                                <span className="float-end">
                                  <i className="bi bi-chevron-right"></i>
                                </span>
                              </div>
                              <ul className="category-menu">
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Accessories
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Men Clothing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Women Clothing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Men Shoes
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Women Shoes
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li onClick={() => toggleDropdown(2)}>
                              <div
                                className={`categories-dropdowns__item ${
                                  expandedIndex === 2 ? "is-expanded" : ""
                                }`}
                              >
                                <span className="me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                  >
                                    <rect
                                      width="256"
                                      height="256"
                                      fill="none"
                                    ></rect>
                                    <circle
                                      cx="212"
                                      cy="108"
                                      r="20"
                                      opacity="0.2"
                                    ></circle>
                                    <circle
                                      cx="44"
                                      cy="108"
                                      r="20"
                                      opacity="0.2"
                                    ></circle>
                                    <circle
                                      cx="92"
                                      cy="60"
                                      r="20"
                                      opacity="0.2"
                                    ></circle>
                                    <circle
                                      cx="164"
                                      cy="60"
                                      r="20"
                                      opacity="0.2"
                                    ></circle>
                                    <path
                                      d="M128,104A36,36,0,0,0,93.43,130a43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62A43.46,43.46,0,0,1,162.57,130,36,36,0,0,0,128,104Z"
                                      opacity="0.2"
                                    ></path>
                                    <circle
                                      cx="212"
                                      cy="108"
                                      r="20"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></circle>
                                    <circle
                                      cx="44"
                                      cy="108"
                                      r="20"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></circle>
                                    <circle
                                      cx="92"
                                      cy="60"
                                      r="20"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></circle>
                                    <circle
                                      cx="164"
                                      cy="60"
                                      r="20"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></circle>
                                    <path
                                      d="M128,104A36,36,0,0,0,93.43,130a43.49,43.49,0,0,1-20.67,25.9,32,32,0,0,0,27.73,57.62,72.49,72.49,0,0,1,55,0,32,32,0,0,0,27.73-57.62A43.46,43.46,0,0,1,162.57,130,36,36,0,0,0,128,104Z"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                  </svg>
                                </span>
                                Pets
                                <span className="float-end">
                                  <i className="bi bi-chevron-right"></i>
                                </span>
                              </div>
                              <ul className="category-menu">
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Birds
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Cats
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Fish
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Rabbit
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Dogs
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li onClick={() => toggleDropdown(3)}>
                              <div
                                className={`categories-dropdowns__item ${
                                  expandedIndex === 3 ? "is-expanded" : ""
                                }`}
                              >
                                <span className="me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                  >
                                    <rect
                                      width="256"
                                      height="256"
                                      fill="none"
                                    ></rect>
                                    <path
                                      d="M136,216V32a8,8,0,0,0-12.44-6.65l-80,53.33A8,8,0,0,0,40,85.35V216Z"
                                      opacity="0.2"
                                    ></path>
                                    <path
                                      d="M136,216V32a8,8,0,0,0-12.44-6.65l-80,53.33A8,8,0,0,0,40,85.35V216"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M136,88h72a8,8,0,0,1,8,8V216"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <line
                                      x1="16"
                                      y1="216"
                                      x2="240"
                                      y2="216"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="104"
                                      y1="112"
                                      x2="104"
                                      y2="128"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="72"
                                      y1="112"
                                      x2="72"
                                      y2="128"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="72"
                                      y1="168"
                                      x2="72"
                                      y2="184"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="104"
                                      y1="168"
                                      x2="104"
                                      y2="184"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                  </svg>
                                </span>
                                Real Estate
                                <span className="float-end">
                                  <i className="bi bi-chevron-right"></i>
                                </span>
                              </div>
                              <ul className="category-menu">
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Land
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Flat
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Houses
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Shops
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li onClick={() => toggleDropdown(4)}>
                              <div
                                className={`categories-dropdowns__item ${
                                  expandedIndex === 4 ? "is-expanded" : ""
                                }`}
                              >
                                <span className="me-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                  >
                                    <rect
                                      width="256"
                                      height="256"
                                      fill="none"
                                    ></rect>
                                    <path
                                      d="M60.06,195.91a96,96,0,0,1-.12-135.65h0a95.7,95.7,0,0,1,28,67.76,95.74,95.74,0,0,1-28,67.77Z"
                                      opacity="0.2"
                                    ></path>
                                    <path
                                      d="M196.06,195.91a96,96,0,0,1-.12-135.65h0a96,96,0,0,1,0,135.53Z"
                                      opacity="0.2"
                                    ></path>
                                    <circle
                                      cx="128"
                                      cy="128"
                                      r="96"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></circle>
                                    <path
                                      d="M60,60.24A95.7,95.7,0,0,1,88,128a95.7,95.7,0,0,1-28,67.76"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <path
                                      d="M196,60.24a96,96,0,0,0,0,135.52"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></path>
                                    <line
                                      x1="32"
                                      y1="128"
                                      x2="224"
                                      y2="128"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                    <line
                                      x1="128"
                                      y1="32"
                                      x2="128"
                                      y2="224"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="16"
                                    ></line>
                                  </svg>
                                </span>
                                Sports
                                <span className="float-end">
                                  <i className="bi bi-chevron-right"></i>
                                </span>
                              </div>
                              <ul className="category-menu">
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Bicycle
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Fishing
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Golf
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    scroll={false}
                                    href="#!"
                                    className="category-item"
                                  >
                                    Gym &amp; Fitness
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="custom-form-group flex-grow-1">
                      <input
                        type="text"
                        className="form-control form-control-lg shadow-none border-0 border-end border-start"
                        placeholder="Enter Your Keyword Here.."
                        aria-label="Recipient's username"
                      />
                    </div>
                    <div className="custom-form-group flex-grow-1">
                      <input
                        type="text"
                        className="form-control form-control-lg shadow-none border-0"
                        id="input-placeholder"
                        placeholder="Search by Location..."
                      />
                      <div className="custom-form-btn border-0">
                        <Link scroll={false} href="#!" className="gps-location">
                          <i className="ti ti-current-location"></i>
                        </Link>
                        <Dropdown className="ad-dropdown">
                          <Dropdown.Toggle
                            variant=""
                            href="#!"
                            className="btn text-default btn-wave no-caret"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            5km
                            <i className="ri-arrow-down-s-line align-middle ms-1"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu role="menu">
                            <li>
                              <Dropdown.Item href="#!">0km</Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item href="#!">2km</Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item active href="#!">
                                5km
                              </Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item href="#!">10km</Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item href="#!">20km</Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item href="#!">50km</Dropdown.Item>
                            </li>
                            <li>
                              <Dropdown.Item href="#!">100km</Dropdown.Item>
                            </li>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <Button
                      variant=""
                      className="btn btn-lg btn-secondary border-0 shadow-sm search-btn"
                      type="button"
                    >
                      <i className="bi bi-search"></i>
                    </Button>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </section>
      </div>
      {/* End:: Landing Banner */}

      {/* Start:: Section-1 */}
      <section className="section bg-white">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
            <div className="flex-fill">
              <p className="fs-12 fw-semibold mb-1 text-gradient">
                Find Ads by Categories
              </p>
              <h3 className="fw-semibold mb-0">Browse Ads by Top Categories</h3>
              <p className="text-muted mb-0">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
            <div>
              <Link
                scroll={false}
                href="#!"
                className="btn btn-wave btn-primary"
              >
                View All Categories <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="row text-start">
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon primary mb-3">
                    <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M19,2H5C3.3438721,2.0018311,2.0018311,3.3438721,2,5v10c0.0018311,1.6561279,1.3438721,2.9981689,3,3h3v3H4.5C4.223877,21,4,21.223877,4,21.5S4.223877,22,4.5,22h15c0.276123,0,0.5-0.223877,0.5-0.5S19.776123,21,19.5,21H16v-3h3c1.6561279-0.0018311,2.9981689-1.3438721,3-3V5C21.9981689,3.3438721,20.6561279,2.0018311,19,2z M15,21H9v-3h6V21z M21,15c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-1h18V15z M21,13H3V5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V13z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Electronics</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold fs-12">
                      120 Items
                    </span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon secondary mb-3">
                    <div className="avatar avatar-lg bg-secondary-transparent border border-secondary border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M13.5,11h2c0.3,0,0.5-0.2,0.5-0.5S15.8,10,15.5,10h-2c-0.3,0-0.5,0.2-0.5,0.5S13.2,11,13.5,11z M21.5,21H20V2.5c0,0,0,0,0,0C20,2.2,19.8,2,19.5,2h-15c0,0,0,0,0,0C4.2,2,4,2.2,4,2.5V21H2.5C2.2,21,2,21.2,2,21.5S2.2,22,2.5,22h2h10h0h5c0,0,0,0,0,0h2c0.3,0,0.5-0.2,0.5-0.5S21.8,21,21.5,21z M14,21h-4v-6h4V21z M19,21h-4v-6.5c0,0,0,0,0,0c0-0.3-0.2-0.5-0.5-0.5h-5c0,0,0,0,0,0C9.2,14,9,14.2,9,14.5V21H5V3h14V21z M13.5,7h2C15.8,7,16,6.8,16,6.5S15.8,6,15.5,6h-2C13.2,6,13,6.2,13,6.5S13.2,7,13.5,7z M8.5,11h2c0.3,0,0.5-0.2,0.5-0.5S10.8,10,10.5,10h-2C8.2,10,8,10.2,8,10.5S8.2,11,8.5,11z M8.5,7h2C10.8,7,11,6.8,11,6.5S10.8,6,10.5,6h-2C8.2,6,8,6.2,8,6.5S8.2,7,8.5,7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Real Estate</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold">370 Items</span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon success mb-3">
                    <div className="avatar avatar-lg bg-success-transparent border border-success border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M12.0273438,2c-5.5153198-0.0075684-9.9924927,4.4573975-10,9.9726562c-0.0075684,5.5153198,4.4573364,9.9924316,9.9726562,10c5.5164795-0.0024414,9.9899902-4.4698486,10-9.9863281C22,6.4763794,17.5372925,2.0075073,12.0273438,2z M19.7203369,7.3937378c0.5223999,0.873291,0.9055786,1.8382568,1.1077271,2.8707886c-2.5644531-1.1419678-5.4962158-1.1601562-8.0891113-0.0310059c-1.0733032-0.6255493-1.9924927-1.4520264-2.7106323-2.4307251C12.9094238,5.8284302,16.6688232,5.6482544,19.7203369,7.3937378z M12,3c2.5098267,0.0009155,4.7774658,1.0311279,6.4098511,2.6888428c-2.9771118-1.0254517-6.2954712-0.5690918-8.9274292,1.2686768C8.9244995,5.984314,8.5501099,4.9064941,8.3884277,3.7670288C9.4939575,3.2786255,10.7139282,3.0019531,12,3z M5.1325073,6.2125244c0.6550293-0.7798462,1.4425659-1.4415283,2.3244629-1.9621582c0.5299072,2.9873047,2.3894043,5.5726318,5.0749512,7.0166626c-0.0556641,1.444397-0.4543457,2.8141479-1.1296387,4.0280762c-3.7288818-1.1880493-6.2895508-4.6509399-6.2909546-8.5949097C5.1113281,6.5350342,5.1223145,6.3737183,5.1325073,6.2125244z M3.0273438,12c-0.0024414-1.5870361,0.4102783-3.0761719,1.130249-4.3712769c0.3629761,3.9086304,2.9852905,7.258606,6.7095947,8.5444336c-0.9956055,1.3901978-2.3933716,2.484375-4.0525513,3.133728C4.5292969,17.6807861,3.0319214,15.0185547,3.0273438,12z M12.0366821,20.972168c-0.0031738,0-0.0061646,0.0004883-0.0093384,0.0004883c-1.5032959,0.0023193-2.9181519-0.3693848-4.1643066-1.0200806c3.4238892-1.6411133,5.6628418-5.098938,5.692627-8.9564819v-0.0006104c0-0.0040283-0.0021362-0.0073853-0.0021973-0.0114136c0.9124756-0.3455811,1.8617554-0.5383301,2.8184814-0.578064c0.2655029,0.8537598,0.4077759,1.7414551,0.4054565,2.6369629C16.7880249,16.3646851,14.9569702,19.4077759,12.0366821,20.972168z M14.2400513,20.6833496c2.2203369-1.8760986,3.5465698-4.65802,3.5373535-7.6403809c0.0025024-0.8865356-0.1193848-1.7671509-0.354126-2.6196899c1.2271118,0.0922852,2.4342651,0.4334106,3.548584,1.024292C20.9828491,11.62677,20.9996338,11.8044434,21,11.9863281C21,16.178833,18.1245117,19.6912842,14.2400513,20.6833496z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Sports</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold">370 Items</span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon orange mb-3">
                    <div className="avatar avatar-lg bg-orange-transparent border border-orange border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M9,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C11,18.8954468,10.1045532,18,9,18z M9,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C10,20.5523071,9.5523071,21,9,21z M17,18c-1.1045532,0-2,0.8954468-2,2s0.8954468,2,2,2c1.1040039-0.0014038,1.9985962-0.8959961,2-2C19,18.8954468,18.1045532,18,17,18z M17,21c-0.5523071,0-1-0.4476929-1-1s0.4476929-1,1-1c0.552124,0.0003662,0.9996338,0.447876,1,1C18,20.5523071,17.5523071,21,17,21z M19.4985352,12.0502319l1.9848633-7.4213257c0.0111694-0.0419312,0.0167847-0.085083,0.0167847-0.128479C21.5002441,4.2241211,21.2763062,4.000061,21,4H5.9198608L5.4835205,2.371582C5.4249268,2.1530151,5.2268677,2.0009766,5.0005493,2.0009766H3.5048218C3.5031128,2.0009766,3.501709,2,3.5,2C3.223877,2,3,2.223877,3,2.5S3.223877,3,3.5,3v0.0009766L4.6162109,3l2.579834,9.6288452C7.2546387,12.8477783,7.453064,13,7.6796875,13H11h6.8603516H19c0.8284302,0,1.5,0.6715698,1.5,1.5S19.8284302,16,19,16H5c-0.276123,0-0.5,0.223877-0.5,0.5S4.723877,17,5,17h14c1.3807373,0,2.5-1.1192627,2.5-2.5C21.5,13.2900391,20.6403809,12.2813721,19.4985352,12.0502319z M18.4761963,12h-0.6158447H11H8.0634766L6.1878052,5h14.1608276L18.4761963,12z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Shopping</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold">370 Items</span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon info mb-3">
                    <div className="avatar avatar-lg bg-info-transparent border border-info border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M19.5,6H16V5c-0.0014038-1.1040039-0.8959961-1.9985962-2-2h-4C8.8959961,3.0014038,8.0014038,3.8959961,8,5v1H4.5C3.119812,6.0012817,2.0012817,7.119812,2,8.5v10c0.0012817,1.380188,1.119812,2.4987183,2.5,2.5h15c1.380188-0.0012817,2.4987183-1.119812,2.5-2.5v-10C21.9987183,7.119812,20.880188,6.0012817,19.5,6z M9,5c0.0003662-0.552124,0.447876-0.9996338,1-1h4c0.552124,0.0003662,0.9996338,0.447876,1,1v1H9V5z M21,18.5c-0.0009155,0.828064-0.671936,1.4990845-1.5,1.5h-15c-0.828064-0.0009155-1.4990845-0.671936-1.5-1.5v-6.4726562l5.8417969,1.9472656C8.8928833,13.991333,8.9462891,13.999939,9,14h6c0.053772-0.000061,0.1071777-0.008667,0.1582642-0.0253906L21,12.0273438V18.5z M21,11.0059204c-0.0525513,0-0.1055908,0.0019531-0.1581421,0.0194702L14.9190063,13H9.0810547l-5.9228516-1.9746094C3.1056519,11.0078735,3.0525513,11.0059204,3,11.0059204V8.5C3.0009155,7.671936,3.671936,7.0009155,4.5,7h15c0.828064,0.0009155,1.4990845,0.671936,1.5,1.5V11.0059204z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Jobs</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold">120 Items</span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xl={2} className="col-12">
              <Card className="custom-card">
                <Card.Body className="rounded">
                  <div className="main-card-icon warning mb-3">
                    <div className="avatar avatar-lg bg-warning-transparent border border-warning border-opacity-10">
                      <div className="avatar avatar-sm svg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enableBackground="new 0 0 24 24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M7.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C8.5009766,13.6715698,7.8294067,13,7.0009766,13z M7.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C7.5009766,14.776123,7.2771606,15,7.0009766,15z M13.5,14h-3c-0.276123,0-0.5,0.223877-0.5,0.5s0.223877,0.5,0.5,0.5h3c0.276123,0,0.5-0.223877,0.5-0.5S13.776123,14,13.5,14z M20.1950684,10.25177l-1.5505371-4.8230591C18.1824341,3.9794922,16.8345947,2.9967651,15.3135376,3H8.6865234C7.1654053,2.9967041,5.8175659,3.9794312,5.3554688,5.4286499L3.8049316,10.25177C2.7443848,10.7144775,2.0013428,11.7692261,2,13v3c0.0016479,1.4848633,1.083252,2.7087402,2.5,2.9490967V20.5c0,0.0001831,0,0.0003662,0,0.0005493C4.5001831,20.7765503,4.723999,21.0001831,5,21c0.0001831,0,0.0003662,0,0.0006104,0C5.2765503,20.9998169,5.5001831,20.776001,5.5,20.5V19h13v1.5c0,0.0001831,0,0.0003662,0,0.0005493C18.5001831,20.7765503,18.723999,21.0001831,19,21c0.0001831,0,0.0003662,0,0.0006104,0c0.2759399-0.0001831,0.4995728-0.223999,0.4993896-0.5v-1.5509033C20.916748,18.7087402,21.9983521,17.4848633,22,16v-3C21.9986572,11.7692261,21.2556152,10.7144775,20.1950684,10.25177z M6.3066406,5.7353516C6.6368408,4.6999512,7.5997314,3.9978638,8.6864624,4h6.6270142c1.086792-0.0021973,2.0496826,0.6999512,2.3798828,1.7353516L19.0644531,10H19H5H4.9355469L6.3066406,5.7353516z M21,16c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H5c-1.1040039-0.0014038-1.9985962-0.8959961-2-2v-3c0.0014038-1.1040039,0.8959961-1.9985962,2-2h14c1.1040039,0.0014038,1.9985962,0.8959961,2,2V16z M17.0009766,13c-0.8284302,0-1.5,0.6715698-1.5,1.5s0.6715698,1.5,1.5,1.5c0.828064-0.0009155,1.4991455-0.671936,1.5-1.5C18.5009766,13.6715698,17.8294067,13,17.0009766,13z M17.0009766,15c-0.276123,0-0.5-0.223877-0.5-0.5s0.223877-0.5,0.5-0.5c0.2759399,0.0005493,0.4994507,0.2240601,0.5,0.5C17.5009766,14.776123,17.2771606,15,17.0009766,15z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link scroll={false} href="#!">
                    <h5 className="fw-semibold mb-0">Vehicles</h5>
                  </Link>
                  <p className="mb-2">
                    <span className="text-default fw-semibold">370 Items</span>{" "}
                    available
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Explore items
                    <i className="ri-arrow-right-s-line align-middle ms-1 d-inline-block rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </div>
      </section>
      {/* End:: Section-1 */}

      {/* Start:: Section-2 */}
      <section className="section bg-light">
        <div className="container text-center">
          <p className="fs-12 fw-semibold mb-1">
            <span className="landing-section-heading text-gradient">Steps</span>
          </p>
          <h3 className="fw-semibold mb-2">How it works ?</h3>
          <div className="row justify-content-center">
            <Col xl={6}>
              <p className="text-muted fs-15 mb-5 fw-normal">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </Col>
          </div>
          <div className="row text-start">
            <div className="col-12 col-md-4">
              <div className="card custom-card feature-style steps-card first">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-file-invoice"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Create An Account</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Register Now
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <Card className="custom-card feature-style steps-card second">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-user-plus"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Post An Advert</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Post Ad
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-12 col-md-4">
              <Card className="custom-card feature-style steps-card third">
                <Card.Body className="rounded">
                  <div className="mb-3 ms-1">
                    <span className="feature-style-icon bg-primary-transparent svg-primary">
                      <i className="ti ti-briefcase"></i>
                    </span>
                  </div>
                  <h5 className="fw-semibold">Start Earning</h5>
                  <p className="op-8">
                    Est amet sit vero sanctus labore no sed ipsum ipsum nonumy.
                    Sit ipsum sanctus ea.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Start Now
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-2 */}

      {/* Start:: Section-3 */}
      <section className="bg-banner-2 text-white">
        <div className="container">
          <div className="row align-items-center">
            <Col
              xl={4}
              lg={5}
              md={6}
              className="text-center mt-4 d-md-block d-none"
            >
              <img
                src="../../assets/images/ecommerce/png/17.png"
                width="350"
                alt=""
              />
            </Col>
            <Col xl={8} lg={7} md={6} className="col-12">
              <div className="my-4">
                <h2 className="fw-semibold mb-3 text-fixed-white">
                  Do you have something to advertise?
                </h2>
                <h6 className="mb-4 text-fixed-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  aspernatur illum vel sunt libero voluptatum repudiandae veniam
                  maxime tenetur.{" "}
                </h6>
                <Link scroll={false} href="#!" className="btn btn-light btn-lg">
                  Post Your Ad
                </Link>
              </div>
            </Col>
          </div>
        </div>
      </section>
      {/* End:: Section-3 */}

      {/* Start:: Section-4 */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <Col xl={6}>
              <p className="fs-12 fw-semibold mb-1">
                <span className="landing-section-heading text-gradient">
                  Find Ads
                </span>
              </p>
              <h3 className="fw-semibold mb-2">Featured Ads</h3>
              <p className="">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </Col>
          </div>
          <Row>
            <Col lg={3} md={6} sm={6} className="col-12">
              <Card className="custom-card">
                <span className="badge bg-warning tag-badge">Featured</span>
                <Link scroll={false} href="/classifieds/classifieddetails/">
                  <div className="featured-img">
                    <img
                      src="../../assets/images/classifieds/featured-adds/1.jpg"
                      className=""
                      alt="..."
                    />
                  </div>
                </Link>
                <div className="card-body p-3 position-relative">
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <h5 className="mb-0 fw-semibold">
                        <span>$2,226.00</span>
                      </h5>
                      <p className="mb-1 fw-semibold">4-Bds - 4 Ba - 600ff3</p>
                    </div>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-sm btn-icon btn-outline-light rounded-circle"
                      >
                        <i className="ri-heart-fill op-3"></i>
                      </Link>
                    </OverlayTrigger>
                  </div>
                  <h6 className="text-muted">4 Beds Duplex House</h6>
                  <div className="fs-11 text-muted">
                    <span className="">
                      <i className="bi bi-geo-alt me-1"></i>USA
                    </span>
                    <span>,</span>
                    <span className="">16 Nov 2024</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={6} className="col-12">
              <Card className="custom-card">
                <span className="badge bg-warning tag-badge">Featured</span>
                <Link scroll={false} href="/classifieds/classifieddetails/">
                  <div className="featured-img">
                    <img
                      src="../../assets/images/classifieds/featured-adds/2.jpg"
                      className=""
                      alt="..."
                    />
                  </div>
                </Link>
                <div className="card-body p-3 position-relative">
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <h5 className="mb-0 fw-semibold">
                        <span>$5,321.00</span>
                      </h5>
                      <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                    </div>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-sm btn-icon btn-outline-light rounded-circle"
                      >
                        <i className="ri-heart-fill op-3"></i>
                      </Link>
                    </OverlayTrigger>
                  </div>
                  <h6 className="text-muted">Cadbo Car kb43</h6>
                  <div className="fs-11 text-muted">
                    <span className="">
                      <i className="bi bi-geo-alt me-1"></i>Banglore
                    </span>
                    <span>,</span>
                    <span className="">16 Nov 2024</span>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={6} className="col-12">
              <Card className="custom-card">
                <span className="badge bg-warning tag-badge">Featured</span>
                <Link scroll={false} href="/classifieds/classifieddetails/">
                  <div className="featured-img">
                    <img
                      src="../../assets/images/classifieds/featured-adds/3.jpg"
                      className=""
                      alt="..."
                    />
                  </div>
                </Link>
                <Card.Body className="p-3 position-relative">
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <h5 className="mb-0 fw-semibold">
                        <span>$56,764.00</span>
                      </h5>
                      <p className="mb-1 fw-semibold">2022 Oct 04</p>
                    </div>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-sm btn-icon btn-outline-light rounded-circle"
                      >
                        <i className="ri-heart-fill op-3"></i>
                      </Link>
                    </OverlayTrigger>
                  </div>
                  <h6 className="text-muted">Smart Phone H6</h6>
                  <div className="fs-11 text-muted">
                    <span className="">
                      <i className="bi bi-geo-alt me-1"></i>Chennai
                    </span>
                    <span>,</span>
                    <span className="">16 Nov 2024</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={6} className="col-12">
              <Card className="custom-card">
                <span className="badge bg-warning tag-badge">Featured</span>
                <Link scroll={false} href="/classifieds/classifieddetails/">
                  <div className="featured-img">
                    <img
                      src="../../assets/images/classifieds/featured-adds/4.jpg"
                      className=""
                      alt="..."
                    />
                  </div>
                </Link>
                <Card.Body className="p-3 position-relative">
                  <div className="d-flex align-items-center">
                    <div className="flex-fill">
                      <h5 className="mb-0 fw-semibold">
                        <span>$5,763.00</span>
                      </h5>
                      <p className="mb-1 fw-semibold">2024 - 120,000km</p>
                    </div>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip>Add to wishlist</Tooltip>}
                    >
                      <Link
                        scroll={false}
                        href="#!"
                        className="btn btn-sm btn-icon btn-outline-light rounded-circle"
                      >
                        <i className="ri-heart-fill op-3"></i>
                      </Link>
                    </OverlayTrigger>
                  </div>
                  <h6 className="text-muted">Gittbos Bike Mf120</h6>
                  <div className="fs-11 text-muted">
                    <span className="">
                      <i className="bi bi-geo-alt me-1"></i>Pune
                    </span>
                    <span>,</span>
                    <span className="">16 Nov 2024</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
              View All Ads <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* End:: Section-4 */}

      {/* Start:: Section-5 */}
      <section className="section bg-white">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <Col xl={6}>
              <p className="fs-12 fw-semibold mb-1">
                <span className="landing-section-heading text-gradient">
                  Latest
                </span>
              </p>
              <h3 className="fw-semibold mb-2">Latest Ads</h3>
              <p className="">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </Col>
          </div>
          <Row>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0 align-items-center">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-13.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">Business</h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h6 className="fw-semibold mb-0 text-muted">$25,000</h6>
                        <Link
                          scroll={false}
                          href="#!"
                          className="text-primary fw-semibold fs-14"
                        >
                          View Details{" "}
                          <i className="fe fe-arrow-right d-inline-flex"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0 align-items-center">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-14.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">
                        Gile Restaurant
                      </h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h6 className="fw-semibold mb-0 text-muted">$75,000</h6>
                        <Link
                          scroll={false}
                          href="#!"
                          className="text-primary fw-semibold fs-14"
                        >
                          View Details{" "}
                          <i className="fe fe-arrow-right d-inline-flex"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0 align-items-center">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-18.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">Bure Spa</h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h6 className="fw-semibold mb-0 text-muted">$32,000</h6>
                        <Link
                          scroll={false}
                          href="#!"
                          className="text-primary fw-semibold fs-14"
                        >
                          View Details{" "}
                          <i className="fe fe-arrow-right d-inline-flex"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0 align-items-center">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-19.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">
                        Seep Automobiles
                      </h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h6 className="fw-semibold mb-0 text-muted">$67,000</h6>
                        <Link
                          scroll={false}
                          href="#!"
                          className="text-primary fw-semibold fs-14"
                        >
                          View Details{" "}
                          <i className="fe fe-arrow-right d-inline-flex"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-20.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">
                        Smart Mobile S23
                      </h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h6 className="fw-semibold mb-0 text-muted">$83,000</h6>
                        <Link
                          scroll={false}
                          href="#!"
                          className="text-primary fw-semibold fs-14"
                        >
                          View Details{" "}
                          <i className="fe fe-arrow-right d-inline-flex"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="custom-card">
                <div className="row g-0">
                  <Col md={4}>
                    <Link scroll={false} href="#!">
                      <img
                        src="../../assets/images/media/media-14.jpg"
                        className="img-fluid rounded-start h-100 w-100"
                        alt="..."
                      />
                    </Link>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="p-3">
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Add to wishlist</Tooltip>}
                      >
                        <Link
                          scroll={false}
                          href="#!"
                          className="btn btn-sm btn-icon btn-outline-light float-end text-muted rounded-circle"
                        >
                          <i className="ri-heart-line"></i>
                        </Link>
                      </OverlayTrigger>
                      <h5 className="card-title fw-semibold">
                        Business Development
                      </h5>
                      <div className="fs-12 text-muted mb-2">
                        <span className="">
                          <i className="bi bi-geo-alt me-1"></i>USA
                        </span>
                        <span>,</span>
                        <span className="">16 Nov 2024</span>
                      </div>
                      <Link
                        scroll={false}
                        className="text-primary fw-semibold"
                        href="#!"
                      >
                        Read More<i className="ri-arrow-right-s-line ms-1"></i>
                      </Link>
                    </Card.Body>
                  </Col>
                </div>
              </Card>
            </Col>
          </Row>
          <div className="text-center">
            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
              View All Ads <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* End:: Section-5 */}

      {/* Start:: Section-6 */}
      <section className="py-5 bg-banner">
        <div className="container">
          <div className="row justify-content-center">
            <Col lg={10}>
              <Row className="gy-3 text-center">
                <div className="col-md-3">
                  <div>
                    <h3 className="mb-1 fw-semibold text-fixed-white">45K+</h3>
                    <h6 className="mb-0 text-fixed-white">Published Ads</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <h3 className="mb-1 fw-semibold text-fixed-white">175K+</h3>
                    <h6 className="mb-0 text-fixed-white">Locations</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <h3 className="mb-1 fw-semibold text-fixed-white">300K+</h3>
                    <h6 className="mb-0 text-fixed-white">Registered Users</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div>
                    <h3 className="mb-1 fw-semibold text-fixed-white">450M+</h3>
                    <h6 className="mb-0 text-fixed-white">Premium Ads</h6>
                  </div>
                </div>
              </Row>
            </Col>
          </div>
        </div>
      </section>
      {/* End:: Section-6 */}

      {/* Start:: Section-7 */}
      <section className="section">
        <div className="container">
          <div className="row mb-4 justify-content-center text-center">
            <p className="fs-12 fw-semibold mb-1">
              <span className="landing-section-heading text-gradient">
                Our Blog
              </span>{" "}
            </p>
            <h3 className="fw-semibold mb-2">Latest News Updates & Blogs</h3>
            <Col xl={9}>
              <p className="">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </Col>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <Card className="custom-card">
                <Link scroll={false} href="#!">
                  <img
                    src="../../assets/images/media/blog/20.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <span className="badge bg-secondary blog-badge">
                    Interview
                  </span>
                  <h5 className="fw-semibold mb-1">
                    How to prepare an interview?
                  </h5>
                  <p className="card-text">
                    The holographic principle, theorized to be a property of
                    quantum gravity, postulates that the description.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Read this post
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card className="custom-card">
                <Link scroll={false} href="#!">
                  <img
                    src="../../assets/images/media/blog/21.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <span className="badge bg-danger blog-badge">Freelancer</span>
                  <h5 className="fw-semibold mb-1">
                    Freelancer vs Employement
                  </h5>
                  <p className="card-text">
                    The holographic principle, theorized to be a property of
                    quantum gravity, postulates that the description.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Read this post
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card className="custom-card">
                <Link scroll={false} href="#!">
                  <img
                    src="../../assets/images/media/blog/22.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <span className="badge bg-warning blog-badge">Jobmaster</span>
                  <h5 className="fw-semibold mb-1">
                    Job opportunity in jobmaster
                  </h5>
                  <p className="card-text">
                    The holographic principle, theorized to be a property of
                    quantum gravity, postulates that the description.
                  </p>
                  <Link
                    scroll={false}
                    className="text-primary fw-semibold"
                    href="#!"
                  >
                    Read this post
                    <i className="ri-arrow-right-s-line align-middle rtl-rotate"></i>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* End:: Section-7 */}

      {/* Start:: Section-8 */}
      <section className="section bg-banner">
        <div className="container">
          <Row>
            <Col lg={9}>
              <h2 className="fw-semibold text-fixed-white">
                Create your free account today!
              </h2>
              <p className="mb-0 op-9">
                Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit
                ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum
                sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no
                sed ipsum ipsum nonumy vero sanctus labore..
              </p>
            </Col>
            <div className="col-lg-3 text-end my-auto">
              <Link scroll={false} href="#!" className="btn btn-lg btn-danger">
                Signup Now
              </Link>
            </div>
          </Row>
        </div>
      </section>
      {/* End:: Section-8 */}

      {/* Start:: Section-9 */}
      <section className="section bg-white">
        <div className="container">
          <div className="heading-section mb-5">
            <p className="fs-12 fw-semibold mb-1">
              <span className="landing-section-heading text-gradient">
                FAQ'S
              </span>{" "}
            </p>
            <h3 className="fw-semibold mb-2">Frequently Asked Questions?</h3>
            <div className="heading-description">
              Browse Through The Most Frequently Asked Questions
            </div>
          </div>
          <Row>
            <Col xl={6} className="mt-2">
              <Accordion
                defaultActiveKey="first"
                className="accordion-solid-primary accordions-items-seperate"
                id="accordionFAQ1"
              >
                <Accordion.Item eventKey="first">
                  <Accordion.Header id="headingcustomicon2One">
                    Where can I subscribe to your newsletter?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="second">
                  <Accordion.Header id="headingcustomicon2Two">
                    Where can in edit my address?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="third">
                  <Accordion.Header id="headingcustomicon2Three">
                    What are your opening hours?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="fourth">
                  <Accordion.Header id="headingcustomicon2Four">
                    Do I have the right to return an item?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xl={6} className="mt-2">
              <Accordion
                defaultActiveKey="fourth"
                className="accordion-solid-primary accordions-items-seperate"
                id="accordionFAQ"
              >
                <Accordion.Item eventKey="first">
                  <Accordion.Header id="headingcustomicon1One">
                    When can we get started?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="second">
                  <Accordion.Header id="headingcustomicon1Two">
                    What services are provided by you?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="third">
                  <Accordion.Header id="headingcustomicon1Three">
                    What types of companies use your services?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="fourth">
                  <Accordion.Header id="headingcustomicon1Four">
                    Do you provide 24/7 social media support?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </section>
      {/* End:: Section-9 */}

      {/* Start:: Section-10 */}
      <section className="section landing-testimonials">
        <div className="container text-center">
          <p className="fs-12 fw-semibold mb-1">
            <span className="landing-section-heading text-gradient">
              Testimonials
            </span>
          </p>
          <h3 className="fw-semibold mb-2">
            We never failed to reach expectations
          </h3>
          <div className="row justify-content-center">
            <Col xl={6}>
              <p className="text-muted fs-15 mb-5 fw-normal">
                Some of the reviews our clients gave which brings motivation to
                work for future projects.
              </p>
            </Col>
          </div>
          {/* <Swiper
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ dynamicBullets: true, clickable: true }}
            modules={[Pagination, Autoplay]}
            className="pagination-dynamic text-start"
          >
            <SwiperSlide>
              <Row>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/12.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Jack Miller
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CEO OF NORJA
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/2.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Melissa Blue
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            MANAGER CHO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/5.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Kiara Advain
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CEO OF EMPIRO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/14.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Jhonson Smith
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CHIEF SECRETARY MBIO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/21.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Dwayne Stort
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CEO ARMEDILLO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/7.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Jasmine Kova
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            AGGENT AMIO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </SwiperSlide>
            <SwiperSlide>
              <Row>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/21.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Dolph MR
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CEO MR BRAND
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/8.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Brenda Simpson
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            CEO AIBMO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={6} sm={12} className="">
                  <Card className="custom-card featured-card-1">
                    <Card.Body className="p-4">
                      <span className="review-quote">
                        <i className="bi bi-quote"></i>
                      </span>
                      <div className="d-flex mb-2 align-items-center">
                        <span className="avatar avatar-lg avatar-rounded me-2">
                          <img src="../../assets/images/faces/4.jpg" alt="" />
                        </span>
                        <div>
                          <p className="mb-0 fw-semibold fs-16 text-primary">
                            Melissa Blue
                          </p>
                          <p className="fs-10 mb-0 fw-semibold text-muted">
                            MANAGER CHO
                          </p>
                        </div>
                      </div>
                      <span>
                        - Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed
                        amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                        amet sit vero sanctus labor
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </section>
      {/* End:: Section-10 */}

      {/* Start:: Section-2 */}
      <section className="section bg-banner">
        <div className="row justify-content-center">
          <Col lg={6} className="text-center">
            <div className="mb-4">
              <h3 className="fw-semibold mb-2 text-fixed-white">
                &#128073; Download our free mobile apps today
              </h3>
            </div>
            <h6 className="mb-4 op-9 text-fixed-white">
              Labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est.
              Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero
              sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..
            </h6>
            <div className="btn-list">
              <Link scroll={false} href="#!" className="btn btn-dark app-store">
                <img
                  src="../../assets/images/media/apps/play-store.png"
                  alt=""
                />
                Google Play
              </Link>
              <Link scroll={false} href="#!" className="btn btn-dark app-store">
                <img
                  src="../../assets/images/media/apps/apple-store.png"
                  alt=""
                  className="invert-1"
                />
                App Store
              </Link>
            </div>
          </Col>
        </div>
      </section>
      {/* End:: Section-2 */}

      {/* Start:: Search Modal */}
      <Modal
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
            <Button variant="" className="btn btn-lg btn-primary">
              Search
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      {/* End:: Search Modal */}
    </Fragment>
  );
};

export default Landing;
