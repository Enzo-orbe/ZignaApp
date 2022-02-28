import React, { useEffect, lazy, Suspense } from "react";
// import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneListContainerCss.css";
import { useDispatch } from "react-redux";
import { asyncFetchData } from "../../redux/actions/ListPhonesActions";
import { Spinner } from "react-bootstrap";

const PhoneListContainer = () => {
  const PhoneCard = lazy(() => import("../PhoneCard/PhoneCard"));
  const dispatch = useDispatch();

  useEffect(() => {
    const listPhones = () => dispatch(asyncFetchData());
    listPhones();
  }, []);

  return (
    <div className="phones-container">
      <Suspense
        fallback={
          <Spinner animation="border" variant="dark" className="loading" />
        }
      >
        <PhoneCard />
      </Suspense>
    </div>
  );
};

export default PhoneListContainer;
