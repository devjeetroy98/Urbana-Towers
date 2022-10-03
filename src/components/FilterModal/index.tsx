import React, { FC, useEffect, useState } from "react";
import { Modal, Button } from "antd";
import stateLists from "../../api/dummy/state";
import "./style.css";

const FilterModal: FC<any> = (props: {
  applyChanges: any;
  handleFilterModal: any;
  filterData: any;
}) => {
  const { applyChanges, handleFilterModal, filterData } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [currentFilterTab, setCurrentFilterTab] = useState("Location");
  const [states, setStates] = useState([{ id: 0, name: "All", cities: [] }]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    price: 0,
    configuration: 1,
    carpetArea: 500,
    furnishingStatus: "Unfurnished",
  });

  const handleClose = () => {
    setIsOpen(false);
    handleFilterModal(false);
  };

  const applyFilter = () => {
    setIsOpen(false);
    handleFilterModal(false);
    applyChanges(formData);
  };

  useEffect(() => {
    const newstate = [...stateLists];
    setStates(newstate);
    const selectedState = filterData.state;
    for (let i = 0; i < newstate.length; i += 1) {
      if (newstate[i].name === selectedState) {
        setCities(newstate[i].cities);
      }
    }
    setFormData(filterData);
  }, []);

  const handleStateSelected = (event: any) => {
    const selectedState = event.target.value;
    setFormData({ ...formData, state: selectedState });
    for (let i = 0; i < states.length; i += 1) {
      if (states[i].name === selectedState) {
        setCities(states[i].cities);
      }
    }
  };

  const handleCitySelected = (event: any) => {
    const selectedCity = event.target.value;
    setFormData({ ...formData, city: selectedCity });
  };

  const handlePriceChange = (event: any) => {
    setFormData({ ...formData, price: parseInt(event.target.value, 10) });
  };

  const handleConfigChange = (event: any) => {
    setFormData({
      ...formData,
      configuration: parseInt(event.target.value, 10),
    });
  };

  const handleCarpetAreaChange = (event: any) => {
    setFormData({
      ...formData,
      carpetArea: parseInt(event.target.value, 10),
    });
  };

  const handleFurnishingChange = (event: any) => {
    setFormData({
      ...formData,
      furnishingStatus: event.target.value,
    });
  };

  return (
    <div className="container-modal">
      <Modal
        title="Filter"
        open={isOpen}
        onCancel={() => handleClose()}
        footer={[
          <Button
            key="back"
            type="primary"
            danger
            onClick={() => handleClose()}
          >
            Close
          </Button>,
          <Button key="apply" type="primary" onClick={() => applyFilter()}>
            Apply Filter
          </Button>,
        ]}
        width={550}
      >
        <div className="filter-body">
          <div className="left-panel">
            <Button
              type="text"
              className="s1"
              onClick={() => {
                setCurrentFilterTab("Location");
              }}
            >
              {currentFilterTab === "Location" ? (
                <p className="active">Location</p>
              ) : (
                <p>Location</p>
              )}
            </Button>
            <Button
              type="text"
              className="s2"
              onClick={() => {
                setCurrentFilterTab("Price");
              }}
            >
              {currentFilterTab === "Price" ? (
                <p className="active">Price</p>
              ) : (
                <p>Price</p>
              )}
            </Button>
            <Button
              type="text"
              className="s3"
              onClick={() => {
                setCurrentFilterTab("Configuration");
              }}
            >
              {currentFilterTab === "Configuration" ? (
                <p className="active">Configuration</p>
              ) : (
                <p>Configuration</p>
              )}
            </Button>
            <Button
              type="text"
              className="s4"
              onClick={() => {
                setCurrentFilterTab("Carpet Area");
              }}
            >
              {currentFilterTab === "Carpet Area" ? (
                <p className="active">Carpet Area</p>
              ) : (
                <p>Carpet Area</p>
              )}
            </Button>
            <Button
              type="text"
              className="s5"
              onClick={() => {
                setCurrentFilterTab("Furnishing Status");
              }}
            >
              {currentFilterTab === "Furnishing Status" ? (
                <p className="active">Furnishing Status</p>
              ) : (
                <p>Furnishing Status</p>
              )}
            </Button>
          </div>
          <div className="right-panel">
            {currentFilterTab === "Location" && (
              <div className="location-filter">
                <form>
                  <label htmlFor="state">
                    <p>State</p>
                    <select
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleStateSelected}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      {states.map((item: any) => (
                        <option value={item.name} key={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <br />
                  <br />
                  <label htmlFor="city">
                    <p>City</p>
                    <select
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleCitySelected}
                    >
                      <option value="All" selected>
                        All
                      </option>
                      {cities.map((item: any) => (
                        <option value={item.cityName} key={item.id}>
                          {item.cityName}
                        </option>
                      ))}
                    </select>
                  </label>
                </form>
              </div>
            )}
            {currentFilterTab === "Price" && (
              <div className="price-filter">
                <form>
                  <label htmlFor="price">
                    <p> Available Budget</p>
                    <input
                      value={formData.price}
                      type="range"
                      name="range"
                      id="price"
                      min="100000"
                      max="100000000"
                      onChange={handlePriceChange}
                    />
                    <p>
                      {new Intl.NumberFormat("en-In", {
                        style: "currency",
                        currency: "INR",
                      }).format(formData.price)}
                    </p>
                  </label>
                </form>
              </div>
            )}
            {currentFilterTab === "Configuration" && (
              <div className="config-filter">
                <form defaultChecked>
                  <label htmlFor="bhk1">
                    <input
                      type="radio"
                      name="cf"
                      id="bhk1"
                      value={1}
                      checked={formData.configuration === 1}
                      onChange={handleConfigChange}
                    />
                    <span> 1 BHK</span>
                  </label>
                  <br />
                  <label htmlFor="bhk2">
                    <input
                      type="radio"
                      name="cf"
                      id="bhk2"
                      value={2}
                      checked={formData.configuration === 2}
                      onChange={handleConfigChange}
                    />
                    <span> 2 BHK</span>
                  </label>
                  <br />
                  <label htmlFor="bhk3">
                    <input
                      type="radio"
                      name="cf"
                      id="bhk3"
                      value={3}
                      checked={formData.configuration === 3}
                      onChange={handleConfigChange}
                    />
                    <span> 3 BHK</span>
                  </label>
                  <br />
                  <label htmlFor="bhk4">
                    <input
                      type="radio"
                      name="cf"
                      id="bhk4"
                      value={4}
                      checked={formData.configuration === 4}
                      onChange={handleConfigChange}
                    />
                    <span> 4 BHK</span>
                  </label>
                  <br />
                  <label htmlFor="bhk5">
                    <input
                      type="radio"
                      name="cf"
                      id="bhk5"
                      value={5}
                      checked={formData.configuration === 5}
                      onChange={handleConfigChange}
                    />
                    <span> 5 BHK</span>
                  </label>
                  <br />
                </form>
              </div>
            )}
            {currentFilterTab === "Carpet Area" && (
              <div className="carpet-filter">
                <form>
                  <label htmlFor="area">
                    <p>Carpet Area</p>
                    <input
                      type="range"
                      value={formData.carpetArea}
                      name="carpet"
                      id="area"
                      min="500"
                      max="5000"
                      onChange={handleCarpetAreaChange}
                    />
                    <p>{formData.carpetArea} sq. ft.</p>
                  </label>
                </form>
              </div>
            )}
            {currentFilterTab === "Furnishing Status" && (
              <div className="furnish-filter">
                <form defaultChecked>
                  <label htmlFor="f1">
                    <input
                      type="radio"
                      name="ff"
                      id="bhk1"
                      value="Unfurnished"
                      onChange={handleFurnishingChange}
                      checked={formData.furnishingStatus === "Unfurnished"}
                    />
                    <span>Unfurnished</span>
                  </label>
                  <br />
                  <label htmlFor="f2">
                    <input
                      type="radio"
                      name="ff"
                      id="bhk2"
                      value="Semi Furnished"
                      onChange={handleFurnishingChange}
                      checked={formData.furnishingStatus === "Semi Furnished"}
                    />
                    <span>Semi Furnished</span>
                  </label>
                  <br />
                  <label htmlFor="f3">
                    <input
                      type="radio"
                      name="ff"
                      id="bhk3"
                      value="Fully Furnished"
                      onChange={handleFurnishingChange}
                      checked={formData.furnishingStatus === "Fully Furnished"}
                    />
                    <span>Fully Furnished</span>
                  </label>
                </form>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
