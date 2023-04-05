import React from "react";
import Mailbox from "../../components/mailbox/Mailbox";
import { Link } from "react-router-dom";

// images
import logo from "../../assets/logo.svg";
import "./footer.css";
import location from "../../assets/icon-location.svg";
import phone from "../../assets/icon-phone.svg";
import email_icon from "../../assets/icon-email.svg";

// react icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer__section section__padding">
        <Mailbox />
        <div className="footer__Section-info">
          <div className="footer__Section-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="footer__section-info_links">
            <div className="footer__section-info_links-location">
              <img
                src={location}
                alt=""
                className="footer__section-info_links-icon"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                amet nisi voluptates? Vitae dolores magni libero amet! Modi,
                maxime! Corporis.
              </p>
            </div>

            <div className="footer__section-info_links-contact">
              <div className="footer__section-info_links-contact_details">
                <img
                  src={phone}
                  alt=""
                  className="footer__section-info_links-icon"
                />
                <p>+1-543-123-4567</p>
              </div>

              <div className="footer__section-info_links-contact_details">
                <img
                  src={email_icon}
                  alt=""
                  className="footer__section-info_links-icon"
                />
                <p>example@fylo.com</p>
              </div>
            </div>

            <div className="footer__section-info_links-pages">
              <a href="#">About Us</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>

            <div className="footer__section-info_links-pages">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>

            <div className="footer__section-info_links-socials">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
