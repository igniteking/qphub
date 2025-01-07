import Link from "next/link";
import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "react-bootstrap";

const SkillsCard = () => {
  return (
    <Card className="custom-card">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardBody>
        <div className="popular-tags">
          <Link
            scroll={false}
            href="#!"
            className="badge rounded-pill bg-light text-default me-1"
          >
            HTML
          </Link>
          <Link
            scroll={false}
            href="#!"
            className="badge rounded-pill bg-light text-default me-1"
          >
            CSS
          </Link>
          <Link
            scroll={false}
            href="#!"
            className="badge rounded-pill bg-light text-default me-1"
          >
            Javascript
          </Link>
          <Link
            scroll={false}
            href="#!"
            className="badge rounded-pill bg-light text-default me-1"
          >
            Angular
          </Link>
          <Link
            scroll={false}
            href="#!"
            className="badge rounded-pill bg-light text-default me-1"
          >
            React
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};

export default SkillsCard;
