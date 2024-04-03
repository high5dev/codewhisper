import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kenny Stacker </span>
            a passionate full stack web developer with <span className="purple"> 9+ years of experience </span>
            in creating dynamic and user-friendly web applications. My journey in web development began with a fascination for creating digital solutions that seamlessly blend creativity with functionality.
            <br />
            {/* Senior software Engineer who loves to transform ideas into reality using
            code.
            <br /> */}
            Outside of my professional work, I enjoy working on personal projects that challenge me to explore new concepts and refine my skills. Some of my recent projects include:
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://github.com/superstar951220/MetaTunes"}>MetaTunes</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://github.com/superstar951220/ipromise"}>ipromise</a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
