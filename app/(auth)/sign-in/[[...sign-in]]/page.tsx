// app/sign-in/[[...sign-in]]/page.tsx

// This will be used server-side to generate static params at build time
export async function generateStaticParams() {
  return [
    { signIn: ["default"] },
    // Add other paths as needed
  ];
}
("use client");
import Loader from "@/components/Loader";
import ToastNotification from "@/components/ToastNotification";
import Seo from "@/shared/layout-components/seo/seo";
import { useSignIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const SigninCover = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();
  const [isLoading, setsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleEmailSignIn = async () => {
    if (!isLoaded) return;

    try {
      setsLoading(true);

      // Attempt to sign in with Clerk
      const signInResponse = await signIn.create({
        identifier: email,
        password,
      });
      setMessage("Sign in successful.");
      setShow(true);
      // Set the active session
      await setActive({ session: signInResponse.createdSessionId });
      setsLoading(false);

      // Redirect to the dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setMessage(err.message || "Failed to sign in.");
      setShow(true);
      setsLoading(false);
    }
  };

  // Handle GitHub Social Login
  const handleGitHubLogin = async () => {
    if (!isLoaded) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_github", // Use GitHub as the OAuth provider
        redirectUrl: "/dashboard", // Redirect to this URL after OAuth flow
        redirectUrlComplete: "/dashboard", // This is the URL where Clerk will complete the OAuth flow
      });
    } catch (err: any) {
      setMessage(err.errors[0]?.message || "GitHub login failed.");
      setShow(true);
    }
  };
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
              <Card className="custom-card shadow-none my-auto border-0">
                <Card.Body className="p-5">
                  <p className="h4 mb-2 fw-semibold">Sign In</p>
                  <p className="mb-4 text-muted fw-normal">Welcome back! </p>
                  <ToastNotification
                    show={show}
                    setShow={setShow}
                    message={message}
                  />
                  <div className="row gy-3">
                    <Col xl={12}>
                      <label
                        htmlFor="signin-username"
                        className="form-label text-default"
                      >
                        Email
                      </label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control form-control-lg"
                        id="signin-username"
                        placeholder="Email"
                      />
                    </Col>
                    <Col xl={12} className="mb-2">
                      <label
                        htmlFor="signin-password"
                        className="form-label text-default d-block"
                      >
                        Password
                        <Link
                          href="/authentication/resetpassword/reset-basic"
                          className="float-end link-danger op-5 fw-medium fs-12"
                        >
                          Forget password ?
                        </Link>
                      </label>
                      <div className="position-relative">
                        <Form.Control
                          type={passwordshow1 ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-control form-control-lg"
                          id="signin-password"
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
                              passwordshow1 ? "ri-eye-line" : "ri-eye-off-line"
                            } align-middle`}
                          ></i>
                        </Link>
                      </div>
                      <div className="mt-2">
                        <div className="form-check">
                          <Form.Check
                            className=""
                            type="checkbox"
                            id="defaultCheck1"
                          />
                          <label
                            className="form-check-label text-muted fw-normal fs-12"
                            htmlFor="defaultCheck1"
                          >
                            Remember password ?
                          </label>
                        </div>
                      </div>
                    </Col>
                  </div>
                  <div className="text-center my-3 authentication-barrier">
                    <span className="op-4 fs-11">OR SignIn With</span>
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
                    <Button
                      onClick={handleEmailSignIn}
                      className="btn btn-lg btn-primary"
                      disabled={isLoading}
                    >
                      {isLoading ? <Loader /> : "Sign In"}
                    </Button>
                  </div>
                  <div className="text-center">
                    <p className="text-muted mt-3 mb-0">
                      Dont have an account?{" "}
                      <Link
                        scroll={false}
                        href="/sign-up/"
                        className="text-primary"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </div>
    </Fragment>
  );
};

export default SigninCover;
