import React from "react";
import "./Spinner.css";
import preloaderURL from "../../assets/images/preloader.gif";

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={preloaderURL} alt="" />
    </div>
  );
};

export default Spinner;
