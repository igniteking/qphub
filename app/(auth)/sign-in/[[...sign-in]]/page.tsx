"use client";
import Seo from "@/shared/layout-components/seo/seo";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Col, Row } from "react-bootstrap";

const SigninCover = () => {
  const [passwordshow1, setpasswordshow1] = useState(false);
  return (
    <Fragment>
      <Seo title={"Sing In"} />
      <div className="row authentication authentication-cover-main mx-0">
        <Col xxl={5} xl={5} lg={12} className="d-xl-block d-none px-0">
          <div className="authentication-cover overflow-hidden">
            <div className="authentication-cover-logo">
              <Link scroll={false} href="/dashboards/sales/">
                <img
                  src="../../../assets/images/brand-logos/desktop-dark.png"
                  alt=""
                  className="authentication-brand desktop-dark"
                />
              </Link>
            </div>
            <div className="aunthentication-cover-content d-flex align-items-center justify-content-center">
              <div>
                <h2 className="fs-1 text-fixed-white lh-base">
                  Keys to the kingdom, once a time
                </h2>
                <p className="mb-0 fs-18 lh-base text-fixed-white op-8">
                  This succinct quote playfully emphasizes the significance of
                  each login, framing it as a step toward accessing a digital
                  kingdom of possibilities
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xxl={7} xl={7} className="">
          <Row className="justify-content-center align-items-center h-100">
            <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
              <SignIn afterSignInUrl="/dashboard"  />
            </Col>
          </Row>
        </Col>
      </div>
    </Fragment>
  );
};

export default SigninCover;
