import React from "react";
import { Link } from "react-router-dom";
import "./BackArrow.css";

const BackArrow = () => {
  return (
    <Link to="/" className="back-arrow">
      {/* <svg
        fill="#000000"
        viewBox="0 0 52 52"
        data-name="Layer 1"
        id="Layer_1"
        // xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g data-name="Group 132" id="Group_132">
            {" "}
            <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"></path>{" "}
          </g>{" "}
        </g>
      </svg> */}
      <svg
        fill="#000000"
        viewBox="-5.2 -5.2 62.40 62.40"
        data-name="Layer 1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
        stroke-width="5.2"
        transform="rotate(0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke="#CCCCCC"
          stroke-width="0.10400000000000001"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g data-name="Group 132" id="Group_132">
            {" "}
            <path d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    </Link>
  );
};

export default BackArrow;
