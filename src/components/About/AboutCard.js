import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eric Thomas. </span><br />
            With a strong background in <span className="purple">molecular biology</span> and skills in <span className="purple">programming languages</span> such as Python
            and R, I am skilled at analyzing data, developing bioinformatics pipelines, and interpreting results to
            advance research in the field.
            <br />
            {/* Senior software Engineer who loves to transform ideas into reality using
            code.
            <br /> */}
            I am eager to use my knowledge to explore the mysteries of genomics,
            proteomics, and other biological processes, ultimately driving advancements in healthcare and
            biotechnology.
            <br />            
            Apart from bioinformatics, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://github.com/superstar951220/MetaTunes"}>Torontovka</a>
            </li>
            <li className="about-activity">
              <ImPointRight /> <a href={"https://github.com/superstar951220/ipromise"}>iPromise</a>
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
