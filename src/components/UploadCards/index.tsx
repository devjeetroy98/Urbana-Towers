import { DeleteOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UploadCards: FC<any> = (props) => {
  const { data } = props;
  const { id, image, name, price, addressLine1, addressLine2, createdAt } =
    data;

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="upload-card"
      onClick={() => {
        navigateToDetails();
      }}
      onKeyDown={() => {
        navigateToDetails();
      }}
      role="link"
      tabIndex={0}
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
        <span>Uploaded On : </span>
        <p>{createdAt}</p>
      </div>
      <div className="card-footer">
        <button type="button">
          <DeleteOutlined /> Delete
        </button>
      </div>
    </div>
  );
};

export default UploadCards;
