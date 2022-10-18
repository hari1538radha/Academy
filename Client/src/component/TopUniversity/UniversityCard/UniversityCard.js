import React from "react";
import "./UniversityCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function UniversityCard({ uniInfo }) {
  console.log(uniInfo);
  const navigate = useNavigate();
  const location = useLocation().state;

  const handelDetail = (e) => {
    navigate("/universities/detail", { state: { state: uniInfo } });
  };
  return (
    <div className="uni-card-container" onClick={handelDetail}>
      <div className="uni-img-container">
        <img src={uniInfo.Image}></img>
      </div>
      <div className="uni-content-container">
        <div className="uni-title">
          <a href={uniInfo.url} target="_blank">
            {uniInfo.Name_1}
          </a>
        </div>
        <div className="uni-place-container">
          <span className="uni-district">{uniInfo.District}</span>
          <span className="uni-state">{uniInfo.State}</span>
        </div>
        <div className="uni-rank-container">
          <span className="uni-rank-1"></span>
          <span className="uni-rant-2"></span>
        </div>
        <div className="uni-description"></div>
      </div>
      <div className="uni-stats-container">
        <div className="uni-stat-title"></div>
        <div className="uni-stat-value"></div>
      </div>
    </div>
  );
}

export default UniversityCard;

