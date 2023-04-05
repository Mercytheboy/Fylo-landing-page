import React from "react";
import "./testimonials.css";
import TestimonicalCard from "../../components/testimonialcard/TestimonicalCard";
import patel_profile from "../../assets/profile-1.jpg";
import bruce_profile from "../../assets/profile-2.jpg";
import iva_profile from "../../assets/profile-3.jpg";

function Testimonials() {
  return (
    <div className="testimonials__section section__padding">
      <TestimonicalCard
        desc={
          "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
        pic={patel_profile}
        name={"Satish Patel"}
        job={"founder & CEO, huddle"}
      />
      <TestimonicalCard
        desc={
          "Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine"
        }
        pic={bruce_profile}
        name={"Bruce McKenzie"}
        job={"Frounder & CEO, Huddle"}
      />
      <TestimonicalCard
        desc={
          "Fylo has improved our team productivity by an order of magnitude.Since making the switch our team has become a well-oiled collaboration machine"
        }
        pic={iva_profile}
        name={"Iva Boyd"}
        job={"Frounder & CEO, Huddle"}
      />
    </div>
  );
}

export default Testimonials;
