import React, { useEffect, useRef } from "react";
import "./About.css";
import { mainProfile } from "../../images/index.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const About = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(
      ".about_container",
      {
        scale: 0.7,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section ref={container} id="about">
      <div className="section_wrapper about_container">
        <div className="me_container blur-effect">
          <div className="photo_container">
            <img
              src={mainProfile}
              alt=""
              className="profile_photo"
              loading="lazy"
            />
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
