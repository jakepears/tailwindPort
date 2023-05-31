import React from "react";
import Slider from "./footer";
import "./styles.module.scss";

function index() {
  return (
    <div className="footer">
      <div className="what">
        <h3>What do I like?</h3>
      </div>
      <Slider />
    </div>
  );
}

export default index;
