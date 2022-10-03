import React from "react";

import "antd/dist/antd.min.css";
import "./App.css";

// Header of the Application
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeRouter from "./routes/HomeRouter";

const App = () => {
  return (
    <div className="App">
      <div className="header-holder">
        <Header />
      </div>

      <HomeRouter />

      <div className="footer-holder">
        <Footer />
      </div>
    </div>
  );
};

export default App;
