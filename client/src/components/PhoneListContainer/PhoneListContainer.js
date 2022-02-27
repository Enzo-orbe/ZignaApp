import React, { useEffect } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import "./PhoneListContainerCss.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncFetchData } from "../../redux/actions/ListPhonesActions";
import { getPhoneReducer } from "../../redux/reducers/ListPhonesReducer";
import { Spinner } from "react-bootstrap";

const PhoneListContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => getPhoneReducer(state));

  useEffect(() => {
    const listPhones = () => dispatch(asyncFetchData());
    listPhones();
  }, []);

  return (
    <div className="phones-container">
      {state.isFetching ? (
        <Spinner animation="border" variant="dark" className="loading" />
      ) : (
        <PhoneCard />
      )}
    </div>
  );
};

export default PhoneListContainer;
