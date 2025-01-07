import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const SkillsCard = () => {
  return (
    <Card className="custom-card">
      <Card.Header>
        <Card.Title>Skills</Card.Title>
      </Card.Header>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
