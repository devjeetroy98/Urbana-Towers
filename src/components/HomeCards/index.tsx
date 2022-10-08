import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import React, { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const areEqual = (prevProps: any, nextProps: any) => {
  return prevProps.data.id === nextProps.data.id;
};

const HomeCards: FC<any> = (props) => {
  const { data } = props;
  const { id, image, name, price, addressLine1, addressLine2 } = data;

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="card"
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
      <div className="card-footer">
        <button type="button">
          Request Tour <SendOutlined />
        </button>
        <button type="button">
          <HeartOutlined />
        </button>
      </div>
    </div>
  );
};

export default memo(HomeCards, areEqual);
