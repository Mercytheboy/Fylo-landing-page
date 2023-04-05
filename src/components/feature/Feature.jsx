import React from "react";
import "./feature.css";

function Feature({ icon, title, desc }) {
  return (
    <div className="feature">
      <div className="feature__img">
        <img src={icon} alt="" />
      </div>
      <div className="feature__content">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Feature;
