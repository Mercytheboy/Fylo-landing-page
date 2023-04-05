import React from "react";
import "./work.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

import { Link } from "react-router-dom";

import productive from "../../assets/illustration-stay-productive.png";

function Work() {
  return (
    <div className="work__section section__padding">
      <div className="work__section-img">
        <img src={productive} alt="" />
      </div>
      <div className="work__section-content">
        <h1>Stay productive,<br/> wherever you are</h1>
        <p>
          Never let location be an issue when accesssing your files.Fylo has you
          covered for all your file storage needs.
        </p>
        <p>
          securely share files and folders with friend, family and collegues for
          live collaboration. No email attachments required
        </p>

        <div className="work__section-content_link">
          <Link to="/">
            See how Fylo works <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
