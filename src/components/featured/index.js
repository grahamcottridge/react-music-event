import React from "react";
import Carousel from "./Carousel";
import Countdown from "./Countdown";

const Featured = () => {
  return (
    <div className="featured" style={{ position: "relative" }}>
      <Carousel />

      <div className="artist-name">
        <div className="wrapper">Jazz Festival</div>
      </div>

      <Countdown />
    </div>
  );
};

export default Featured;
