import React from "react";
import { Col, Row } from "react-bootstrap";
// import Rating from "react-rating"
import { Rating } from 'react-simple-star-rating'

function Techstack(props) {
  return (
    <>
    <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
       <Col className="skill-name" xs={4}>
        {props.name}
      </Col>
      <Col xs={6} className="mx-50">
        <Rating
          readonly
          iconsCount={5}
          fillColor={'#f1a545'}
          emptyColor ={"#cccccc"}
          transition={true}
          allowFraction = {true}
          initialValue={props.initialRating}
          className="rating"
          style={{width:'max-content'}}
        />
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
