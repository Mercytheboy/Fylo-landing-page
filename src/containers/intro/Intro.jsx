import React from "react";
import Navbar from "../../components/navbar/Navbar";
import illustration from "../../assets/illustration-intro.png";

import "./intro.css";
import Btn from "../../components/btn/Btn";

function Intro() {
  return (
    <div className="intro__section section__padding">
      <Navbar />
      <div className="intro__section-content">
        <div className="intro__section-content_img">
          <img src={illustration} alt="" />
        </div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <Btn label="Get started" />
      </div>
    </div>
  );
}

export default Intro;
