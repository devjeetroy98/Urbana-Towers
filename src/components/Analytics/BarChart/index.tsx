import React, { FC, useRef } from "react";
import Chart from "chart.js/auto";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";

const BarChartVertical: FC<any> = (props) => {
  console.log(props);

  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const { data: chartData, handleBarChart } = props;

  const chartRef: any = useRef();
  const onClick = (event: any) => {
    const tempData = getElementAtEvent(chartRef.current, event);
    const { index } = tempData[0];
    handleBarChart(chartData.labels[index]);
  };

  return (
    <div className="bar-chart-container">
      <Bar
        ref={chartRef}
        data={chartData}
        onClick={onClick}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Profile View",
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Month",
              },
            },
            y: {
              title: {
                display: true,
                text: "Views",
              },
              min: 0,
              max: Math.max(...chartData.datasets[0].data) as number,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChartVertical;
