import React from "react";
import "./Navbar.css";
// import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data.js";
import { Link, animateScroll as scroll } from "react-scroll";
// import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
// import { FaTimes } from "react-icons/fa";
import { Webmoney } from "../../images/index.js";

const Navbar = () => {
  const [showSide, setShowSide] = React.useState(false);
  return (
    <nav className="navbar_container">
      {showSide ? (
        <div className="overlay" onClick={() => setShowSide(!showSide)}></div>
      ) : (
        ""
      )}

      <div className="log_container">
        {/* <SiWebmoney /> */}
        {console.log()}
        <img src={Webmoney} alt="logo" width={38} height={38} />
      </div>
      <div className={`tab_group ${showSide ? "show" : ""}`}>
        <span
          className="icon_container close_btn"
          onClick={() => setShowSide(!showSide)}
        >
          {/* <FaTimes /> */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 352 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
          </svg>
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab_item name"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="nav_buttons_group">
        <a href="">
          <button className="btn btn_primary">
            Hire Me
            {/* <FaArrowUpRightFromSquare /> */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
            </svg>
          </button>
        </a>
        {/* <FaBarsStaggered
          className="menu"
          onClick={() => setShowSide(!showSide)}
        /> */}
        <svg
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
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
