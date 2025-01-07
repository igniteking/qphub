import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const RecentActivity = () => {
  return (
    <Card className="custom-card">
      <CardHeader>
        <CardTitle>RECENT ACTIVITY</CardTitle>
      </CardHeader>
      <CardBody>
        <ul className="widgets-task-list mb-0">
          <li className="">
            <div className="">
              {" "}
              <i className="task-icon bg-primary"></i>
              <h6 className=" mb-0">Task Finished</h6>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  {" "}
                  <span className="fs-12 text-muted">
                    Adam Berry finished task on{" "}
                    <Link scroll={false} href="#!" className="text-primary">
                      AngularJS Template
                    </Link>
                  </span>{" "}
                </div>
                <div className="min-w-fit-content ms-2 text-end">
                  <p className="mb-0 text-muted fs-11">09 July 2021</p>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <div className="">
              {" "}
              <i className="task-icon bg-primary"></i>
              <h6 className=" mb-0">Task Overdue</h6>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  {" "}
                  <span className="fs-12 text-muted">
                    Petey Cruiser finished
                  </span>{" "}
                  <Link scroll={false} href="#!" className="text-secondary">
                    Integrated management
                  </Link>{" "}
                </div>
                <div className="min-w-fit-content ms-2 text-end">
                  <p className="mb-0 text-muted fs-11">29 June 2021</p>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <div className="">
              {" "}
              <i className="task-icon bg-primary"></i>
              <h6 className=" mb-0">Task Finished</h6>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  {" "}
                  <span className="fs-12 text-muted">
                    Adam Berry finished task on
                  </span>
                  <Link scroll={false} href="#!" className="text-success">
                    AngularJS Template
                  </Link>
                </div>
                <div className="min-w-fit-content ms-2 text-end">
                  <p className="mb-0 text-muted fs-11">09 July 2021</p>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <div className="">
              {" "}
              <i className="task-icon bg-primary"></i>
              <h6 className=" mb-0">Completed Homework</h6>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  {" "}
                  <span className="fs-12 text-muted">
                    Adam Berry finished task on
                  </span>
                </div>
                <div className="min-w-fit-content ms-2 text-end">
                  <p className="mb-0 text-muted fs-11">09 July 2021</p>
                </div>
              </div>
            </div>
          </li>
          <li className="">
            <div className="">
              {" "}
              <i className="task-icon bg-primary"></i>
              <h6 className=" mb-0">Reached Target</h6>
              <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                <div>
                  {" "}
                  <span className="fs-12 text-muted">
                    Adam Berry finished task on
                  </span>
                </div>
                <div className="min-w-fit-content ms-2 text-end">
                  <p className="mb-0 text-muted fs-11">09 July 2021</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default RecentActivity;
