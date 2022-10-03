import { DeleteOutlined, SendOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const WishlistCards: FC<any> = (props) => {
  const { data } = props;
  const {
    id,
    image,
    name,
    price,
    addressLine1,
    addressLine2,
    createdAt,
    visited,
  } = data;

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="wishlist-card"
      onClick={() => {
        navigateToDetails();
      }}
      onKeyDown={() => {
        navigateToDetails();
      }}
      role="link"
      tabIndex={0}
      style={{ backgroundColor: visited ? "#cdffcd" : "#FFCCCB" }}
    >
      <div className="card-image">
        <img src={image} alt="Sample House for Sale" />
      </div>
      <div className="card-title">
        <p>{name}</p>
      </div>
      <div className="card-body">
        <p>₹ {price}</p>
        <p>{addressLine1}</p>
        <p>{addressLine2}</p>
      </div>
      <div className="wishlist-time">
        <span>Wishlisted On : </span>
        <p>{createdAt}</p>
      </div>
      <div className="card-footer">
        {visited ? (
          <>
            <button type="button">
              Request Revisit <SendOutlined />
            </button>
            <button type="button">
              <DeleteOutlined />
            </button>
          </>
        ) : (
          <>
            <button type="button">
              Request Tour <SendOutlined />
            </button>
            <button type="button">
              <DeleteOutlined />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistCards;
