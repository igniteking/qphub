"use client";
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import Seo from "@/shared/layout-components/seo/seo";
import { SignUp, useSignUp } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

export default function Page() {
  const [passwordshow1, setpasswordshow1] = useState(false);
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      setisLoading(true);
      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setisLoading(false);
      router.push(`/verify-email?email=${encodeURIComponent(email)}`);
    } catch (err: any) {
      setError(err.errors[0]?.message || "Something went wrong!");
    }
  };

  // Handle GitHub Social Login
  const handleGitHubLogin = async () => {
    if (!isLoaded) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_github", // Use GitHub as the OAuth provider
        redirectUrl: "/dashboard", // Redirect on successful login
        redirectUrlComplete: "/dashboard",
      });
    } catch (err: any) {
      setError(err.errors[0]?.message || "GitHub login failed.");
    }
  };
  return (
    <Fragment>
      <Seo title={"Sign Up"} />
      <div className="row authentication authentication-cover-main mx-0">
        <Col xxl={5} xl={5} lg={12} className="d-xl-block d-none px-0">
          <div className="authentication-cover overflow-hidden">
            <div className="authentication-cover-logo">
              <Link scroll={false} href="/">
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
          <div className="row justify-content-center align-items-center h-100">
            <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
              <Card className="custom-card shadow-none my-auto border-0">
                <Card.Body className="p-5">
                  <p className="h4 mb-2 fw-semibold">Sign Up</p>
                  <p className="mb-4 text-muted">
                    Join us by creating a free account !{" "}
                  </p>
                  <ToastNotification
                    show={show}
                    setShow={setShow}
                    message={message}
                  />
                  {error && <p style={{ color: "red" }}>{error}</p>}
                  <Form onSubmit={handleSignup}>
                    <div className="row gy-3">
                      <Col xl={12}>
                        <label
                          htmlFor="signup-firstname"
                          className="form-label text-default"
                        >
                          Email Address
                        </label>
                        <Form.Control
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control form-control-lg"
                          id="signup-firstname"
                          placeholder="Enter Email ID"
                        />
                      </Col>
                      <Col xl={12}>
                        <label
                          htmlFor="signup-password"
                          className="form-label text-default"
                        >
                          Password
                        </label>
                        <div className="position-relative">
                          <Form.Control
                            type={passwordshow1 ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-lg"
                            id="signup-password"
                            placeholder="Password"
                          />
                          <Link
                            scroll={false}
                            href="#!"
                            className="show-password-button text-muted"
                            onClick={() => setpasswordshow1(!passwordshow1)}
                            id="button-addon2"
                          >
                            <i
                              className={`${
                                passwordshow1
                                  ? "ri-eye-line"
                                  : "ri-eye-off-line"
                              } align-middle`}
                            ></i>
                          </Link>
                        </div>
                      </Col>
                    </div>
                    <div className="text-center my-4 authentication-barrier">
                      <span className="op-4 fs-11">OR SignUp With</span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                      <Button
                        onClick={handleGitHubLogin}
                        variant=""
                        className="btn btn-light btn-lg btn-w-lg border d-flex align-items-center justify-content-center flex-fill"
                      >
                        <span className="avatar avatar-xs">
                          <img
                            src="../../../assets/images/media/apps/google.png"
                            alt=""
                          />
                        </span>
                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">
                          Google
                        </span>
                      </Button>
                      <Button
                        variant=""
                        className="btn btn-light btn-lg btn-w-lg border d-flex align-items-center justify-content-center flex-fill"
                      >
                        <span className="avatar avatar-xs">
                          <img
                            src="../../../assets/images/media/apps/facebook.png"
                            alt=""
                          />
                        </span>
                        <span className="lh-1 ms-2 fs-13 text-default fw-medium">
                          Facebook
                        </span>
                      </Button>
                    </div>
                    <div className="d-grid mt-4">
                      <Button type="submit" className="btn btn-lg btn-primary">
                        {isLoading ? <Loader /> : "Create Account"}
                      </Button>
                    </div>
                    <div className="text-center">
                      <p className="text-muted mt-3 mb-0">
                        Already have an account?{" "}
                        <Link
                          scroll={false}
                          href="/sign-in/"
                          className="text-primary fw-medium"
                        >
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Col>
        {/* <Col xxl={7} xl={7} className="">
          <div className="row justify-content-center align-items-center h-100">
            <Col xxl={6} xl={9} lg={6} md={6} sm={8} className="col-12">
              <SignUp afterSignUpUrl={"/after-signup/"} />
            </Col>
          </div>
        </Col> */}
      </div>
    </Fragment>
  );
}
