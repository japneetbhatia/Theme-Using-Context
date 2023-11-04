import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "./component/Content";
import Header from "./component/Header";
import ThemeProvider from "./component/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content text="Home Screen" />} />
          <Route path="/profile" element={<Content text="Profile Screen" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
