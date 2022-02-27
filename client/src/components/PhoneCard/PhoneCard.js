import React from "react";
import "./PhoneCard.css";
import { useSelector, useDispatch } from "react-redux";
import { asyncDetailData } from "../../redux/actions/DetailPhoneAction";
import { listPhones } from "../../redux/reducers/ListPhonesReducer";
import { useNavigate } from "react-router-dom";

const PhoneCard = () => {
  const data = useSelector((state) => listPhones(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetailsPhone = (data) => {
    dispatch(asyncDetailData(data));
    navigate(`/detail/${data.id}`);
  };

  return (
    <ul className="cards">
      {data?.length > 0 ? (
        data?.map((p) => (
          <li className="cards_item" key={p.id}>
            <div className="card">
              <div className="card_image">
                <img src={p.image} alt={p.model} />
              </div>
              <div className="card_content">
                <h2 className="card_title">
                  {p.brand}
                  {p.model}
                </h2>
                <br />
                <p className="card_text">Colors: {p.colors}</p>
                <p className="card_text">Price: {p.price}</p>
                <p className="card_text">
                  Stock: {p.stock > 0 ? p.stock : "sold out"}
                </p>
                <button
                  className="btn card_btn"
                  onClick={() => getDetailsPhone(p)}
                >
                  More Details
                </button>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h1>Sold Out</h1>
      )}
    </ul>
  );
};

export default PhoneCard;
