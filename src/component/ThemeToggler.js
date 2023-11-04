import React from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button
      className={`${theme === "light" ? "darkMode" : "lightMode"}`}
      onClick={toggleTheme}
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggler;
