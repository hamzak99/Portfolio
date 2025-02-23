import React from "react";
import "./About.css";
import { mainProfile } from "../../images/index.js";
const About = () => {
  return (
    <section id="about">
      <div className="section_wrapper about_container">
        <div className="me_container blur-effect">
          <div className="photo_container">
            <img src={mainProfile} alt="" className="profile_photo" />
          </div>
        </div>
        <div className="section_header">
          <h2 className="primary_title">About Me</h2>
          <h1 className="title">
            I am <span className="color_primary">Hamza Kasbaoui</span>
          </h1>
          <p className="text_muted description">
            I am a dedicated software developer with a focus on building
            efficient, secure, and user-friendly applications. With expertise in
            both backend and frontend technologies, I specialize in solving
            problems, creating scalable solutions, and optimizing performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
