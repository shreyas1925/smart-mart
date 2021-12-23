import React from "react";
import { Spinner } from "react-bootstrap";
// import "../styles/loader.css";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>

    // <>
    //   <div class="container">
    //     <div class="dot dot-1"></div>
    //     <div class="dot dot-2"></div>
    //     <div class="dot dot-3"></div>
    //   </div>

    //   <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    //     <defs>
    //       <filter id="goo">
    //         <feGaussianBlur
    //           in="SourceGraphic"
    //           stdDeviation="10"
    //           result="blur"
    //         />
    //         <feColorMatrix
    //           in="blur"
    //           mode="matrix"
    //           values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
    //         />
    //       </filter>
    //     </defs>
    //   </svg>
    // </>
  );
};

export default Loader;
