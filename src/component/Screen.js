import React from "react";

const Screen = ({ text, theme }) => {
  return (
    <div className="Screen">
      <h2>{theme} theme</h2>
      <h3>{text} Page</h3>
    </div>
  );
};

export default Screen;
