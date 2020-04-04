import React from "react";
import Logo from "../assets/static/figure.png";
import userIcon from "../assets/static/user.png";
import "../assets/styles/components/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <figure>
          <img 
            src={Logo} 
            alt="Projects Management Logo" 
          />
        </figure>
        <h1>Projects Management</h1>
      </div>
      <div className="Header__user">
        <figure>
          <img 
            src={userIcon} 
            alt="Header User" 
          />
        </figure>
        <h2>Guiselle Mejía</h2>
      </div>
    </header>
  );
};

export default Header;
