import React from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./SkillCard.css";
import CheckFill from "../../../icons/CheckFill";
const SkillCard = ({ data, title }) => {
  return (
    <div className="skill_card">
      <h3>{title}</h3>
      <div className="skill_content">
        {data.map((list, index) => (
          <article className="skill_details" key={index}>
            {/* <BsPatchCheckFill className="skill_icon" /> */}
            <CheckFill />
            {/* <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="skill_icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"></path>
            </svg> */}
            {/* <BsPatchCheckFill /> */}
            <div>
              <h4 className="skill_name">{list.skill}</h4>
              <small className="text_muted skill_level">{list.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
