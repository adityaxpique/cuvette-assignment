import React, { useState, useEffect } from "react";
import "./Main.css";
import Chart from "react-apexcharts";
import ProgressBar from "react-bootstrap/ProgressBar";
import logo from "../Assets/logo.png";
import award from "../Assets/award.png";
import icon from "../Assets/icon.png";
import icon1 from "../Assets/icon1.png";
import html from "../Assets/image 4.png";
import pad from "../Assets/pad.png";
import tick from "../Assets/tick.png";
import trophy from "../Assets/trophy.png";
import Charts from "../Core/Chart";
import MyVerticallyCenteredModal from "./Modal";

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [values, setValues] = useState({
    rank: 12890,
    percentile: 37,
    answered: 7,
  });

  const [pieData, setPieData] = React.useState({
    series: [values.answered, 15 - values.answered],

    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 230,
      },
      colors: ["#438AF6", "#438AF61A"],
      labels: ["Answered", "Unanswered"],
    },
  });

  useEffect(() => {
    setPieData((prev) => {
      return { ...prev, series: [values.answered, 15 - values.answered] };
    });
  }, [values]);

  return (
    <div className="main-god">
      {modalShow && (
        <MyVerticallyCenteredModal
          values={values}
          setValues={setValues}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      )}
      <div className="main-subgod">
        <div className="main-nav">
          <img className="icon" src={logo} alt="" />
          <div className="profilee-icon">
            <img
              className="profile-img"
              src="https://images.unsplash.com/photo-1575384043001-f37f48835528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p className="profile-name">Siddharth Jain</p>
          </div>
        </div>
        <div className="main-home">
          <div className="home-sidebar">
            <div className="sidebar-sec">
              <img src={icon} alt="" />
              <p>Dashboard</p>
            </div>
            <div className="sidebar-sec1">
              <img src={award} alt="" />
              <p>Skill Test</p>
            </div>
            <div className="sidebar-sec">
              <img src={icon1} alt="" />
              <p>Internships</p>
            </div>
          </div>
          <div className="home-tabs">
            <div className="tabs-title">
              <p>Skill Test</p>
            </div>
            <div className="tabs-tabs">
              <div className="tabs-left">
                <div className="tab one">
                  <div className="tab-icon">
                    <img src={html} alt="" />
                  </div>
                  <div className="tab-texts">
                    <span>Hypertext Markup Language</span>
                    <span className="span-txt">
                      Questions: 08 | Duration: 15 mins | Submitted on 5 June
                      2021
                    </span>
                  </div>
                  <div className="tabs-btn">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setModalShow(true);
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
                <div className="tab two">
                  <p>Quick Statistics</p>
                  <div className="two-hori">
                    <div className="two-element">
                      <img className="two-img" src={trophy} alt="" />
                      <div className="two-text">
                        <span className="sub-textt">{values.rank}</span>
                        <span className="sub-text">YOUR RANK</span>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="two-element">
                      <img className="two-img" src={pad} alt="" />
                      <div className="two-text">
                        <span className="sub-textt">{values.percentile}%</span>
                        <span className="sub-text">PERCENTILE</span>
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="two-element">
                      <img className="two-img" src={tick} alt="" />
                      <div className="two-text">
                        <span className="sub-textt">
                          {values.answered} / 15
                        </span>
                        <span className="sub-text">CORRECT ANSWERS</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three">
                  <Charts values={values} />
                </div>
              </div>
              <div className="tabs-right">
                <div className="progress-div">
                  <h6>Syllabus wise Analysis</h6>
                  <div className="progress-item item-one">
                    <p>HTML Tools, Forms, History</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={80} />
                      80%
                    </div>
                  </div>
                  <div className="progress-item item-two">
                    <p>Tags & References in HTML</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={60} />
                      60%
                    </div>
                  </div>
                  <div className="progress-item item-three">
                    <p>Tables & CSS Basics</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={24} />
                      24%
                    </div>
                  </div>
                  <div className="progress-item item-four">
                    <p>Tables & CSS Basics</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={96} />
                      96%
                    </div>
                  </div>
                </div>
                <div className="left-two">
                  <div className="title-left-two">
                    <span className="chart-title">Question Analysis</span>
                    <span className="chart-score">{values.answered} / 15</span>
                  </div>
                  <div className="text-left-two">
                    <span>
                      <b>
                        You scored {values.answered} question correct out of 15.
                      </b>{" "}
                      However it still needs some improvements
                    </span>
                  </div>
                  <div className="chart-left-two">
                    <Chart
                      options={pieData.options}
                      series={pieData.series}
                      labels={pieData.chartOptions}
                      type="donut"
                      width="340"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
