import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PhoneDetailComponent = () => {
  return (
    <Container>
      <Row className="d-flex">
        <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
          Columna 1
        </Col>

        <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
          Columna 2
        </Col>
      </Row>
    </Container>
  );
};

export default PhoneDetailComponent;
