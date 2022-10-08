import React, { FC, useState, useCallback, useRef, useEffect } from "react";
import "./style.css";
import { FilterOutlined } from "@ant-design/icons";
import FilterModal from "../../components/FilterModal";
import HomeCards from "../../components/HomeCards";
import apartments from "../../api/dummy/apartments";

const Catalogue: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [houses, setHouses] = useState([] as any);
  const filterData = useRef({
    state: "",
    city: "",
    price: 0,
    configuration: 1,
    carpetArea: 500,
    furnishingStatus: "Unfurnished",
  });

  const handleFilterModal = useCallback(
    (data: any) => {
      setShowModal(data);
    },
    [showModal],
  );

  const viewFullScreenFilter = () => {
    setShowModal(true);
  };

  const applyChanges = useCallback(
    (data: any) => {
      console.log(data);
      filterData.current = data;
    },
    [filterData.current],
  );

  const resetFilter = () => {
    filterData.current = {
      state: "",
      city: "",
      price: 0,
      configuration: 1,
      carpetArea: 500,
      furnishingStatus: "Unfurnished",
    };
  };

  useEffect(() => {
    setHouses(apartments);
  }, []);

  useEffect(() => {
    console.log("RENDERING");
  });

  return (
    <div className="container-apartments">
      <div className="filters">
        <div className="lp">
          <p>Our New Listings in India</p>
        </div>
        <div className="rp">
          <div className="sq-box">
            <button
              type="button"
              onClick={() => {
                viewFullScreenFilter();
              }}
            >
              Filters <FilterOutlined />
            </button>
            <button type="button" onClick={() => resetFilter()}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <div className="apartments">
        {houses.map((data: any) => {
          return <HomeCards data={data} key={data.id} />;
        })}
      </div>
      {showModal && (
        <FilterModal
          applyChanges={applyChanges}
          handleFilterModal={handleFilterModal}
          filterData={filterData.current}
        />
      )}
    </div>
  );
};

export default Catalogue;
