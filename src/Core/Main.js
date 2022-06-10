import React, { useState, useEffect } from "react";
import "./Main.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import award from "../Assets/award.png";
import icon from "../Assets/icon.png";
import icon1 from "../Assets/icon1.png";
import Card from "./Card";

const Main = () => {

  return (
    <div className="main-god">
      <div className="main-subgod">
        <div className="main-nav">
          <div className="tabs-btn">
            <button>Logo Here</button>
          </div>
          <div className="profilee-icon">
            <img
              className="profile-img"
              src="https://images.unsplash.com/photo-1575384043001-f37f48835528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="details-person">
              <p className="profile-name">Aditya Kumar Singh</p>
              <span className="college-name">JIIT</span>
            </div>
          </div>
        </div>
        <div className="main-home">
          <div className="home-sidebar">
            <div className="sidebar-sec">
              <img src={icon} alt="" />
              <p>Applied</p>
            </div>
            <div className="sidebar-sec1">
              <img src={award} alt="" />
              <p>Openings</p>
            </div>
            <div className="sidebar-sec">
              <img src={icon1} alt="" />
              <p>Internships</p>
            </div>
          </div>
          <div className="home-tabs">
            <div className="tabs-title">
              <p>Job Openings</p>
            </div>
            <div className="tabs-tabs">
              <div className="tabs-left">
                <Card/>
              </div>
              <div className="tabs-right">
                <div className="progress-div">
                  <h6>YOUR SKILL ANALYSIS</h6>
                  <div className="progress-item item-one">
                    <p>Machine Learning</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={80} />
                      80%
                    </div>
                  </div>
                  <div className="progress-item item-two">
                    <p>C++</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={60} />
                      60%
                    </div>
                  </div>
                  <div className="progress-item item-three">
                    <p>ReactJs</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={24} />
                      24%
                    </div>
                  </div>
                  <div className="progress-item item-four">
                    <p>Networking Fundamentals</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={96} />
                      96%
                    </div>
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
