import React, { FC, useState } from "react";
import "./style.css";
import { FilterOutlined } from "@ant-design/icons";
import FilterModal from "../../components/FilterModal";
import HomeCards from "../../components/HomeCards";
import apartments from "../../api/dummy/apartments";

const Catalogue: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [filterData, setFilterData] = useState({
    state: "",
    city: "",
    price: 0,
    configuration: 1,
    carpetArea: 500,
    furnishingStatus: "Unfurnished",
  });

  const handleFilterModal = (data: any) => {
    setShowModal(data);
  };

  const viewFullScreenFilter = () => {
    setShowModal(true);
  };

  const applyChanges = (data: any) => {
    console.log(data);
    setFilterData(data);
  };

  const resetFilter = () => {
    setFilterData({
      state: "",
      city: "",
      price: 0,
      configuration: 1,
      carpetArea: 500,
      furnishingStatus: "Unfurnished",
    });
  };

  return (
    <div className="container-apartments">
      <div className="filters">
        <div className="lp">
          <p>Our New Listings in India</p>
        </div>
        <div className="rp">
          <div className="sq-box">
            <button type="button" onClick={() => viewFullScreenFilter()}>
              Filters <FilterOutlined />
            </button>
            <button type="button" onClick={() => resetFilter()}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="apartments">
        {apartments.map((data: any) => {
          return <HomeCards data={data} key={data.id} />;
        })}
      </div>
      {showModal && (
        <FilterModal
          applyChanges={applyChanges}
          handleFilterModal={handleFilterModal}
          filterData={filterData}
        />
      )}
    </div>
  );
};

export default Catalogue;
