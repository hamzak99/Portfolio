import React from "react";
import "./Footer.css";
import { socialHandles } from "../../data.js";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="section_wrapper">
        <div className="social_handle_container">
          {socialHandles.map((list, index) => (
            <a href={list.link} className="icon_container social_handles" target="_blank">
              {list.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
