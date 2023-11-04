import React from "react";
import { Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";
import "../styles.css";

const Header = () => {
  const { theme } = React.useContext(ThemeContext);

  const headerStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div className="header" style={headerStyle}>
      <h2>(Context API)</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
      <ThemeToggler />
    </div>
  );
};

export default Header;
