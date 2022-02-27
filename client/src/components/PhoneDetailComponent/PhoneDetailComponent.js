import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPhoneReducer } from "../../redux/reducers/ListPhonesReducer";
import "./PhoneDetailComponent.css";

const PhoneDetailComponent = () => {
  const { detail } = useSelector((state) => getPhoneReducer(state));

  return (
    <>
      <Link to="/">Go Back</Link>
      <Container fluid className="details-container">
        {detail ? (
          <Row>
            <Col xs={12} sm={12} md={6} xl={6} xxl={6}>
              <img src={detail?.image} alt={detail.model} />
            </Col>

            <Col className="mt-5" xs={12} sm={12} md={6} xl={6} xxl={6}>
              <p>
                <span>Brand:</span> {detail.brand}
              </p>
              <p>
                <span>Model:</span> {detail.model}
              </p>
              <p>
                <span>Price:</span> {detail.price}
              </p>
              <p>
                <span>Stock:</span>{" "}
                {detail.stock > 0 ? detail.stock : "Sold Out"}
              </p>
              <p>
                <span>Colors:</span> {detail.colors}
              </p>
            </Col>
          </Row>
        ) : (
          <h1>Sorry! Go Back</h1>
        )}
      </Container>
    </>
  );
};

export default PhoneDetailComponent;
