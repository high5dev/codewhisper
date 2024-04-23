import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Home (1).png";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";
import Avatar from 'react-avatar';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                {/* I'M */}
                <strong className="main-name"> Eric Thomas </strong>
              </h1>

              <p className="heading-description blockquote" style={{ textAlign: "justify" }}>
              As a software engineer with a specialization in bioinformatics, I understand how fascinating this field can be. <br/>
              I know firsthand how exhilarating it can be to uncover the mysteries of life through code, constantly pushing the boundaries of what's possible. <br/>
              I'm committed to innovation and to contributing to advancements in science and technology. <br/>
              Let's work together to explore this exciting field and make a real difference in the world!

              </p>

              <div className="heading-type">
                <TypeWriter />
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center">
              <Avatar src = {myImg} className="text-center rounded-circle mt-5 " size={300}></Avatar>
              {/* <img src={myImg} className="profile-pic " alt="avatar" /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
