import React from "react";
import Description from "./Description";
import Discount from "./Discount";

const Highlights = () => {
  return (
    <div className="centre-wrapper">
      <div className="highlight-wrapper">
        <Description />
        <Discount />
      </div>
    </div>
  );
};

export default Highlights;
