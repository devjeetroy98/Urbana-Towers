import React, { FC, useState, useEffect } from "react";
import LineChartVertical from "../Analytics/LineChart";
import BarChartVertical from "../Analytics/BarChart";
import "./style.css";

import houseVisit from "../../api/dummy/realEstateVisitAnalytics";

const ProfileAnalytics: FC = () => {
  const [barChartData, setBarChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "",
      },
    ],
  } as any);
  const [monthWiseChartData, setMonthWiseChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  } as any);

  useEffect(() => {
    if (houseVisit) {
      const visitData = {
        labels: houseVisit.map((item: any) => {
          return item?.name;
        }),
        datasets: [
          {
            label: "Real Estate Visit",
            data: houseVisit.map((item: any) => {
              return item?.totalVisit;
            }),
            backgroundColor: "rgb(94, 23, 235)",
          },
        ],
      };
      setBarChartData(visitData);
    }
  }, []);

  const handleBarChart = (data: any) => {
    let visitArray: any = [];
    if (data) {
      houseVisit.forEach((house: any) => {
        if (house.name === data) {
          visitArray = house.visitTimeline;
        }
      });

      const monthWiseData = {
        labels: visitArray.map((item: any) => {
          return item?.month;
        }),
        datasets: [
          {
            label: `Monthwise visit data for ${data}`,
            data: visitArray.map((item: any) => {
              return item?.visit;
            }),
            fill: false,
            borderColor: "rgb(94, 23, 235)",
            tension: 0.1,
          },
        ],
      };
      console.log(monthWiseData);
      setMonthWiseChartData(monthWiseData);
    }
  };

  return (
    <div className="graph-section">
      <div className="visit-view">
        {barChartData.labels.length > 0 && (
          <BarChartVertical
            data={barChartData}
            handleBarChart={handleBarChart}
          />
        )}
      </div>
      <div className="vist-view">
        {monthWiseChartData.labels.length > 0 && (
          <LineChartVertical data={monthWiseChartData} />
        )}
      </div>
    </div>
  );
};

export default ProfileAnalytics;
