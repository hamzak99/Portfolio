import React from "react";

const MenuBarsStaggered = ({ setShowSide, showSide }) => {
  return (
    <div>
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
  );
};

export default MenuBarsStaggered;
