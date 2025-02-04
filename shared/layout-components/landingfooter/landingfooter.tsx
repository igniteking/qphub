import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'

const Landingfooter = () => {
  return (
    <Fragment>
          {/* <!-- Start:: Footer --> */}
        <div className="landing-main-footer py-3">
            <div className="container">
                <Row>
                    <Col lg={6} className="text-lg-start text-center">
                        <span className="text-fixed-white op-7 fs-14"> © Copyright <span id="year">2025</span> <a
                            href="#!" className="text-primary fs-15 fw-semibold">QP-Hub</a>.
                        </span>
                    </Col>
                    <Col lg={6} className="text-lg-end text-center">
                        <ul className="list-unstyled fw-normal landing-footer-list mb-0">
                            <li>
                                <Link scroll={false} href="#!" className="text-fixed-white op-8">Terms Of Service</Link>
                            </li>
                            <li>
                                <Link scroll={false} href="#!" className="text-fixed-white op-8">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link scroll={false} href="#!" className="text-fixed-white op-8">Legal</Link>
                            </li>
                            <li>
                                <Link scroll={false} href="#!" className="text-fixed-white op-8">Contact</Link>
                            </li>
                            <li>
                                <Link scroll={false} href="#!" className="text-fixed-white op-8">Report Abuse</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
        {/* <!-- End:: Footer --> */}
    </Fragment>
  )
}

export default Landingfooter