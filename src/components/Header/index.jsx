import React from "react";
import "./Header.css";
import { profile1, threeD } from "../../images/index.js";

const Header = () => {
  return (
    <header id="header" className="blur-effect">
      <div className="stroke_text intro_text">HELLO</div>
      <div className="section_wrapper header_container">
        <div className="column intro_container blur-effect">
          <div className="header_info">
            <div className="header_info_top">
              Hello There! I'm{" "}
              <span className="color_primary">Emmanuel Eze</span>
            </div>
            <div className="header_info_middle">
              <h1 className="primary_title header_title">
                I'M A WEB DEVELOPER
              </h1>
              <p className="text_muted header_description">
                I dissect intricate user experience challenges to engineer
                integrity-focused solutions that resonate with billions of
                users.
              </p>
            </div>
            <div className="header_info_bottom">
              <button className="btn">
                <a href="/hamzaKasbaoui.pdf" download="MyPDFFile">
                  Download CV
                </a>
              </button>
              <a href="mailto:mradinuba@gmail.com" className="btn">
                Email Me
              </a>
            </div>
          </div>
        </div>
        <div className="column profile_wrapper">
          <div className="profile_photo_container">
            <img src={threeD} alt="img" className="profile_photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
