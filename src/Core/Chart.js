import React, { Component, useState } from "react";
import "./Chart.css";
import { BiLineChart } from "react-icons/bi";
import Chart from "react-apexcharts";

const ChartComp = (props) => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "percentage",
        data: [0, 37, 28, 51, 42, 50, 21],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="chart-main-div">
      <div className="chart-main-header-div">
        <div className="chart-main-header-div-left">
          <div>
            <h4>Comparison Graph</h4>
          </div>
          <div>
            <p>
              <b>You scored {props.values.percentile}% percentile</b> which is
              lower than the average percentile {99 - props.values.percentile}%
              of all the engineers who took this assessment
            </p>
          </div>
        </div>
        <div className="chart-main-header-div-right">
          <div className="chart-main-right-chart">
            <BiLineChart className="chart-main-right-chart-icons" />
          </div>
        </div>
      </div>

      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={337}
          width={657}
          className="chart-btm-chart-main"
        />
      </div>
    </div>
  );
};

export default ChartComp;
