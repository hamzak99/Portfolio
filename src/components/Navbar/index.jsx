import React, { useEffect, useRef } from "react";
import "./Navbar.css";
// import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data.js";
import { Link, animateScroll as scroll } from "react-scroll";
// import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
// import { FaTimes } from "react-icons/fa";
import { Webmoney } from "../../images/index.js";
import XClose from "../../icons/XClose.jsx";
import UpRightArrowIcon from "../../icons/UpRightArrowIcon.jsx";
import MenuBarsStaggered from "../../icons/MenuBarsStaggered.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Navbar = () => {
  const [showSide, setShowSide] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 145) {
      return setVisible(true);
    }
    return setVisible(false);
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
      timeline.from(".tab_item", { opacity: 0, stagger: 0.5 });
    },
    { scope: container }
  );
  return (
    <nav
      ref={container}
      className={`navbar_container ${visible ? "visible" : ""}`}
    >
      {showSide ? (
        <div className="overlay" onClick={() => setShowSide(!showSide)}></div>
      ) : (
        ""
      )}

      <div
        className="log_container"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        {/* <SiWebmoney /> */}
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
            smooth={true}
            offset={-150} // Increase this value
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
            {/* <FaArrowUpRightFromSquare /> */}
            <UpRightArrowIcon />
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
            </svg> */}
          </button>
        </a>
        {/* <FaBarsStaggered
          className="menu"
          onClick={() => setShowSide(!showSide)}
        /> */}
        <MenuBarsStaggered setShowSide={setShowSide} showSide={showSide} />
        {/* <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="menu"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setShowSide(!showSide)}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
        </svg> */}
      </div>
    </nav>
  );
};

export default Navbar;
