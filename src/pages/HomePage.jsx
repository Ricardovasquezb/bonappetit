import React from "react";
import "../assets/css/home.css";
import LayoutType2 from "../components/LayoutType2";
import Home from "../containers/Home";

const HomePage = props => {
  return (
    <div className="home">
      <LayoutType2 Box={<Home />} />
    </div>
  );
};

export default HomePage;
