import React from "react";
import "./Cards.css";
// import { AiOutlineShareAlt } from "react-icons/ai";
// import { FaCopy } from "react-icons/fa";

function copyLink(link) {
  navigator.clipboard.writeText(link);
  
}

const Card = (props) => {
  const [openStackExpressionBar, setOpenStackExpressionBar] =
    React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="card">
      <div className="picture">
        {/* {console.log(Object.values(props.image)[0])} */}
        <img src={Object.values(props.image)[0]} alt={props.title} />
      </div>

      <div className="card_details">
        <div className="card_details_top">
          <h2 className="title"> {props.title}</h2>
        </div>
        <div className="card_details_middle">
          <p className="description">{props.data.description}</p>
        </div>
        <div className="card_details_bottom">
          <div className="stack_container">
            <div className="stack_left">Stack</div>
            <div className="stack_right">
              <div className="stack_box_container">
                {props.stack
                  .slice(0, showAll ? props.stack.length : 6)
                  .map((list, index) => (
                    <div className="stack_box" key={index}>
                      <div className="stack_icon_container">
                        <span
                          className="stack_icon"
                          style={{ color: list.iconColor, fontSize: "20px" }}
                        >
                          {list.icon}
                        </span>
                        <span className="stack_name">{list.name}</span>
                      </div>
                    </div>
                  ))}
              </div>
              {props.stack.length > 6 && (
                <button onClick={toggleShowAll} className="toggle_button">
                  {showAll ? "Show Less" : "Show More"}
                </button>
              )}
              {/* End Stack */}
              {/* {props.stack.lenght > 6 ? (
                <div className="stack_view_more">
                  <div
                    className="more_btn"
                    onClick={() =>
                      setOpenStackExpressionBar(!openStackExpressionBar)
                    }
                  ></div>
                  <div
                    className={`stack_expand_box ${
                      openStackExpressionBar ? "open_stack_expand_box" : ""
                    }`}
                  >
                    <h3 className="title">More Stack Used</h3>
                    <div className="stack_box_container">
                      {props.stack.map((list, index) => {
                        if (index >= 4) {
                          return (
                            <div className="stack_box">
                              <div className="stack_icon_container">
                                <span
                                  className="stack_con"
                                  style={{ color: list.iconColor }}
                                ></span>
                                <span className="stack_name">{list.name}</span>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
          {/* end stack_container */}
          {/* {console.log("props", props.data.demoLink)} */}
          <div className="button_container">
            <a
              href={props.data.demoLink}
              target="_blank"
              className="btn btn_primary"
            >
              Demo
            </a>
            <div className="btn_share">
              {/* <FaCopy onClick={() => copyLink(props.data.demoLink)} /> */}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => copyLink(props.data.demoLink)}
              >
                <path d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
