import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import {
  CheckCircleOutlined,
  HeartOutlined,
  PhoneOutlined,
  StarOutlined,
  TeamOutlined,
  ToolOutlined,
  UpCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import ImageModal from "../ImageModal";
import Modal360 from "../Modal360View";

import apartments from "../../api/dummy/apartments";
import House from "../../interfaces/House";

const Apartment: FC = () => {
  const { id } = useParams();

  const [apartment, setApartment] = useState({} as House);
  const [showModal, setShowModal] = useState(false);
  const [showModal360, setShowModal360] = useState(false);
  const [showFloorPlan, setShowFloorPlan] = useState(false);

  const handleImageModal = (data: any) => {
    setShowModal(data);
  };

  const viewFullScreenImage = () => {
    setShowModal(true);
  };

  const handle360Modal = (data: any) => {
    setShowModal360(data);
  };

  const viewFullScreenImage360 = () => {
    setShowModal360(true);
  };

  const handleFloorPlanModal = (data: any) => {
    setShowFloorPlan(data);
  };

  const viewFullScreenFloorPlan = () => {
    setShowFloorPlan(true);
  };

  useEffect(() => {
    if (id) {
      apartments.forEach((item: any) => {
        if (item.id === parseInt(id, 10)) {
          setApartment(item);
        }
      });
    }
  }, [id]);

  return (
    <div className="apartment-container">
      <div className="left-panel">
        <div className="image-container">
          <img src={apartment.image} alt="Apartment" />
        </div>
        <div className="info-btns">
          <button type="button" onClick={() => viewFullScreenImage()}>
            View Fullscreen
          </button>
          <button type="button" onClick={() => viewFullScreenImage360()}>
            View 360
          </button>
          <button type="button">
            <HeartOutlined />
          </button>
        </div>
        <div className="apartment-details">
          <div className="name">
            <p>
              {apartment?.name}
              <span>
                <CheckCircleOutlined /> Verified
              </span>
            </p>
          </div>
          <div className="address">
            <p>
              {apartment.addressLine1} {apartment.addressLine2}
            </p>
          </div>
          <div className="config">
            <div className="s1">
              Carpet Area : {apartment?.carpetArea} sq. ft.
            </div>
            <div className="s2">
              Configuration : {apartment?.configuration} BHK
            </div>
            <div className="s3">Furnishing : {apartment?.furnishingStatus}</div>
          </div>
          <div className="price">
            <p>Price: ₹ {apartment.price}</p>
          </div>
          <div className="description">
            <p>Description</p>
            <p>
              {apartment?.description}
              <a href="/doc"> Click here to download brochure.</a>
            </p>
          </div>
          <div className="amenities">
            <p>Amenities</p>
            <div className="box">
              <div className="s1">
                <UpCircleOutlined /> Lift
              </div>
              <div className="s2">
                <TeamOutlined /> Security
              </div>
              <div className="s3">
                <PhoneOutlined /> Intercom Facility
              </div>
              <div className="s4">
                <ToolOutlined /> Maintenance Staff
              </div>
              <div className="s5">
                <VideoCameraOutlined /> CCTV Camera
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-panel">
        <div className="top">
          <div className="agent">
            <p>Agent Details</p>
          </div>
          <div className="details">
            <div className="lp">
              <img src={apartment?.seller?.profilePic} alt="Agent" />
            </div>
            <div className="rp">
              <p>
                {apartment?.seller?.firstName} {apartment?.seller?.lastName}
              </p>
              <p>{apartment?.seller?.address}</p>
              <p>
                <StarOutlined />
                {apartment?.seller?.profileRating}
              </p>
            </div>
          </div>
          <div className="call-to-action">
            <button type="button">
              Call Seller {apartment?.seller?.phoneNumber}
            </button>
            <button type="button">Request Tour</button>
          </div>
          <div className="plan">
            <p>Floor Plan</p>
            <button onClick={() => viewFullScreenFloorPlan()} type="button">
              <img src={apartment.floorPlan} alt="" />
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ImageModal
          title={apartment.name}
          image={apartment.image}
          handleImageModal={handleImageModal}
        />
      )}
      {showModal360 && (
        <Modal360
          title={apartment.name}
          image={apartment.image360}
          handle360Modal={handle360Modal}
        />
      )}
      {showFloorPlan && (
        <ImageModal
          title={apartment.name}
          image={apartment.floorPlan}
          handleImageModal={handleFloorPlanModal}
        />
      )}
    </div>
  );
};

export default Apartment;
