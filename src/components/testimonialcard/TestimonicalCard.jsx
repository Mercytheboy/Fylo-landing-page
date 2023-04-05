import React from "react";
import "./testimonialcard.css";

function TestimonicalCard({ desc, pic, name, job }) {
  return (
    <div className="testimonial__section">
      <div className="testimonial__section-desc">{desc}</div>
      <div className="testimonial__section-profile">
        <div className="testmonial__section-profile_img">
          <img src={pic} alt="" />
        </div>
        <div className="testimonial__section-profile-detail">
          <p>{name}</p>
          <small>{job}</small>
        </div>
      </div>
    </div>
  );
}

export default TestimonicalCard;
