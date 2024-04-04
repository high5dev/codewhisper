import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo_me.jpg";
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
                <strong className="main-name"> Kenny Stacker</strong>
              </h1>

              <p className="heading-description blockquote">
                Passionate Software Engineer with 9+ years of experience in developing web applications and backend
                systems. Skilled at writing clear, concise code that is easy to maintain and troubleshoot. Experienced
                in working with both small and large teams across multiple projects and companies. Able to work
                independently of remote locations or in office environments as needed by the company.

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
