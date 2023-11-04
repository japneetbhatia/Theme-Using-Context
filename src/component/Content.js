import React from "react";
import Screen from "./Screen";
import ThemeContext from "./ThemeContext";

const Content = ({ text }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={`container ${theme === "light" ? "lightMode" : "darkMode"}`}
    >
      <Screen text={text} theme={theme} />
    </div>
  );
};

export default Content;
