import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{"Hey, Your Currenrt Rank is"}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
};

export default Rank;
