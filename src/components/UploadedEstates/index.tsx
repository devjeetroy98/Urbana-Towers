import React, { FC } from "react";
import UploadCards from "../UploadCards";
import "./style.css";

import SellableHouse from "../../api/dummy/uploadedEstates";

const UploadedEstates: FC = () => {
  return (
    <div className="real-estate-section">
      {SellableHouse.map((item: any) => {
        return <UploadCards data={item} key={item.id} />;
      })}
    </div>
  );
};

export default UploadedEstates;
