import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import logoImage from "./Logo.png";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img src={logoImage} alt="Logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
