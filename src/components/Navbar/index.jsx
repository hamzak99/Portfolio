import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { menu } from "../../data.js";
import { Link, animateScroll as scroll } from "react-scroll";
import { Webmoney } from "../../images/index.js";
import XClose from "../../icons/XClose.jsx";
import UpRightArrowIcon from "../../icons/UpRightArrowIcon.jsx";
import MenuBarsStaggered from "../../icons/MenuBarsStaggered.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [showSide, setShowSide] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos > 145);
  };

  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = useRef(null);
  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar_container",
        { y: -250, width: "100%" },
        { y: 0, top: 0, zIndex: 100 }
      );
    }
  }, [visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".tab_item", { opacity: 0, stagger: 0.1 });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      className={`navbar_container ${visible ? "visible" : ""}`}
    >
      {showSide && (
        <div className="overlay" onClick={() => setShowSide(!showSide)}></div>
      )}

      <div
        className="log_container"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <img src={Webmoney} alt="logo" width={38} height={38} loading="lazy" />
      </div>

      <div className={`tab_group ${showSide ? "show" : ""}`}>
        <span
          className="icon_container close_btn"
          onClick={() => setShowSide(!showSide)}
        >
          <XClose />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab_item name"
            to={list.name.toLowerCase()}
            spy={true}
            onClick={() => setShowSide(false)}
            smooth={true}
            // offset={-150}
            duration={500}
            key={index}
            onSetActive={() => console.log(`Active: ${list.name}`)}
          >
            {list.name}
          </Link>
        ))}
      </div>

      <div className="nav_buttons_group">
        <a
          href="https://www.linkedin.com/in/hamzakasbaoui/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn_primary">
            Hire Me
            <UpRightArrowIcon />
          </button>
        </a>
        <MenuBarsStaggered setShowSide={setShowSide} showSide={showSide} />
      </div>
    </nav>
  );
};

export default Navbar;
