import React from "react";
import "./Cards.css";
import { AiOutlineShareAlt } from "react-icons/ai";
const Card = (props) => {
  const [openStackExpressionBar, setOpenStackExpressionBar] =
    React.useState(false);

  return (
    <div className="card">
      <div className="picture">
        <img src={props.image} alt={props.title} />
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
                {props.stack.map((list, index) => {
                  if (index < 4) {
                    return (
                      <div className="stack_box">
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
                    );
                  }
                })}
              </div>
              {/* End Stack */}
              {props.stack.lenght > 4 ? (
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
              )}
            </div>
          </div>
          {/* end stack_container */}

          <div className="button_container">
            <a
              href={props.demoLink}
              target="_blank"
              className="btn btn_primary"
            >
              Demo
            </a>
            <div className="btn_share">
              <AiOutlineShareAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
