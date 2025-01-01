import React from "react";
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data.js";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showSide, setShowSide] = React.useState(false);
  return (
    <nav className="navbar_container">

      {showSide ? (<div className="overlay" onClick={() => setShowSide(!showSide)}></div>) : ""}

      <div className="log_container">
        <SiWebmoney />
      </div>
      <div className={`tab_group ${showSide ? "show" : ""}`}>
        <span
          className="icon_container close_btn"
          onClick={() => setShowSide(!showSide)}
        >
          <FaTimes />
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
        <button className="btn btn_primary">
          Hire Me
          <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered
          className="menu"
          onClick={() => setShowSide(!showSide)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
