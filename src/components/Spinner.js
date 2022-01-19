import React, { Component } from "react";

import loading from "./laoding.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="Prepairing your News...." />
    </div>
  );
};

export default Spinner;
